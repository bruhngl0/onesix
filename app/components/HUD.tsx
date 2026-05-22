"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const SlapsLogo = ({ color = "#fff" }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={150}
    height={30}
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

const NAV_ITEMS = ["ABOUT", "WORK", "CAREERS", "CONTACT"] as const;
type NavItem = (typeof NAV_ITEMS)[number];

const NAV_ROUTES: Record<NavItem, string> = {
  ABOUT: "/about",
  WORK: "/workgrid",
  CAREERS: "/careers",
  CONTACT: "/contact",
};

export default function HUD() {
  const router = useRouter();
  const pathname = usePathname();

  const [scrollPct, setScrollPct] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState({
    barcelona: "",
    newYork: "",
  });

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Clock
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const fmt = (tz: string) =>
        now.toLocaleTimeString("en-US", {
          timeZone: tz,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
      setCurrentTime({
        barcelona: fmt("Europe/Madrid"),
        newYork: fmt("America/New_York"),
      });
    };
    tick();
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);

  // Scroll percentage
  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? Math.round((window.scrollY / max) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (item: NavItem) => {
    setIsMenuOpen(false);
    router.push(NAV_ROUTES[item]);
  };

  // HUD text is always white, except when menu is open → black (menu is frosted white)
  const fg = isMenuOpen ? "#000" : "#fff";
  const fgMuted = isMenuOpen ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.6)";

  return (
    <>
      <style>{`
        :root {
          --hud-margin: 1.16rem;
          --hud-curve: cubic-bezier(0.4, 0, 0.2, 1);
        }

        @font-face {
          font-family: 'TGFont';
          src: url('/tg.otf') format('opentype');
          font-display: swap;
        }

        /* ── Menu overlay ── */
        .hud-overlay {
          position: fixed;
          top: 0; left: 0;
          margin: var(--hud-margin);
          width: calc(100% - var(--hud-margin) * 2);
          height: 1px;
          opacity: 0;
          pointer-events: none;
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          z-index: 400;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          transition:
            height 0.35s var(--hud-curve),
            opacity 0.35s var(--hud-curve);
          overflow: hidden;
        }
        .hud-overlay--open {
          height: calc(100dvh - var(--hud-margin) * 2);
          opacity: 1;
          pointer-events: all;
        }

        .hud-nav-link {
          font-size: clamp(2.5rem, 8vw, 8rem);
          font-weight: 900;
          text-transform: uppercase;
          font-family: TGFont, 'Barlow Condensed', sans-serif;
          color: #000;
          background: none;
          border: none;
          line-height: 1em;
          letter-spacing: -0.085em;
          display: block;
          padding-left: clamp(2rem, 8vw, 9rem);
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .hud-nav-link:hover { opacity: 0.45; }

        /* ── HUD shell ── */
        .hud-shell {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1000;
          font-family: 'Barlow Condensed', sans-serif;
        }

        .hud-el {
          position: absolute;
          pointer-events: all;
          cursor: pointer;
          transition: color 0.35s ease;
          user-select: none;
        }

        .hud-logo  { top: 14px; left: 18px; }
        .hud-menu  {
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 13px;
          letter-spacing: 0.18em;
          z-index: 1001;
          white-space: nowrap;
        }
        .hud-scroll {
          top: 14px; right: 18px;
          font-size: 12px;
          letter-spacing: 0.14em;
          pointer-events: none;
        }
        .hud-times {
          bottom: 18px; left: 18px;
          font-size: 11px;
          letter-spacing: 0.12em;
          display: flex;
          gap: 18px;
          pointer-events: none;
        }
        .hud-tunes {
          bottom: 18px; right: 18px;
          font-size: 12px;
          letter-spacing: 0.2em;
          font-weight: 700;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          :root { --hud-margin: 0.75rem; }
          .hud-logo { top: 10px; left: 14px; transform: scale(0.8); transform-origin: top left; }
          .hud-menu  { top: 10px; font-size: 11px; }
          .hud-scroll, .hud-times { display: none; }
          .hud-tunes { bottom: 14px; right: 14px; font-size: 11px; }
        }
      `}</style>

      {/* Frosted menu overlay */}
      <div className={`hud-overlay ${isMenuOpen ? "hud-overlay--open" : ""}`}>
        <nav>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className="hud-nav-link"
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* HUD chrome */}
      <div className="hud-shell">
        <div className="hud-el hud-logo">
          <SlapsLogo color={fg} />
        </div>

        <div
          className="hud-el hud-menu"
          style={{ color: fg }}
          onClick={() => setIsMenuOpen((o) => !o)}
        >
          {isMenuOpen ? "[ CLOSE ]" : "[ MENU ]"}
        </div>

        <div className="hud-el hud-scroll" style={{ color: fgMuted }}>
          (SCROLL {scrollPct}%)
        </div>

        <div className="hud-el hud-times" style={{ color: fgMuted }}>
          <span>BARCELONA ({currentTime.barcelona})</span>
          <span>NEW YORK ({currentTime.newYork})</span>
        </div>

        <div className="hud-el hud-tunes" style={{ color: fg }}>
          TUNES
        </div>
      </div>
    </>
  );
}
