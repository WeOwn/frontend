import api from "../service/apiGateway";

const API_BASE = (api.defaults && api.defaults.baseURL) || "https://api.weown.ai/";

let sessionId = "";
let startTime = 0;
let propertyId = null;
let cleanupFns = [];
let clickListener = null;
let heartbeatInterval = null;

const getSessionId = () => {
  if (sessionId) return sessionId;
  try {
    sessionId = sessionStorage.getItem("prop_analytics_session");
    if (!sessionId) {
      sessionId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      sessionStorage.setItem("prop_analytics_session", sessionId);
    }
  } catch (e) {
    sessionId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  }
  return sessionId;
};

const getRef = () => {
  try {
    return new URLSearchParams(window.location.search).get("ref") || "";
  } catch (e) {
    return "";
  }
};

const sendEvent = (eventType, element = "", detail = null, durationMs = 0) => {
  if (!propertyId) return;
  try {
    fetch(`${API_BASE}property-analytics/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        propertyId,
        ref: getRef(),
        sessionId: getSessionId(),
        eventType,
        element,
        detail,
        durationMs,
      }),
    }).catch(() => {});
  } catch (e) {}
};

const getLabel = (el) => {
  if (!el) return "";
  if (el.dataset?.track) return el.dataset.track;
  const text = (el.innerText || el.textContent || "").trim();
  if (text && text.length <= 60) return text;
  const aria = el.getAttribute("aria-label");
  if (aria) return aria;
  const title = el.getAttribute("title");
  if (title) return title;
  return el.tagName?.toLowerCase() || "";
};

const handleClick = (e) => {
  const el = e.target?.closest?.(
    "button, a, [role=button], [onclick], [data-track], .cursor-pointer"
  );
  if (!el) return;
  const label = getLabel(el);
  if (!label) return;
  const href = el.getAttribute?.("href") || "";
  sendEvent("button_click", label, { href, tag: el.tagName?.toLowerCase() });
};

export const stopAnalytics = () => {
  cleanupFns.forEach((fn) => {
    try { fn(); } catch (e) {}
  });
  cleanupFns = [];
  if (heartbeatInterval) {
    clearInterval(heartbeatInterval);
    heartbeatInterval = null;
  }
  if (clickListener) {
    document.removeEventListener("click", clickListener, true);
    clickListener = null;
  }
  propertyId = null;
};

export const startAnalytics = (propId) => {
  stopAnalytics();
  propertyId = propId;
  if (!propertyId) return;
  startTime = Date.now();

  sendEvent("page_view", "page");

  clickListener = handleClick;
  document.addEventListener("click", clickListener, true);

  const sectionSeen = {};
  const onSectionVisible = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting && entry.target?.id) {
        const id = entry.target.id;
        if (!sectionSeen[id]) {
          sectionSeen[id] = true;
          sendEvent("section_view", id);
        }
      }
    }
  };
  let observer = null;
  try {
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(onSectionVisible, { threshold: 0.3 });
      const sections = document.querySelectorAll("[id^='section']");
      sections.forEach((s) => observer.observe(s));
    }
  } catch (e) {}

  heartbeatInterval = setInterval(() => {
    sendEvent("heartbeat", "page", null, Date.now() - startTime);
  }, 15000);

  const handleExit = () => {
    const durationMs = Date.now() - startTime;
    try {
      navigator.sendBeacon(
        `${API_BASE}property-analytics/track`,
        new Blob(
          [JSON.stringify({
            propertyId,
            ref: getRef(),
            sessionId: getSessionId(),
            eventType: "page_exit",
            element: "page",
            durationMs,
          })],
          { type: "text/plain;charset=UTF-8" }
        )
      );
    } catch (e) {}
    try {
      fetch(`${API_BASE}property-analytics/track`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          propertyId,
          ref: getRef(),
          sessionId: getSessionId(),
          eventType: "page_exit",
          element: "page",
          durationMs,
        }),
        keepalive: true,
      }).catch(() => {});
    } catch (e) {}
  };
  window.addEventListener("pagehide", handleExit);
  window.addEventListener("beforeunload", handleExit);

  cleanupFns = [
    () => {
      if (observer) observer.disconnect();
      window.removeEventListener("pagehide", handleExit);
      window.removeEventListener("beforeunload", handleExit);
    },
  ];
};

export const trackEvent = (eventType, element = "", detail = null, durationMs = 0) => {
  sendEvent(eventType, element, detail, durationMs);
};
