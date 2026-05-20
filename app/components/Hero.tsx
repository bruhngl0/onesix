"use client";

import { useEffect, useRef, useState } from "react";
import { Video, ImageKitProvider } from "@imagekit/react";

const SlapsLogo = ({ color = "#000", width = 150, height = 30 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 150 30"
  >
    <text
      x="0"
      y="23"
      fill={color}
      fontFamily="'Montserrat', 'Arial Black', Arial, sans-serif"
      fontSize="28"
      fontWeight="900"
      letterSpacing="-1.5"
    >
      ONESIX8
    </text>
  </svg>


);

export default function SlapsHero() {
  const [scrollPct, setScrollPct] = useState(0);
  const [inverted, setInverted] = useState(false);
  const [currentTime, setCurrentTime] = useState({
    barcelona: "",
    newYork: "",
  });
  const heroRef = useRef<HTMLElement>(null);

  // Clock updater
  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const bcn = now.toLocaleTimeString("en-US", {
        timeZone: "Europe/Madrid",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const ny = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime({ barcelona: bcn, newYork: ny });
    };
    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  // Scroll % + inversion trigger
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? Math.round((scrollTop / maxScroll) * 100) : 0;
      setScrollPct(pct);

      // Flip HUD colors once past the hero section
      const heroHeight = heroRef.current?.offsetHeight ?? window.innerHeight;
      setInverted(scrollTop >= heroHeight - 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic color values
  const fg = inverted ? "#000" : "#fff";
  const fgMuted = inverted ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.75)";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Barlow:wght@400;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .slaps-root {
          font-family: 'Barlow Condensed', sans-serif;
          background: #000;
          color: #fff;
        }

        /* ── Fixed HUD overlay ── */
        .slaps-hud {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
        }

        /* top-left: logo */
        .hud-logo {
          position: absolute;
          top: 14px;
          left: 18px;
          pointer-events: all;
          cursor: pointer;
        }

        /* top-center: menu */
        .hud-menu {
          position: absolute;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 13px;
          letter-spacing: 0.18em;
          font-weight: 400;
          pointer-events: all;
          cursor: pointer;
          user-select: none;
          transition: color 0.4s ease;
        }
        .hud-menu:hover { opacity: 0.7; }

        /* top-right: scroll% */
        .hud-scroll {
          position: absolute;
          top: 14px;
          right: 18px;
          font-size: 12px;
          letter-spacing: 0.14em;
          transition: color 0.4s ease;
        }

        /* bottom-left: times */
        .hud-times {
          position: absolute;
          bottom: 18px;
          left: 18px;
          font-size: 11px;
          letter-spacing: 0.12em;
          display: flex;
          gap: 18px;
          transition: color 0.4s ease;
        }

        /* bottom-right: TUNES */
        .hud-tunes {
          position: absolute;
          bottom: 18px;
          right: 18px;
          font-size: 12px;
          letter-spacing: 0.2em;
          font-weight: 700;
          pointer-events: all;
          cursor: pointer;
          transition: color 0.4s ease;
        }

        /* bottom-center: scroll arrow */
        .hud-arrow {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: bounce 2s ease-in-out infinite;
          transition: opacity 0.4s ease;
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(6px); }
        }

        /* ── Hero section ── */
        .slaps-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .hero-video {
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.72) sepia(0.3) saturate(1.2);
        }

        /* warm amber overlay to match screenshot */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(80, 40, 0, 0.35) 0%,
            rgba(0,0,0,0.1) 60%,
            rgba(0,0,0,0.4) 100%
          );
        }

        /* article list – left side */
        .hero-articles {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-20%);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .article-item {
          cursor: pointer;
          transition: opacity 0.2s;
          line-height: 1.1;
        }
        .article-item:hover { opacity: 0.75; }

        .article-brand {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: rgba(255,255,255,0.85);
          letter-spacing: 0.01em;
          display: block;
        }
        .article-brand.active {
          font-size: 28px;
          color: #fff;
        }

        .article-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.6);
          display: block;
          margin-bottom: 10px;
        }
        .article-brand.active + .article-title {
          color: rgba(255,255,255,0.8);
          font-size: 11px;
        }

        /* ── Content below hero ── */
        .slaps-content {
          background: #0a0a0a;
          padding: 80px 24px;
          min-height: 200vh;
        }
        .content-inner {
          max-width: 900px;
          margin: 0 auto;
        }
        .content-inner h2 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(40px, 7vw, 90px);
          font-weight: 900;
          letter-spacing: -0.01em;
          line-height: 0.95;
          color: #fff;
          margin-bottom: 40px;
        }
        .content-inner p {
          font-family: 'Barlow', sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255,255,255,0.55);
          max-width: 560px;
        }
      `}</style>

      <div className="slaps-root">
        {/* ── Fixed HUD ── */}
        <div className="slaps-hud">
          <div className="hud-logo">
            <SlapsLogo color={fg} />
          </div>

          <div className="hud-menu" style={{ color: fg }}>
            [ MENU ]
          </div>

          <div className="hud-scroll" style={{ color: fgMuted }}>
            (SCROLL {scrollPct}%)
          </div>

          <div className="hud-times" style={{ color: fgMuted }}>
            <span>BARCELONA ({currentTime.barcelona})</span>
            <span>NEW YORK ({currentTime.newYork})</span>
          </div>

          <div className="hud-tunes" style={{ color: fg }}>
            TUNES
          </div>

          <div className="hud-arrow" style={{ opacity: inverted ? 0 : 1 }}>
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L10 10L19 1"
                stroke={fg}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="slaps-hero" ref={heroRef}>
          <ImageKitProvider urlEndpoint="https://ik.imagekit.io/onesix">
            <Video
              className="hero-video"
              src="https://ik.imagekit.io/onesix/1219_WEBCOVER_01_DEF%20(1).mov/ik-video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </ImageKitProvider>{" "}
          <div className="hero-overlay" />
          {/* Article list */}
        </section>
      </div>
    </>
  );
}
