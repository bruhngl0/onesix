"use client";

import { useState, useRef, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type MediaType = "video" | "image";

interface MediaObject {
  type: MediaType;
  src: string;
  poster?: string;
}

interface MediaItemProps {
  item: MediaObject | null;
  fill?: boolean;
}

interface MediaBlock {
  layout: "full" | "two-col" | "three-col" | "two-col-asymmetric";
  media: MediaObject | MediaObject[];
  aspectRatio?: string;
}

interface ProjectPageProps {
  client?: string;
  title?: string;
  description?: string;
  services?: string[];
  heroMedia?: MediaObject | null;
  mediaBlocks?: MediaBlock[];
}

// ─── MediaItem ───────────────────────────────────────────────────────────────

const MediaItem = ({ item, fill = false }: MediaItemProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () =>
      setProgress(v.duration ? v.currentTime / v.duration : 0);
    v.addEventListener("timeupdate", onTime);
    return () => v.removeEventListener("timeupdate", onTime);
  }, []);

  if (!item) return null;

  const wrapStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: fill ? "100%" : "auto",
    overflow: "hidden",
    background: "#0d0d0d",
    display: "block",
  };

  if (item.type === "video") {
    const togglePlay = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!videoRef.current) return;
      playing ? videoRef.current.pause() : videoRef.current.play();
    };
    const toggleMute = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!videoRef.current) return;
      videoRef.current.muted = !muted;
      setMuted(!muted);
    };
    const toggleFS = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (videoRef.current?.requestFullscreen)
        videoRef.current.requestFullscreen();
    };

    return (
      <div style={wrapStyle} className="slaps-media">
        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster}
          muted={muted}
          loop
          playsInline
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          style={{
            width: "100%",
            height: fill ? "100%" : "auto",
            display: "block",
            objectFit: "cover",
          }}
        />
        <div className="slaps-controls">
          <button
            className="slaps-ctrl slaps-ctrl--play"
            onClick={togglePlay}
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <svg width="9" height="11" viewBox="0 0 9 11" fill="currentColor">
                <rect x="0" y="0" width="3" height="11" rx="1" />
                <rect x="5.5" y="0" width="3" height="11" rx="1" />
              </svg>
            ) : (
              <svg width="9" height="11" viewBox="0 0 9 11" fill="currentColor">
                <polygon points="0,0 9,5.5 0,11" />
              </svg>
            )}
          </button>

          <div className="slaps-progress">
            <div
              className="slaps-progress__fill"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <button
            className="slaps-ctrl"
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="currentColor"
              >
                <path d="M0,3.5 L3,3.5 L7,0 L7,11 L3,7.5 L0,7.5 Z" />
                <line
                  x1="10"
                  y1="2"
                  x2="13"
                  y2="9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="currentColor"
              >
                <path d="M0,3.5 L3,3.5 L7,0 L7,11 L3,7.5 L0,7.5 Z" />
                <path
                  d="M9.5,2 Q13,5.5 9.5,9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>

          <button
            className="slaps-ctrl"
            onClick={toggleFS}
            aria-label="Fullscreen"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            >
              <polyline points="0.5,3.5 0.5,0.5 3.5,0.5" />
              <polyline points="8.5,0.5 11.5,0.5 11.5,3.5" />
              <polyline points="11.5,8.5 11.5,11.5 8.5,11.5" />
              <polyline points="3.5,11.5 0.5,11.5 0.5,8.5" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={wrapStyle} className="slaps-media">
      <img
        src={item.src}
        alt=""
        style={{
          width: "100%",
          height: fill ? "100%" : "auto",
          display: "block",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

// ─── Block renderers ──────────────────────────────────────────────────────────

const BLOCK_RENDERERS: Record<
  string,
  (block: MediaBlock, i: number) => React.ReactNode
> = {
  full: (block, i) => (
    <div key={i} className="slaps-block slaps-block--full">
      <div style={{ aspectRatio: block.aspectRatio || "16/9", width: "100%" }}>
        <MediaItem item={block.media as MediaObject} fill />
      </div>
    </div>
  ),

  "two-col": (block, i) => (
    <div key={i} className="slaps-block slaps-block--two-col">
      {(block.media as MediaObject[]).map((m, j) => (
        <div key={j} style={{ aspectRatio: block.aspectRatio || "3/2" }}>
          <MediaItem item={m} fill />
        </div>
      ))}
    </div>
  ),

  "three-col": (block, i) => (
    <div key={i} className="slaps-block slaps-block--three-col">
      {(block.media as MediaObject[]).map((m, j) => (
        <div key={j} style={{ aspectRatio: block.aspectRatio || "3/2" }}>
          <MediaItem item={m} fill />
        </div>
      ))}
    </div>
  ),

  "two-col-asymmetric": (block, i) => (
    <div key={i} className="slaps-block slaps-block--asymmetric">
      <div
        className="slaps-block--asymmetric__big"
        style={{ aspectRatio: "4/3" }}
      >
        <MediaItem item={(block.media as MediaObject[])[0]} fill />
      </div>
      <div
        className="slaps-block--asymmetric__small"
        style={{ aspectRatio: "3/4" }}
      >
        <MediaItem item={(block.media as MediaObject[])[1]} fill />
      </div>
    </div>
  ),
};

// ─── ProjectPage ──────────────────────────────────────────────────────────────

export default function ProjectPage({
  client = "CLIENT NAME",
  title = "PROJECT TITLE",
  description = "",
  services = [],
  heroMedia = null,
  mediaBlocks = [],
}: ProjectPageProps) {
  return (
    <>
      <style>{CSS}</style>

      <div className="slaps-page">
        {heroMedia && (
          <div className="slaps-hero">
            <MediaItem item={heroMedia} fill />
          </div>
        )}

        <div className="slaps-info">
          <div className="slaps-info__left">
            <p className="slaps-info__client">{client}</p>
            <h1 className="slaps-info__title">{title}</h1>
          </div>
          <div className="slaps-info__right">
            {description && <p className="slaps-info__desc">{description}</p>}
            {services.length > 0 && (
              <div className="slaps-services">
                <span className="slaps-services__label">SERVICES</span>
                <span className="slaps-services__x">✕</span>
                <span className="slaps-services__list">
                  {services.join(" — ")}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="slaps-media-section">
          {mediaBlocks.map((block, i) => {
            const renderer = BLOCK_RENDERERS[block.layout];
            return renderer ? renderer(block, i) : null;
          })}
        </div>
      </div>
    </>
  );
}

// ─── CSS ──────────────────────────────────────────────────────────────────────

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .slaps-page {
    background: #ffffff;
    color: #0a0a0a;
    font-family: 'DM Mono', monospace;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* ── HERO ── */
  .slaps-hero {
    width: calc(100% - 24px);
    aspect-ratio: 16 / 8;
    background: #0d0d0d;
    overflow: hidden;
    margin: 12px 12px 0;
    margin-top: 2.8rem;
  }
  .slaps-hero .slaps-media { width: 100%; height: 100%; }
  .slaps-hero video,
  .slaps-hero img {
    width: 100%; height: 100%; object-fit: cover; display: block;
  }

  /* ── INFO ── */
  .slaps-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 48px 40px 44px;
    gap: 40px;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    margin-top: 1rem;
  }
  .slaps-info__client {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.22em;
    color: rgba(0,0,0,0.4);
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .slaps-info__title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(28px, 3.5vw, 52px);
    letter-spacing: 0.03em;
    line-height: 0.95;
    color: #0a0a0a;
    text-transform: uppercase;
    font-weight: 400;
  }
  .slaps-info__desc {
    font-size: 11px;
    line-height: 1.85;
    color: rgba(0,0,0,0.6);
    margin-bottom: 28px;
    font-weight: 300;
  }
  .slaps-services {
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;
  }
  .slaps-services__label { font-size: 9px; letter-spacing: 0.2em; color: rgba(0,0,0,0.3); }
  .slaps-services__x { font-size: 9px; color: rgba(0,0,0,0.2); }
  .slaps-services__list { font-size: 9.5px; letter-spacing: 0.1em; color: rgba(0,0,0,0.45); line-height: 1.7; }

  /* ── MEDIA SECTION ── */
  .slaps-media-section {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 12px;
  }

  .slaps-block { width: 100%; line-height: 0; overflow: hidden; }

  .slaps-block--full { display: block; }
  .slaps-block--full .slaps-media,
  .slaps-block--full video,
  .slaps-block--full img { width: 100%; height: 100%; display: block; object-fit: cover; }

  .slaps-block--two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; }
  .slaps-block--two-col > div { overflow: hidden; width: 100%; }
  .slaps-block--two-col .slaps-media,
  .slaps-block--two-col video,
  .slaps-block--two-col img { width: 100%; height: 100%; display: block; object-fit: cover; }

  .slaps-block--three-col { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4px; }
  .slaps-block--three-col > div { overflow: hidden; width: 100%; }
  .slaps-block--three-col .slaps-media,
  .slaps-block--three-col video,
  .slaps-block--three-col img { width: 100%; height: 100%; display: block; object-fit: cover; }

  .slaps-block--asymmetric { display: flex; align-items: stretch; gap: 4px; }
  .slaps-block--asymmetric__big { flex: 0 0 calc(63% - 2px); overflow: hidden; }
  .slaps-block--asymmetric__small { flex: 1; overflow: hidden; }
  .slaps-block--asymmetric .slaps-media,
  .slaps-block--asymmetric video,
  .slaps-block--asymmetric img { width: 100%; height: 100%; display: block; object-fit: cover; }

  /* ── VIDEO CONTROLS ── */
  .slaps-controls {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 16px 14px;
    background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.25s ease;
  }
  .slaps-media:hover .slaps-controls { opacity: 1; }

  .slaps-ctrl {
    background: none; border: none; cursor: pointer; padding: 0;
    color: rgba(255,255,255,0.9);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; transition: color 0.15s;
  }
  .slaps-ctrl:hover { color: #fff; }

  .slaps-progress {
    flex: 1; height: 1px;
    background: rgba(255,255,255,0.2);
    position: relative; cursor: pointer;
  }
  .slaps-progress__fill {
    position: absolute; left: 0; top: 0; height: 100%;
    background: rgba(255,255,255,0.8);
    transition: width 0.1s linear;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    .slaps-hero { width: calc(100% - 16px); margin: 8px 8px 0; }
    .slaps-info { grid-template-columns: 1fr; padding: 32px 20px; gap: 24px; }
    .slaps-block--three-col { grid-template-columns: 1fr 1fr; }
    .slaps-block--three-col > div:last-child:nth-child(3) { grid-column: 1 / -1; }
  }

  @media (max-width: 480px) {
    .slaps-hero { width: calc(100% - 12px); margin: 6px 6px 0; }
    .slaps-block--two-col,
    .slaps-block--three-col { grid-template-columns: 1fr; }
    .slaps-block--asymmetric { flex-direction: column; }
    .slaps-block--asymmetric__big,
    .slaps-block--asymmetric__small { flex: none; width: 100%; }
  }
`;
