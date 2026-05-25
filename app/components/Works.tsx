"use client";

import { useRef, useState } from "react";
import { Video, ImageKitProvider, Image } from "@imagekit/react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

export const works = [
  {
    index: "01 / 11",
    brand: "Wingstop UK",
    title: "It's hot. And that's cold.",
    video: null,
    href: "#",
  },
  {
    index: "02 / 11",
    brand: "Puma",
    title: "KEEPING UP WITH THE ULTRAS",
    video:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER2.mp4",
    href: "#",
  },
  {
    index: "03 / 11",
    brand: "Royal Enfield",
    title: "THE RETURN OF THE REAL ROADSTAR",
    video: "https://brandingthatslaps.com/wp-content/uploads/2025/09/cove.mp4",
    href: "#",
  },
  {
    index: "04 / 11",
    brand: "Oakley",
    title: "BE WHO YOU ARE",
    video:
      "https://brandingthatslaps.com/wp-content/uploads/2024/07/Composition-1_1-1.mp4",
    href: "#",
  },
  {
    index: "05 / 11",
    brand: "HelloFresh US",
    title: "NOTHING THIS GOOD COMES THIS EASY",
    video:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/FACTOR-COVER.mp4",
    href: "#",
  },
  {
    index: "06 / 11",
    brand: "Under Armour",
    title: "THE HALO STATE",
    video: null,
    href: "#",
  },
  {
    index: "07 / 11",
    brand: "LIV GOLF",
    title: "Park Seo-Joon Korea Launch",
    video:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/LIV-golf-cover2.mp4",
    href: "#",
  },
  {
    index: "08 / 11",
    brand: "FOOT LOCKER",
    title: "Nike DN8",
    video: "https://brandingthatslaps.com/wp-content/uploads/2025/04/big-3.mp4",
    href: "#",
  },
  {
    index: "09 / 11",
    brand: "MoonPay",
    title: "Available on Request",
    video:
      "https://brandingthatslaps.com/wp-content/uploads/2025/10/Comp-1_1.mp4",
    href: "#",
  },
  {
    index: "10 / 11",
    brand: "Nike Football",
    title: "VINI VOA",
    video: null,
    href: "#",
  },
  {
    index: "11 / 11",
    brand: "USHUAÏA IBIZA",
    title: "Where Music Meets Magic",
    video:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/USHUAIA-COVER1-.mp4",
    href: "#",
  },
];

function WorkSlide({ work }: { work: (typeof works)[0] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Narrower active window for 50vh blocks to ensure focus
    if (latest >= 0.35 && latest < 0.65) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  // Vertical parallax/entrance effect
  const yOffset = useTransform(scrollYProgress, [0, 0.25, 1], [20, 0, 0]);

  return (
    <section ref={containerRef} className="work-slide">
      <style>{`
        @font-face {
          font-family: 'TGFont';
          src: url('/tg.otf') format('opentype');
          font-display: swap;
        }
        
        .work-slide {
          position: relative;
          width: 100%;
          height: 100vh; /* Desktop Default */
          background: #fff;
          overflow: hidden;
        }

        /* MOBILE HEIGHT OVERRIDE */
        @media (max-width: 768px) {
          .work-slide {
            height: 50vh; 
          }
          .work-brand {
            font-size: clamp(35px, 12vw, 60px) !important;
          }
          .work-ui {
            padding: 20px !important;
            justify-content: start !important; /* Centers text vertically in the 50vh block */
          }
        }

        .slide-inner {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-areas: "stack";
          overflow: hidden;
        }
        
        .stack-layer { grid-area: stack; width: 100%; height: 100%; }
        
        .work-media-wrap {
          position: relative;
          overflow: hidden;
          z-index: 1;
          transition: filter 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: filter, transform;
        }

        .work-media-wrap.inactive {
          filter: blur(30px);
          transform: scale(1.1);
        }

        .work-media-wrap.active {
          filter: blur(0px);
          transform: scale(1);
        }

        .work-media-wrap video, .work-media-wrap img, .work-media-wrap div {
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          display: block;
        }

        .fallback-image {
          position: absolute;
          top: 0;
          left: 0;
        }

        .work-dimmer {
          z-index: 2;
          background: #000;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .work-dimmer.active { opacity: 0; }
        .work-dimmer.inactive { opacity: 0.5; }

        .work-ui {
          z-index: 3;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 30px 20px;
          color: white;
          font-family: 'Barlow Condensed', sans-serif;
          pointer-events: none;
        }

        .work-brand { 
          font-family: 'TGFont', sans-serif; 
          font-size: clamp(35px, 12vw, 100px); 
          font-weight: 900; 
          text-transform: uppercase; 
          line-height: 0.8; 
          letter-spacing: -0.08em; 
        }

        .work-title { 
          font-size: 24px; 
          text-transform: uppercase; 
          opacity: 0.8; 
          margin-top: 5px; 
          font-style: italic; 
          font-weight: 700; 
          letter-spacing: -0.007em;
        }

        .work-index { 
          font-size: 12px; 
          opacity: 0.4; 
          margin-top: 8px; 
        }

        @media (max-width: 768px) {
          .work-title { font-size: 16px; }
        }
      `}</style>

      <motion.div className="slide-inner" style={{ y: yOffset }}>
        {/* Layer 1: Media */}
        <div
          className={`stack-layer work-media-wrap ${isActive ? "active" : "inactive"}`}
        >
          {work.video ? (
            <ImageKitProvider urlEndpoint="https://ik.imagekit.io/onesix">
              <Video src={work.video} autoPlay muted loop playsInline />
            </ImageKitProvider>
          ) : work.brand === "Wingstop UK" ? (
            <ImageKitProvider urlEndpoint="https://ik.imagekit.io/onesix">
              <Image
                src="https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/videoframe_1714-min-optimized.jpg.jpeg?updatedAt=1779162547441"
                alt="Wingstop UK"
              />
            </ImageKitProvider>
          ) : work.brand === "Nike Football" ? (
            <ImageKitProvider urlEndpoint="https://ik.imagekit.io/onesix">
              <img
                src="https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/NIKE2405_ViniJrDisruptor_ProductStills_Shot_06_220224_AB_0014-1-scaled-optimized.jpg.jpeg?updatedAt=1779162547523"
                alt="Nike Football"
                className="fallback-image"
              />
            </ImageKitProvider>
          ) : work.brand === "Under Armour" ? (
            <ImageKitProvider urlEndpoint="https://ik.imagekit.io/onesix">
              <img
                src="https://ik.imagekit.io/onesix/brandingthatslaps.com_2147c88a-c7c0-4920-8ad4-30fff588c99c/ROSS-STILLS_1.44.1-1-min-2048x1152-optimized.png.?updatedAt=1779162547539"
                alt="Under Armour"
                className="fallback-image"
              />
            </ImageKitProvider>
          ) : (
            <div style={{ background: "#111" }} />
          )}
        </div>

        {/* Layer 2: Dimmer */}
        <div
          className={`stack-layer work-dimmer ${isActive ? "active" : "inactive"}`}
        />

        {/* Layer 3: UI Content */}
        <div className="stack-layer work-ui">
          <div className="work-content">
            <h2 className="work-brand">{work.brand}</h2>
            <p className="work-title">{work.title}</p>
            <p className="work-index">{work.index}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function Works() {
  return (
    <main style={{ background: "white" }}>
      {works.map((work, i) => (
        <WorkSlide key={i} work={work} />
      ))}
    </main>
  );
}
