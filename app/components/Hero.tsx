"use client";

import { useEffect, useRef, useState } from "react";
import { Video, ImageKitProvider } from "@imagekit/react";

const SlapsLogo = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="19"
    viewBox="0 0 139.405 26.925"
  >
    <path
      fill={color}
      d="M7.406,50.432c.219,2.445,2.627,3.211,4.852,3.211,2.043,0,3.977-.729,3.977-2.444,0-1.423-1.022-1.86-3.539-2.3l-4.451-.766C3.9,47.4.766,45.214.766,40.508c0-5.217,4.779-8.428,10.982-8.428,7.188,0,11.055,3.211,11.6,8.355H16.126c-.149-1.97-1.824-2.955-4.305-2.955-2.083,0-3.539.912-3.539,2.408,0,1.46,1.167,1.786,3.393,2.19l4.889.875c4.707.839,7.224,3.356,7.224,7.7,0,5.29-5,8.354-11.235,8.354C5.436,59.009.584,56.16,0,50.432Z"
      transform="translate(0 -32.08)"
    />
    <path
      fill={color}
      d="M359.41,38h7.7V58.21h12.477v5.838H359.41Z"
      transform="translate(-332.668 -37.56)"
    />
    <path
      fill={color}
      d="M670.861,59.195h-10.4l-1.824,4.853H651.16L661.448,38H670.1L680.42,64.05h-7.807Zm-8.246-5.8h6.13l-2.956-8.133h-.109Z"
      transform="translate(-602.709 -37.56)"
    />
    <path
      fill={color}
      d="M1082.825,55.984v8.063h-7.515V38h12.626c6.823,0,10.727,3.064,10.727,9.048,0,5.911-3.9,8.938-10.654,8.938Zm4.2-5.8c3.028,0,4.122-1.167,4.122-3.138,0-2.08-1.094-3.211-4.122-3.211h-4.2V50.18Z"
      transform="translate(-995.3 -37.56)"
    />
    <path
      fill={color}
      d="M1415.136,50.432c.223,2.445,2.627,3.211,4.853,3.211,2.043,0,3.977-.729,3.977-2.444,0-1.423-1.022-1.86-3.539-2.3l-4.451-.766c-4.342-.731-7.482-2.919-7.482-7.625,0-5.217,4.78-8.428,10.982-8.428,7.188,0,11.055,3.211,11.6,8.355h-7.224c-.149-1.97-1.824-2.955-4.306-2.955-2.079,0-3.539.912-3.539,2.408,0,1.46,1.167,1.786,3.393,2.19l4.889.875c4.706.839,7.224,3.356,7.224,7.7,0,5.29-5,8.354-11.235,8.354-7.115,0-11.967-2.845-12.551-8.574Z"
      transform="translate(-1302.986 -32.08)"
    />
    <path
      fill={color}
      d="M1767.15,281.67h7.918v7.917h-7.918Z"
      transform="translate(-1635.663 -263.099)"
    />
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
