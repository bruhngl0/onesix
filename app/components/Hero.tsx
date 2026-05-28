"use client";

import { useRef, useState, useEffect } from "react";
import { Video, ImageKitProvider } from "@imagekit/react";
import Image from "next/image";
import { getCookie, setCookie } from "../utils/cookies";

export default function SlapsHero() {
  const heroRef = useRef<HTMLElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const hasSeen = getCookie("has-seen-hero");
    Promise.resolve().then(() => {
      setIsClient(true);
      if (!hasSeen) {
        // First visit: load heavy video automatically and set cookie
        setShowVideo(true);
        setCookie("has-seen-hero", "true", 7); // Cache this layout decision for 7 days
      } else {
        // Subsequent visit: show highly optimized static image to save bandwidth/speed
        setShowVideo(false);
      }
    });
  }, []);

  return (
    <>
      <style>{`
        .slaps-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #000;
        }
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }
        .hero-poster {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }
        .play-hero-btn {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          background: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 10px 24px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .play-hero-btn:hover {
          background: #fff;
          color: #000;
          border-color: #fff;
        }
      `}</style>

      <section className="slaps-hero" ref={heroRef}>
        {isClient && showVideo ? (
          <ImageKitProvider urlEndpoint="https://ik.imagekit.io/onesix">
            <Video
              className="hero-video"
              src="https://ik.imagekit.io/onesix/1219_WEBCOVER_01_DEF%20(1).mov/ik-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </ImageKitProvider>
        ) : (
          <>
            {isClient && (
              <div className="hero-poster">
                <Image
                  src="https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/ROSS-STILLS_1.44.1-1-min-2048x1152-optimized.png.?updatedAt=1779162547539&tr=f-auto,q-80,w-1920"
                  alt="Cinematic Cover Preview"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
            <button className="play-hero-btn" onClick={() => setShowVideo(true)}>
              [ PLAY CINEMATIC INTRO LOOP ]
            </button>
          </>
        )}
      </section>
    </>
  );
}
