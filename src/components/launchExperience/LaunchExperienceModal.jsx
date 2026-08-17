import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePreconnectMediaOrigin } from "../../hooks/usePreconnectMediaOrigin";
import localStyles from "./LaunchExperienceModal.module.css";

const YOUTUBE_FALLBACK =
  "https://www.youtube.com/embed/5VOTfkBfgCI?autoplay=1&rel=0";

/** Full in-memory buffer above this uses stream + canplaythrough instead. */
const MAX_FULL_BUFFER_BYTES = 200 * 1024 * 1024;

function isDirectVideoUrl(url) {
  if (!url || typeof url !== "string") return false;
  try {
    const { pathname } = new URL(url);
    return /\.(mp4|webm|ogg)(\?|$)/i.test(pathname);
  } catch {
    return false;
  }
}

async function downloadVideoAsBlob(url, { onProgress, signal, maxBytes }) {
  const res = await fetch(url, {
    mode: "cors",
    credentials: "omit",
    signal,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const lenHeader = res.headers.get("content-length");
  const total = lenHeader ? parseInt(lenHeader, 10) : 0;
  if (total > maxBytes) throw new Error("too_large");
  if (total > 0) onProgress(0);

  if (!res.body) {
    const blob = await res.blob();
    if (blob.size > maxBytes) throw new Error("too_large");
    onProgress(100);
    return blob;
  }

  const reader = res.body.getReader();
  const chunks = [];
  let received = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (signal.aborted) throw new DOMException("Aborted", "AbortError");
    chunks.push(value);
    received += value.length;
    if (received > maxBytes) throw new Error("too_large");
    if (total > 0) {
      onProgress(Math.min(99, Math.round((received / total) * 100)));
    }
  }

  onProgress(100);
  const type = res.headers.get("content-type") || "video/mp4";
  return new Blob(chunks, { type });
}

/**
 * Launch experience: preconnects origin; for direct video, prefers full
 * download (when CORS/size allow) then canplaythrough + play; otherwise
 * streams and waits for canplaythrough. Iframe path unchanged.
 */
const LaunchExperienceModal = ({ onClose, view3durl, pageStyles }) => {
  const embedUrl = view3durl || YOUTUBE_FALLBACK;
  const isVideo = isDirectVideoUrl(embedUrl);

  usePreconnectMediaOrigin(view3durl);

  const mediaRef = useRef(null);
  const blobUrlRef = useRef(null);

  const [embedLoading, setEmbedLoading] = useState(true);
  const [videoPlaySrc, setVideoPlaySrc] = useState(null);
  const [loadPercent, setLoadPercent] = useState(null);

  const revokeBlob = useCallback(() => {
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
    }
  }, []);

  /** Buffer remote video: full blob when possible, else use direct URL. */
  useEffect(() => {
    if (!isVideo) {
      setEmbedLoading(true);
      setVideoPlaySrc(null);
      return;
    }

    let cancelled = false;
    const ac = new AbortController();

    setEmbedLoading(true);
    setLoadPercent(null);
    setVideoPlaySrc(null);
    revokeBlob();

    (async () => {
      try {
        const blob = await downloadVideoAsBlob(embedUrl, {
          signal: ac.signal,
          maxBytes: MAX_FULL_BUFFER_BYTES,
          onProgress: (pct) => {
            if (!cancelled && pct != null) setLoadPercent(pct);
          },
        });
        if (cancelled) return;
        const obj = URL.createObjectURL(blob);
        blobUrlRef.current = obj;
        setLoadPercent(100);
        setVideoPlaySrc(obj);
      } catch (e) {
        if (cancelled || e?.name === "AbortError") return;
        setLoadPercent(null);
        setVideoPlaySrc(embedUrl);
      }
    })();

    return () => {
      cancelled = true;
      ac.abort();
      revokeBlob();
    };
  }, [embedUrl, isVideo, revokeBlob]);

  /** Wait until decoder says smooth playback, then reveal + play. */
  useLayoutEffect(() => {
    if (!isVideo || !videoPlaySrc) return undefined;

    const v = mediaRef.current;
    if (!v) return undefined;

    setEmbedLoading(true);

    const finish = () => {
      setEmbedLoading(false);
      setLoadPercent(null);
      v.play().catch(() => {});
    };

    const onCanPlayThrough = () => finish();
    const onError = () => {
      setEmbedLoading(false);
      setLoadPercent(null);
    };

    if (v.readyState >= 4) {
      finish();
      return undefined;
    }

    v.addEventListener("canplaythrough", onCanPlayThrough, { once: true });
    v.addEventListener("error", onError, { once: true });

    try {
      v.load();
    } catch {
      /* ignore */
    }

    return () => {
      v.removeEventListener("canplaythrough", onCanPlayThrough);
      v.removeEventListener("error", onError);
    };
  }, [isVideo, videoPlaySrc]);

  const handleIframeReady = useCallback(() => {
    setEmbedLoading(false);
  }, []);

  const toggleFullscreen = () => {
    const el = mediaRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
  };

  const loaderLabel =
    isVideo && loadPercent != null && loadPercent < 100
      ? `Loading video… ${loadPercent}%`
      : isVideo && embedLoading
        ? "Preparing playback…"
        : "Loading experience…";

  return (
    <div className={pageStyles.modal}>
      <div
        className={pageStyles.modalContent}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <div className={pageStyles.modalHeader}>
          <button
            type="button"
            className={pageStyles.fullscreenButton}
            onClick={toggleFullscreen}
          >
            Fullscreen
          </button>
          <span
            className={pageStyles.closeButton}
            onClick={onClose}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClose();
              }
            }}
          >
            &times;
          </span>
        </div>

        <div className={localStyles.mediaWrap}>
          {embedLoading && (
            <div className={localStyles.spinnerOverlay}>
              <div className={localStyles.spinner} aria-hidden />
              <span>{loaderLabel}</span>
              {isVideo && loadPercent != null && loadPercent < 100 && (
                <div
                  className={localStyles.progressTrack}
                  role="progressbar"
                  aria-valuenow={loadPercent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className={localStyles.progressFill}
                    style={{ width: `${loadPercent}%` }}
                  />
                </div>
              )}
            </div>
          )}

          {isVideo ? (
            videoPlaySrc && (
              <video
                key={videoPlaySrc}
                ref={mediaRef}
                className={`${localStyles.media} ${
                  embedLoading ? localStyles.mediaHidden : ""
                }`}
                src={videoPlaySrc}
                controls
                playsInline
                preload="auto"
                title="Launch Experience"
              />
            )
          ) : (
            <iframe
              key={embedUrl}
              ref={mediaRef}
              className={`${localStyles.media} ${
                embedLoading ? localStyles.mediaHidden : ""
              }`}
              src={embedUrl}
              title="Launch Experience"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              loading="eager"
              onLoad={handleIframeReady}
              onError={handleIframeReady}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LaunchExperienceModal;
