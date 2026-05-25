"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

type FilterType = "clients" | "services" | "industries" | "all";

type Category =
  | "all"
  | "sports"
  | "lifestyle"
  | "luxury"
  | "music"
  | "food"
  | "auto";

interface WorkItem {
  id: number;
  title: string; // h2 — project name (small, uppercase)
  client: string; // h1.client — big client name
  image: string; // static preview image
  video: string; // hover video
  href: string;
  clients: string[];
  services: string[];
  industries: string[];
  imageSrcSet: string;
  imageSizes: string;
  imageWidth: number;
  imageHeight: number;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const WORK_ITEMS: WorkItem[] = [
  {
    id: 1,
    title: "EPISODE 1: FULL ACCESS WITH RAKAI",
    client: "Under Armour",
    image:
      "https://brandingthatslaps.com/wp-content/uploads/2026/04/07-optimized.png",
    imageSrcSet:
      "https://brandingthatslaps.com/wp-content/uploads/2026/04/07-optimized.png 2052w, https://brandingthatslaps.com/wp-content/uploads/2026/04/07-300x200-optimized.png 300w, https://brandingthatslaps.com/wp-content/uploads/2026/04/07-1024x683-optimized.png 1024w, https://brandingthatslaps.com/wp-content/uploads/2026/04/07-768x512-optimized.png 768w, https://brandingthatslaps.com/wp-content/uploads/2026/04/07-1536x1025-optimized.png 1536w, https://brandingthatslaps.com/wp-content/uploads/2026/04/07-2048x1366-optimized.png 2048w",
    imageSizes: "20vw",
    imageWidth: 2560,
    imageHeight: 1440,

    video: "https://brandingthatslaps.com/wp-content/uploads/2026/04/05.mp4",
    href: "/work/episode-1-full-access-with-rakai/",
    clients: ["Under Armour"],
    services: [
      "Creative Direction",
      "Creative Strategy",
      "Photography",
      "Post Production",
      "Production",
    ],
    industries: ["Sports"],
  },
  {
    id: 2,
    title: "ENDURE",
    client: "Wilson",
    image:
      "https://brandingthatslaps.com/wp-content/uploads/2026/03/Screen-Shot-2026-03-04-at-12.18.32-PM-scaled-optimized.png",
    video:
      "https://brandingthatslaps.com/wp-content/uploads/2026/03/11-AUTOPLAY-_-REPEAT-.mp4",
    href: "work/endure/",
    imageSrcSet:
      "https://brandingthatslaps.com/wp-content/uploads/2026/03/Screen-Shot-2026-03-04-at-12.18.32-PM-scaled-optimized.png",
    imageSizes: "20vw",
    imageWidth: 2560,
    imageHeight: 1440,

    clients: ["Wilson"],
    services: [
      "Campaign Strategy",
      "Creative Direction",
      "Creative Strategy",
      "Photography",
      "Post Production",
      "Production",
      "Visual Identity",
    ],
    industries: ["Sports"],
  },
  {
    id: 3,
    title: "STORM COLLECTION",
    client: "Gymshark",
    image:
      "https://brandingthatslaps.com/wp-content/uploads/2026/03/Screen-Shot-2026-03-03-at-10.46.40-AM-300x200-optimized.png",
    imageSrcSet:
      "https://brandingthatslaps.com/wp-content/uploads/2026/03/Screen-Shot-2026-03-03-at-10.46.40-AM-300x200-optimized.png",
    imageWidth: 2560,
    imageHeight: 1440,

    video:
      "https://brandingthatslaps.com/wp-content/uploads/2026/03/06-ON-REPEAT.mp4",
    href: "work/gymshark/",
    clients: ["Gymshark"],
    services: [
      "Creative Direction",
      "Photography",
      "Post Production",
      "Production",
    ],
    industries: ["Sports", "Lifestyle"],
  },
  {
    id: 4,
    title: "THE DISCIPLINED NAPTHLETE",
    client: "AM: CLUB",
    image:
      "https://brandingthatslaps.com/wp-content/uploads/2025/12/the-disciplined-napthlete-300x169-optimized.png",
    imageSrcSet:
      "https://brandingthatslaps.com/wp-content/uploads/2025/12/the-disciplined-napthlete-scaled-optimized.png 2560w, https://brandingthatslaps.com/wp-content/uploads/2025/12/the-disciplined-napthlete-300x169-optimized.png 300w, https://brandingthatslaps.com/wp-content/uploads/2025/12/the-disciplined-napthlete-1024x576-optimized.png 1024w, https://brandingthatslaps.com/wp-content/uploads/2025/12/the-disciplined-napthlete-768x432-optimized.png 768w, https://brandingthatslaps.com/wp-content/uploads/2025/12/the-disciplined-napthlete-1536x864-optimized.png 1536w, https://brandingthatslaps.com/wp-content/uploads/2025/12/the-disciplined-napthlete-2048x1152-optimized.png 2048w",
    imageSizes: "20vw",
    imageWidth: 2560,
    imageHeight: 1440,
    video:
      "https://brandingthatslaps.com/wp-content/uploads/2025/12/02-1-1.mp4",
    href: "work/the-disciplined-napthlete/",
    clients: ["AM: CLUB"],
    services: ["Creative Direction", "Creative Strategy", "Production"],
    industries: ["Lifestyle"],
  },
  {
    id: 5,
    title: "SUBCULTURAL ARCHIVES",
    client: "Nu Moda",
    image:
      "https://brandingthatslaps.com/wp-content/uploads/2025/12/COVER-01-300x169-optimized.jpg",
    imageSrcSet:
      "https://brandingthatslaps.com/wp-content/uploads/2025/12/COVER-01-optimized.jpg 1200w, https://brandingthatslaps.com/wp-content/uploads/2025/12/COVER-01-300x169-optimized.jpg 300w, https://brandingthatslaps.com/wp-content/uploads/2025/12/COVER-01-1024x576-optimized.jpg 1024w, https://brandingthatslaps.com/wp-content/uploads/2025/12/COVER-01-768x432-optimized.jpg 768w",
    imageSizes: "20vw",
    imageWidth: 1200,
    imageHeight: 675,
    video:
      "https://brandingthatslaps.com/wp-content/uploads/2025/12/COVER-01-1.mp4",
    href: "work/subcultural-archives/",
    clients: ["Nu Moda"],
    services: ["Brand Strategy", "Creative Direction", "Visual Identity"],
    industries: ["Luxury & Fashion"],
  },
  {
    id: 6,
    title: "THE HALO STATE",
    client: "Under Armour",
    image:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-UA-300x169-optimized.jpg",
    imageSrcSet:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-UA-optimized.jpg 1200w, https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-UA-300x169-optimized.jpg 300w, https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-UA-1024x576-optimized.jpg 1024w, https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-UA-768x432-optimized.jpg 768w",
    imageSizes: "20vw",
    imageWidth: 1200,
    imageHeight: 675,
    video:
      "https://brandingthatslaps.com/wp-content/uploads/2025/12/COVER-UA.mp4",
    href: "work/the-halo-state-unlocks-your-aura/",
    clients: ["Under Armour"],
    services: ["Creative Direction", "Post Production", "Production"],
    industries: ["Sports"],
  },
  {
    id: 7,
    title: "IT'S HOT. AND THAT'S COLD.",
    client: "Wingstop UK",
    image:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/videoframe_51637-300x169-optimized.jpg",
    imageSrcSet:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/videoframe_51637-optimized.jpg 1200w, https://brandingthatslaps.com/wp-content/uploads/2025/09/videoframe_51637-300x169-optimized.jpg 300w, https://brandingthatslaps.com/wp-content/uploads/2025/09/videoframe_51637-1024x576-optimized.jpg 1024w, https://brandingthatslaps.com/wp-content/uploads/2025/09/videoframe_51637-768x432-optimized.jpg 768w",
    imageSizes: "20vw",
    imageWidth: 1200,
    imageHeight: 675,
    video:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/533cb6c4-051cab9e-1.mp4",
    href: "work/its-hot-and-thats-cold/",
    clients: ["Wingstop UK"],
    services: ["Campaign Strategy", "Creative Direction", "Production"],
    industries: ["Food & Beverage"],
  },
  {
    id: 8,
    title: "KEEPING UP WITH THE ULTRAS",
    client: "Puma",
    image:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-PUMA-300x145-optimized.jpg",
    imageSrcSet:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-PUMA-optimized.jpg 1200w, https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-PUMA-300x145-optimized.jpg 300w, https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-PUMA-1024x496-optimized.jpg 1024w, https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-PUMA-768x372-optimized.jpg 768w",
    imageSizes: "20vw",
    imageWidth: 1200,
    imageHeight: 581,
    video:
      "https://brandingthatslaps.com/wp-content/uploads/2025/12/COVER-PUMA.mp4",
    href: "work/keeping-up-with-ultras-2/",
    clients: ["Puma"],
    services: ["Creative Direction", "Production"],
    industries: ["Sports"],
  },
  {
    id: 9,
    title: "ARTIFACT BY ALEXIA PUTELLAS",
    client: "Oakley",
    image:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/CH2_FINAL_15s_16x9_1_1-300x169-optimized.jpg",
    imageSrcSet:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/CH2_FINAL_15s_16x9_1_1-optimized.jpg 1200w, https://brandingthatslaps.com/wp-content/uploads/2025/09/CH2_FINAL_15s_16x9_1_1-300x169-optimized.jpg 300w, https://brandingthatslaps.com/wp-content/uploads/2025/09/CH2_FINAL_15s_16x9_1_1-1024x576-optimized.jpg 1024w, https://brandingthatslaps.com/wp-content/uploads/2025/09/CH2_FINAL_15s_16x9_1_1-768x432-optimized.jpg 768w",
    imageSizes: "20vw",
    imageWidth: 1200,
    imageHeight: 675,
    video:
      "https://brandingthatslaps.com/wp-content/uploads/2025/12/CH2_FINAL_15s_16x9_1_1.mp4",
    href: "work/artifact-by-alexia-putellas/",
    clients: ["Oakley"],
    services: ["Creative Direction", "Photography", "Production"],
    industries: ["Sports", "Luxury & Fashion"],
  },
  {
    id: 10,
    title: "JOGA BONITO",
    client: "Nike TN Pack",
    image:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-JOGA-300x213-optimized.jpg",
    imageSrcSet:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-JOGA-optimized.jpg 1200w, https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-JOGA-300x213-optimized.jpg 300w, https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-JOGA-1024x725-optimized.jpg 1024w, https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-JOGA-768x544-optimized.jpg 768w",
    imageSizes: "20vw",
    imageWidth: 1200,
    imageHeight: 850,
    video:
      "https://brandingthatslaps.com/wp-content/uploads/2025/12/COVER-JOGA.mp4",
    href: "work/joga-bonito/",
    clients: ["Nike"],
    services: ["Creative Direction", "Production", "Video"],
    industries: ["Sports"],
  },
  {
    id: 11,
    title: "THE PORTAL OPENED FIRST",
    client: "[UNVRS]",
    image:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-UNVRS-300x175-optimized.jpg",
    imageSrcSet:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-UNVRS-optimized.jpg 1200w, https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-UNVRS-300x175-optimized.jpg 300w, https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-UNVRS-1024x598-optimized.jpg 1024w, https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-UNVRS-768x449-optimized.jpg 768w",
    imageSizes: "20vw",
    imageWidth: 1200,
    imageHeight: 701,
    video:
      "https://brandingthatslaps.com/wp-content/uploads/2025/12/COVER-UNVRS.mp4",
    href: "work/the-portal-opened-first/",
    clients: ["[UNVRS]"],
    services: ["Brand Strategy", "Creative Direction", "Visual Identity"],
    industries: ["Lifestyle"],
  },
  {
    id: 12,
    title: "CONNECTING CULTURES",
    client: "HÏ IBIZA",
    image:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/HI-IBIZA-COVER2-1-300x169-optimized.jpg",
    imageSrcSet:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/HI-IBIZA-COVER2-1-optimized.jpg 1200w, https://brandingthatslaps.com/wp-content/uploads/2025/09/HI-IBIZA-COVER2-1-300x169-optimized.jpg 300w, https://brandingthatslaps.com/wp-content/uploads/2025/09/HI-IBIZA-COVER2-1-1024x576-optimized.jpg 1024w, https://brandingthatslaps.com/wp-content/uploads/2025/09/HI-IBIZA-COVER2-1-768x432-optimized.jpg 768w",
    imageSizes: "20vw",
    imageWidth: 1200,
    imageHeight: 675,
    video:
      "https://brandingthatslaps.com/wp-content/uploads/2025/12/HI-IBIZA-COVER2-1.mp4",
    href: "work/become-one/",
    clients: ["HÏ IBIZA"],
    services: ["Creative Direction", "Production", "Video"],
    industries: ["Music & Entertainment"],
  },
];

// Unique filter values derived from data
const ALL_CLIENTS = [...new Set(WORK_ITEMS.flatMap((w) => w.clients))].sort();
const ALL_SERVICES = [...new Set(WORK_ITEMS.flatMap((w) => w.services))].sort();
const ALL_INDUSTRIES = [
  ...new Set(WORK_ITEMS.flatMap((w) => w.industries)),
].sort();

// ─── WorkCard ────────────────────────────────────────────────────────────────

function WorkCard({ item }: { item: WorkItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <li
      className="project-item"
      data-clients={item.clients.join(" ")}
      data-services={item.services.join(" ")}
      data-industries={item.industries.join(" ")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={item.href} className="project-link">
        {/* Static preview image */}
        <div className="preview">
          <img
            src={item.image}
            srcSet={item.imageSrcSet}
            sizes={item.imageSizes ?? "20vw"}
            alt={`${item.client} — ${item.title}`}
            className="preview-img"
            loading="lazy"
            width={2052}
            height={1369}
          />
        </div>

        {/* Text backdrop — always visible */}
        <div className="backdrop">
          <div className="project-text">
            <h2>{item.title}</h2>
            <h1 className="client">{item.client}</h1>
          </div>
          <p className="see-case">SEE CASE</p>
        </div>

        {/* Hover video */}
        <div className="attachment">
          <video
            ref={videoRef}
            width={320}
            height={240}
            preload="none"
            playsInline
            loop
            muted
          >
            <source src={item.video} type="video/mp4" />
          </video>
        </div>
      </Link>
    </li>
  );
}

// ─── Dropdown ────────────────────────────────────────────────────────────────

interface DropdownProps {
  label: string;
  options: string[];
  selected: string | null;
  onSelect: (v: string | null) => void;
  isActive: boolean;
}

function Dropdown({
  label,
  options,
  selected,
  onSelect,
  isActive,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`dropdown ${open ? "dropdown--open" : ""}`}>
      <button
        className={`filter-tab ${isActive ? "filter-tab--active" : ""}`}
        onClick={() => setOpen((o) => !o)}
      >
        {selected ?? label}
      </button>
      {open && (
        <ul className="dropdown-menu">
          {selected && (
            <li>
              <button
                className="dropdown-item dropdown-item--clear"
                onClick={() => {
                  onSelect(null);
                  setOpen(false);
                }}
              >
                All {label}
              </button>
            </li>
          )}
          {options.map((opt) => (
            <li key={opt}>
              <button
                className={`dropdown-item ${selected === opt ? "dropdown-item--selected" : ""}`}
                onClick={() => {
                  onSelect(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function WorkGrid() {
  const [activeTab, setActiveTab] = useState<FilterType>("all");
  const [clientFilter, setClientFilter] = useState<string | null>(null);
  const [serviceFilter, setServiceFilter] = useState<string | null>(null);
  const [industryFilter, setIndustryFilter] = useState<string | null>(null);

  const filtered = WORK_ITEMS.filter((item) => {
    if (clientFilter && !item.clients.includes(clientFilter)) return false;
    if (serviceFilter && !item.services.includes(serviceFilter)) return false;
    if (industryFilter && !item.industries.includes(industryFilter))
      return false;
    return true;
  });

  const handleTabClick = (tab: FilterType) => {
    setActiveTab(tab);
    if (tab === "all") {
      setClientFilter(null);
      setServiceFilter(null);
      setIndustryFilter(null);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&display=swap');

        .workgrid-root {
          background: #000;
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          min-height: 100vh;
        }

        /* ── Filter bar ── */
        .filters {
          position: absolute;
          top: 8%;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 10px 18px;
          gap: 0;
          background: transparent;
          pointer-events: none;
        }

        .filters > * { pointer-events: all; }

        .filter-tab {
          background: none;
          border: none;
          color: rgba(255,255,255,0.55);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          padding: 6px 14px;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .filter-tab:hover { color: #fff; }
        .filter-tab--active { color: #fff; }

        .filter-divider {
          color: rgba(255,255,255,0.25);
          font-size: 11px;
          user-select: none;
        }

        .all-bracket {
          background: none;
          border: none;
          color: rgba(255,255,255,0.55);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          padding: 6px 14px;
          transition: color 0.2s;
        }
        .all-bracket:hover,
        .all-bracket--active { color: #fff; }

        /* ── Dropdown ── */
        .dropdown { position: relative; }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 4px);
          right: 0;
          background: #111;
          border: 1px solid rgba(255,255,255,0.12);
          list-style: none;
          margin: 0;
          padding: 4px 0;
          min-width: 180px;
          z-index: 200;
        }

        .dropdown-item {
          display: block;
          width: 100%;
          background: none;
          border: none;
          color: rgba(255,255,255,0.65);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-align: left;
          padding: 8px 16px;
          cursor: pointer;
          transition: color 0.15s, background 0.15s;
        }
        .dropdown-item:hover { color: #fff; background: rgba(255,255,255,0.06); }
        .dropdown-item--selected { color: #fff; }
        .dropdown-item--clear { color: rgba(255,255,255,0.35); font-style: italic; }

        /* ── Grid ── */
        .project-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          list-style: none;
         
          padding: 0;

 margin: 12px;
margin-top: 7rem;
        }

        /* ── Card ── */
        .project-item {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #0a0a0a;
          border: 1px solid #1a1a1a;
          display: block;
margin:3px;
        }

        .project-link {
          display: block;
          width: 100%;
          height: 100%;
          position: relative;
          text-decoration: none;
          color: inherit;
        }

        /* preview image — fills card, shown by default */
        .preview {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* backdrop — always visible text layer */
        .backdrop {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 14px 16px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.72) 0%,
            rgba(0, 0, 0, 0.12) 50%,
            transparent 100%
          );
        }

        .project-text {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .project-text h2 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
          margin: 0;
          line-height: 1.2;
        }

        .project-text h1.client {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(22px, 3.2vw, 40px);
          font-weight: 900;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #fff;
          margin: 0;
          line-height: 0.95;
        }

        .see-case {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.9);
          margin: 10px 0 0;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .project-item:hover .see-case {
          opacity: 1;
          transform: translateY(0);
        }

        /* attachment (hover video) — hidden by default, shown on hover */
        .attachment {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-item:hover .attachment {
          opacity: 1;
        }

        .attachment video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .project-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .project-grid { grid-template-columns: 1fr; }
          .filters { padding: 8px 12px; }
          .filter-tab, .all-bracket { font-size: 10px; padding: 5px 8px; }
        }
      `}</style>

      <article className="workgrid-root">
        {/* ── Filter bar — top right ── */}
        <div className="filters">
          <Dropdown
            label="Clients"
            options={ALL_CLIENTS}
            selected={clientFilter}
            onSelect={(v) => {
              setClientFilter(v);
              if (v) setActiveTab("clients");
            }}
            isActive={activeTab === "clients"}
          />

          <span className="filter-divider">|</span>

          <Dropdown
            label="Services"
            options={ALL_SERVICES}
            selected={serviceFilter}
            onSelect={(v) => {
              setServiceFilter(v);
              if (v) setActiveTab("services");
            }}
            isActive={activeTab === "services"}
          />

          <span className="filter-divider">|</span>

          <Dropdown
            label="Industries"
            options={ALL_INDUSTRIES}
            selected={industryFilter}
            onSelect={(v) => {
              setIndustryFilter(v);
              if (v) setActiveTab("industries");
            }}
            isActive={activeTab === "industries"}
          />

          <span className="filter-divider">|</span>

          <button
            className={`all-bracket ${activeTab === "all" ? "all-bracket--active" : ""}`}
            onClick={() => handleTabClick("all")}
          >
            [ ALL ]
          </button>
        </div>

        {/* ── Grid ── */}
        <ul className="project-grid">
          {filtered.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </ul>
      </article>
    </>
  );
}
