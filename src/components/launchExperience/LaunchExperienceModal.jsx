import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePreconnectMediaOrigin } from "../../hooks/usePreconnectMediaOrigin";
import localStyles from "./LaunchExperienceModal.module.css";

const YOUTUBE_FALLBACK =
  "https://www.youtube.com/embed/5VOTfkBfgCI?autoplay=1&rel=0";

function isDirectVideoUrl(url) {
  if (!url || typeof url !== "string") return false;
  try {
    const { pathname } = new URL(url);
    return /\.(mp4|webm|ogg)(\?|$)/i.test(pathname);
  } catch {
    return false;
  }
}

/**
 * Launch experience: preconnects to media origin when URL is known; uses
 * native video for direct S3 files (better buffering than iframe); loading UI
 * until embed signals ready.
 */
const LaunchExperienceModal = ({ onClose, view3durl, pageStyles }) => {
  const embedUrl = view3durl || YOUTUBE_FALLBACK;
  const isVideo = isDirectVideoUrl(embedUrl);

  usePreconnectMediaOrigin(view3durl);

  const mediaRef = useRef(null);
  const [embedLoading, setEmbedLoading] = useState(true);

  useEffect(() => {
    setEmbedLoading(true);
  }, [embedUrl]);

  const handleMediaReady = useCallback(() => {
    setEmbedLoading(false);
  }, []);

  const toggleFullscreen = () => {
    const el = mediaRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
  };

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
              <span>Loading experience…</span>
            </div>
          )}

          {isVideo ? (
            <video
              key={embedUrl}
              ref={mediaRef}
              className={`${localStyles.media} ${
                embedLoading ? localStyles.mediaHidden : ""
              }`}
              src={embedUrl}
              controls
              playsInline
              preload="auto"
              title="Launch Experience"
              onLoadedData={handleMediaReady}
              onError={handleMediaReady}
            />
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
              onLoad={handleMediaReady}
              onError={handleMediaReady}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LaunchExperienceModal;
