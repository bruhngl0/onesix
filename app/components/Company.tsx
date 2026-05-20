"use client";

import React from "react";
import { Image, ImageKitProvider } from "@imagekit/react";

const logos = [
  { name: "Logo 1", url: "https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/Artboard-2-4-optimized.png?updatedAt=1779162546896" },
  { name: "Logo 2", url: "https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/Artboard-3-3-optimized.png?updatedAt=1779162545333" },
  { name: "Logo 3", url: "https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/Artboard-3-3-optimized.png?updatedAt=1779162545333" },
  { name: "Logo 4", url: "https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/Artboard-6-optimized.png?updatedAt=1779162547136" },
  { name: "Logo 5", url: "https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/Artboard-7-optimized.png?updatedAt=1779162546710" },
  { name: "Logo 6", url: "https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/Artboard-8-optimized.png?updatedAt=1779162546802" },
  { name: "Logo 7", url: "https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/Artboard-9-optimized.png?updatedAt=1779162546884" },
  { name: "Logo 8", url: "https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/Artboard-10-1-optimized.png?updatedAt=1779162545147" },
  { name: "Logo 9", url: "https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/Artboard-24-optimized.png?updatedAt=1779162547150" },
  { name: "Logo 10", url: "https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/Artboard-12-optimized.png?updatedAt=1779162546894" },
  { name: "Logo 11", url: "https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/Artboard-13-optimized.png?updatedAt=1779162545280" },
  { name: "Logo 12", url: "https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/Artboard-14-optimized.png?updatedAt=1779162545341" },
];

const Company = () => {
  return (
    <section className="company-section">
      <style>{`
        @font-face {
          font-family: 'TGFont';
          src: url('/tg.otf') format('opentype')
          font-display: swap;
        }

        .company-section {
          background-color: #f6f6f6;
          padding: 100px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 80vh;
          position: relative;
          width: 100%;
          font-family: 'TGFont', sans-serif;
          font-weight: 400;
          line-height: 0.8em;
        }

        /* The main punchy text */
        .company-heading {
          font-family: 'TGFont', sans-serif;
          font-weight: 400;
          font-size: clamp(96px, 7vw, 72px);
          line-height: 0.8em;
          text-transform: uppercase;
          color: #000;
          max-width: 95vw;
          letter-spacing: -0.08em;
          padding-top: 6rem;
          padding-bottom: 6rem;
          margin-bottom: 80px;
        }

        .company-heading span {
          display: block;
        }


        .work-with-us{
          font-family: 'TGFont', sans-serif;
          font-weight: 400;
          font-size: clamp(96px, 7vw, 72px);
          line-height: 0.8em;
          text-transform: uppercase;
          color: #000;
          max-width: 95vw;
          letter-spacing: -0.08em;
          padding-top: 14rem;
          padding-bottom: 2rem;
          margin-bottom: 80px;
        }

        /* Logo Row */
        .logo-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          justify-items: center;
          align-items: center;
          gap: 60px 40px;
          width: 100%;
          max-width: 95vw;
          margin-top: auto;
        }

        .logo-item {
          height: 80px; /* Increased logo height */
          filter: grayscale(1) brightness(0);
          opacity: 0.8;
          transition: opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo-item:hover {
          opacity: 1;
        }

        .logo-img {
          height: 100%;
          width: auto;
          object-fit: contain;
        }
        .logo-name {
          margin-top: 6px;
          font-family: 'TGFont', sans-serif;
          font-weight: 400;
          font-size: 1rem; /* Larger font size for logo names */
          color: #111;
        }

        /* Subtle Grain Overlay */
        .company-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          opacity: 0.04;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .logo-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 768px) {
          .company-section {
            padding: 60px 15px;
          }
          .logo-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
          .logo-item {
            height: 40px;
          }
        }
        
        @media (max-width: 480px) {
          .logo-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <h1 className="company-heading">
        WORKING ACROSS THE INTERSECTION OF SPORTS,
        <span>LIFESTYLE, MUSIC AND TECH</span>
        OUR TEAM SPECIALIZES IN CREATIVE THINKING,
        <span>STRATEGY AND DIRECTION</span>
      </h1>

      <div className="logo-grid">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img
              src={logo.url}
              alt={`${logo.name} logo`}
              className="logo-img"
              // Fallback for demo if crawler blocked
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />

          </div>
        ))}
      </div>

      <h1 className="work-with-us">WORK WITH US</h1>
    </section>
  );
};

export default Company;
