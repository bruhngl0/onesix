"use client";

import { useRef } from "react";
import { Video, ImageKitProvider } from "@imagekit/react";

export default function SlapsHero() {
  const heroRef = useRef<HTMLElement>(null);

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
        }
      `}</style>

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
        </ImageKitProvider>
      </section>
    </>
  );
}
