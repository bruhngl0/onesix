"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { getCookie, setCookie } from "../utils/cookies";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = getCookie("cookie-consent");
    if (!consent) {
      // Delay showing the banner slightly for better UX entry
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    setCookie("cookie-consent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="cookie-banner-container"
        >
          <style>{`
            .cookie-banner-container {
              position: fixed;
              bottom: 24px;
              left: 50%;
              transform: translateX(-50%);
              z-index: 5000;
              width: calc(100% - 48px);
              max-width: 480px;
              background: rgba(10, 10, 10, 0.75);
              border: 1px solid rgba(255, 255, 255, 0.15);
              backdrop-filter: blur(16px);
              -webkit-backdrop-filter: blur(16px);
              padding: 16px 20px;
              display: flex;
              flex-direction: column;
              gap: 12px;
              color: #fff;
              font-family: 'Barlow Condensed', 'DM Mono', monospace;
            }

            .cookie-content {
              display: flex;
              flex-direction: column;
              gap: 4px;
              text-align: left;
            }

            .cookie-title {
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 0.18em;
              text-transform: uppercase;
              color: #fff;
            }

            .cookie-text {
              font-size: 10px;
              font-weight: 400;
              letter-spacing: 0.08em;
              line-height: 1.5;
              color: rgba(255, 255, 255, 0.6);
            }

            .cookie-actions {
              display: flex;
              justify-content: flex-end;
              gap: 8px;
            }

            .cookie-btn {
              background: none;
              border: 1px solid rgba(255, 255, 255, 0.2);
              color: rgba(255, 255, 255, 0.7);
              font-family: inherit;
              font-size: 10px;
              font-weight: 700;
              letter-spacing: 0.14em;
              text-transform: uppercase;
              padding: 6px 16px;
              cursor: pointer;
              transition: all 0.2s ease;
            }

            .cookie-btn:hover {
              color: #000;
              background: #fff;
              border-color: #fff;
            }

            .cookie-btn--accept {
              border-color: rgba(255, 255, 255, 0.85);
              color: #fff;
            }

            @media (max-width: 480px) {
              .cookie-banner-container {
                bottom: 16px;
                padding: 14px 16px;
              }
            }
          `}</style>
          
          <div className="cookie-content">
            <h4 className="cookie-title">[ COOKIE CONSENT ]</h4>
            <p className="cookie-text">
              We use secure, essential cookies to optimize layout assets, analyze site traffic, and enhance your digital experience.
            </p>
          </div>

          <div className="cookie-actions">
            <button className="cookie-btn" onClick={handleDecline}>
              [ DECLINE ]
            </button>
            <button className="cookie-btn cookie-btn--accept" onClick={handleAccept}>
              [ ACCEPT ]
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
