// projectsData.js Central data source for all WorkGrid projects.
// Each object maps directly to ProjectPage props.

export const projects = [
  // ─── 1. EPISODE 1: FULL ACCESS WITH RAKAI ─────────────────────────────────
  {
    slug: "episode-1-full-access-with-rakai",
    thumbnail:
      "https://brandingthatslaps.com/wp-content/uploads/2026/04/07-optimized.png",

    client: "UNDER ARMOUR",
    title: "EPISODE 1: FULL ACCESS WITH RAKAI",
    description: `Full Access starts with a simple premise: what would happen if you gave a creator full control of a sports brand?

We hand Rakai the ultimate keycard: access to Under Armour's world. For the next three days, he'll move like the elite athletes and creators who inspire the brand, using every tool UA has to offer to create his own version of greatness.

It's a social experiment built around access, authenticity, and spontaneity. The cameras never stop rolling. The audience never stops watching. Every challenge, every location, every appearance by UA athletes is both unpredictable and intentional.`,
    services: [
      "Creative Direction",
      "Campaign Strategy",
      "Photography",
      "Production",
    ],

    // Hero — Vimeo hosted
    heroMedia: {
      type: "video",
      src: "https://player.vimeo.com/progressive_redirect/playback/1179286348/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=bf0555732603cfe90a13c9a8d09c49dd15a26cc8319c7204435dbeb92fc9e94d",
      poster:
        "https://brandingthatslaps.com/wp-content/uploads/2026/04/07-optimized.png",
    },

    mediaBlocks: [
      // Row 1 — Four stills in a 2+2 grid
      {
        layout: "two-col",
        aspectRatio: "3/2",
        media: [
          {
            type: "image",
            src: "https://brandingthatslaps.com/wp-content/uploads/2026/04/01-optimized.png",
          },
          {
            type: "image",
            src: "https://brandingthatslaps.com/wp-content/uploads/2026/04/02-optimized.png",
          },
        ],
      },
      {
        layout: "two-col",
        aspectRatio: "3/2",
        media: [
          {
            type: "image",
            src: "https://brandingthatslaps.com/wp-content/uploads/2026/04/03-optimized.png",
          },
          {
            type: "image",
            src: "https://brandingthatslaps.com/wp-content/uploads/2026/04/04-optimized.png",
          },
        ],
      },

      // Row 2 — Three videos side by side (self-hosted mp4)
      {
        layout: "three-col",
        aspectRatio: "9/16",
        media: [
          {
            type: "video",
            src: "https://brandingthatslaps.com/wp-content/uploads/2026/04/04.mp4",
          },
          {
            type: "video",
            src: "https://brandingthatslaps.com/wp-content/uploads/2026/04/05.mp4",
          },
          {
            type: "video",
            src: "https://brandingthatslaps.com/wp-content/uploads/2026/04/06.mp4",
          },
        ],
      },

      // Row 3 — Four more stills in a 2+2 grid
      {
        layout: "two-col",
        aspectRatio: "3/2",
        media: [
          {
            type: "image",
            src: "https://brandingthatslaps.com/wp-content/uploads/2026/04/07-optimized.png",
          },
          {
            type: "image",
            src: "https://brandingthatslaps.com/wp-content/uploads/2026/04/08-optimized.png",
          },
        ],
      },
      {
        layout: "two-col",
        aspectRatio: "3/2",
        media: [
          {
            type: "image",
            src: "https://brandingthatslaps.com/wp-content/uploads/2026/04/09-optimized.png",
          },
          {
            type: "image",
            src: "https://brandingthatslaps.com/wp-content/uploads/2026/04/10-optimized.png",
          },
        ],
      },
    ],

    prevLink: "/work",
    nextLink: "/work/the-halo-state-unlocks-your-aura",
    footerBrand: "SLAPS.",
  },

  // ─── 2. THE HALO STATE ────────────────────────────────────────────────────
  {
    slug: "the-halo-state-unlocks-your-aura",
    thumbnail:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-UA-optimized.jpg",

    client: "UNDER ARMOUR",
    title: "THE HALO STATE",
    description: `With the launch of Halo, Under Armour's new line designed to move seamlessly with the athlete, we set out to tell a different kind of story. One that shows how movement becomes more than performance — it becomes a tool for mental clarity, emotional strength, and personal alignment. The shoes are never the headline, but an integral part of the rhythm that carries athletes through.

The series captures the real emotional cycles we all move through: chaotic, flowing, and always in motion. Each film connects through a shared narrative thread, while allowing every athlete's story to move in its own direction.

What makes it unique is the collaboration. The talent isn't just in front of the camera, but behind it too, co-creating the work with us. By blending their first-person iPhone footage with cinematic perspective, we experience their journey in a raw, intimate way: grounded, real, and told in their rhythm.`,
    services: ["Creative Strategy", "Integrated Campaign", "Production"],

    heroMedia: {
      type: "video",
      src: "https://player.vimeo.com/progressive_redirect/playback/1116184243/rendition/1080p/file.mp4?loc=external&signature=5517a283fc43f13c164a19fc64a37fec34c139615f5b6df7d0950d7d13bac201",
      poster:
        "https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-UA-optimized.jpg",
    },

    mediaBlocks: [
      // Row 1 — Four stills (Ross athlete)
      {
        layout: "two-col",
        aspectRatio: "3/2",
        media: [
          {
            type: "image",
            src: "https://brandingthatslaps.com/wp-content/uploads/2025/09/ROSS-STILLS_1.19.1-1-min-scaled-optimized.png",
          },
          {
            type: "image",
            src: "https://brandingthatslaps.com/wp-content/uploads/2025/09/ROSS-STILLS_1.44.1-1-min-scaled-optimized.png",
          },
        ],
      },
      {
        layout: "two-col",
        aspectRatio: "3/2",
        media: [
          {
            type: "image",
            src: "https://brandingthatslaps.com/wp-content/uploads/2025/09/ROSS-STILLS_1.31.1-min-scaled-optimized.png",
          },
          {
            type: "image",
            src: "https://brandingthatslaps.com/wp-content/uploads/2025/09/ROSS-STILLS_1.46.3-1-min-scaled-optimized.png",
          },
        ],
      },

      // Row 2 — Full-width video
      {
        layout: "full",
        aspectRatio: "16/9",
        media: {
          type: "video",
          src: "https://player.vimeo.com/progressive_redirect/playback/1121111382/rendition/1080p/file.mp4?loc=external&signature=068fe6b496c2c7db83e83b4eb880fd9e8055b138b1c5a06e5c437134c19eab1f",
        },
      },

      // Row 3 — Three vertical videos
      {
        layout: "three-col",
        aspectRatio: "9/16",
        media: [
          {
            type: "video",
            src: "https://player.vimeo.com/progressive_redirect/playback/1116184215/rendition/1080p/file.mp4?loc=external&signature=34f75ac9a678b943a6b20d96d65929a09609fdab69c70bed4ab0b661498ac716",
          },
          {
            type: "video",
            src: "https://player.vimeo.com/progressive_redirect/playback/1116184175/rendition/1080p/file.mp4?loc=external&signature=d1f0fca48ec905cb065ae0479e266b19012f72459183ff8d28bdd756d0d5e956",
          },
          {
            type: "video",
            src: "https://player.vimeo.com/progressive_redirect/playback/1116184139/rendition/1080p/file.mp4?loc=external&signature=d7f806632aad717d31557efe4f0c665f9ea124316e26c09c9027b5b0cc67dcb9",
          },
        ],
      },

      // Row 4 — Full-width video
      {
        layout: "full",
        aspectRatio: "16/9",
        media: {
          type: "video",
          src: "https://player.vimeo.com/progressive_redirect/playback/1116184198/rendition/1080p/file.mp4?loc=external&signature=ed5ef572512402fab75a2fe89383825c08377b28f43bb8ca8279ae452ff2b0bb",
        },
      },

      // Row 5 — Full-width brand image
      {
        layout: "full",
        aspectRatio: "16/5",
        media: {
          type: "image",
          src: "https://brandingthatslaps.com/wp-content/uploads/2025/09/Artboard-1-2-scaled-optimized.png",
        },
      },

      // Row 6 — Full-width video
      {
        layout: "full",
        aspectRatio: "16/9",
        media: {
          type: "video",
          src: "https://player.vimeo.com/progressive_redirect/playback/1121111413/rendition/1080p/file.mp4?loc=external&signature=966bb8b20e7c8d70b5723219e334d14e968af6c146f486b589c98a423160a7d5",
        },
      },

      // Row 7 — Two stills (Toni athlete)
      {
        layout: "two-col",
        aspectRatio: "3/2",
        media: [
          {
            type: "image",
            src: "https://brandingthatslaps.com/wp-content/uploads/2025/09/TONI-STILLS_1.1.1-1-min-1-scaled-optimized.png",
          },
          {
            type: "image",
            src: "https://brandingthatslaps.com/wp-content/uploads/2025/09/TONI-STILLS_1.5.1-min-scaled-optimized.png",
          },
        ],
      },

      // Row 8 — Three vertical videos
      {
        layout: "three-col",
        aspectRatio: "9/16",
        media: [
          {
            type: "video",
            src: "https://player.vimeo.com/progressive_redirect/playback/1116183982/rendition/1080p/file.mp4?loc=external&signature=a965d55066b90029790156c4816dc44a3fa27d0a0f14d08c95efef0f64f71914",
          },
          {
            type: "video",
            src: "https://player.vimeo.com/progressive_redirect/playback/1116184041/rendition/1080p/file.mp4?loc=external&signature=7b55ff85da65e4ff4248f5862541c6be7b2055c91659f0f4f6224a7de0690656",
          },
          {
            type: "video",
            src: "https://player.vimeo.com/progressive_redirect/playback/1116184073/rendition/1080p/file.mp4?loc=external&signature=f133b36a5cd3a8ff429894ef2375b26e77f25091f1be1b6c5db154b4c45e3226",
          },
        ],
      },

      // Row 9 — Full-width video
      {
        layout: "full",
        aspectRatio: "16/9",
        media: {
          type: "video",
          src: "https://player.vimeo.com/progressive_redirect/playback/1116184100/rendition/1080p/file.mp4?loc=external&signature=d9a78d8a6b99bde87163859401e617f8706b4f618df897eee93b3f53701b3b82",
        },
      },

      // Row 10 — Full-width brand image
      {
        layout: "full",
        aspectRatio: "16/5",
        media: {
          type: "image",
          src: "https://brandingthatslaps.com/wp-content/uploads/2025/09/2-scaled-optimized.png",
        },
      },

      // Row 11 — Full-width video
      {
        layout: "full",
        aspectRatio: "16/9",
        media: {
          type: "video",
          src: "https://player.vimeo.com/progressive_redirect/playback/1121111351/rendition/1080p/file.mp4?loc=external&signature=e0078f072918f9489db933f9d13fb64bbac3dcc86ef120cf4600f53a769b37f0",
        },
      },

      // Row 12 — Two stills (Georgia athlete)
      {
        layout: "two-col",
        aspectRatio: "3/2",
        media: [
          {
            type: "image",
            src: "https://brandingthatslaps.com/wp-content/uploads/2025/09/GEORGIA-STILLS_1.65.1-1-min-1-scaled-optimized.png",
          },
          {
            type: "image",
            src: "https://brandingthatslaps.com/wp-content/uploads/2025/09/GEORGIA-STILL-2_1.18.1-min-scaled-optimized.png",
          },
        ],
      },

      // Row 13 — Four vertical videos (Georgia athlete)
      {
        layout: "two-col",
        aspectRatio: "9/16",
        media: [
          {
            type: "video",
            src: "https://player.vimeo.com/progressive_redirect/playback/1116183702/rendition/1080p/file.mp4?loc=external&signature=fe5f49f1aa95bf15525b57cf2b62be9b2c9b557da049d0ed190ec4ca1d869191",
          },
          {
            type: "video",
            src: "https://player.vimeo.com/progressive_redirect/playback/1116183844/rendition/1080p/file.mp4?loc=external&signature=6617d5695f997566d889ab6b1bc1af25794777ee843a52b59de60acdaab82b00",
          },
        ],
      },
      {
        layout: "two-col",
        aspectRatio: "9/16",
        media: [
          {
            type: "video",
            src: "https://player.vimeo.com/progressive_redirect/playback/1116183939/rendition/1080p/file.mp4?loc=external&signature=fb55d3c1cdd5862346cefbd9fa5ae3e2b02bd97808d624f6785cb79a93852fbb",
          },
          {
            type: "video",
            src: "https://player.vimeo.com/progressive_redirect/playback/1116183776/rendition/1080p/file.mp4?loc=external&signature=1e30ec66d5086c854675fce227f098f63d061976455dcaf9a147e93748b11c8f",
          },
        ],
      },
    ],

    prevLink: "/work/episode-1-full-access-with-rakai",
    nextLink: "/work",
    footerBrand: "SLAPS.",
  },

  // ─── Stub entries — fill mediaBlocks as you scrape each page ──────────────

  {
    slug: "endure",
    thumbnail:
      "https://brandingthatslaps.com/wp-content/uploads/2026/03/Screen-Shot-2026-03-04-at-12.18.32-PM-scaled-optimized.png",
    client: "WILSON",
    title: "ENDURE",
    description: "",
    services: [
      "Campaign Strategy",
      "Creative Direction",
      "Creative Strategy",
      "Photography",
      "Post Production",
      "Production",
      "Visual Identity",
    ],
    heroMedia: { type: "video", src: "" },
    mediaBlocks: [],
    prevLink: "/work",
    nextLink: "/work",
    footerBrand: "SLAPS.",
  },
  {
    slug: "gymshark",
    thumbnail:
      "https://brandingthatslaps.com/wp-content/uploads/2026/03/Screen-Shot-2026-03-03-at-10.46.40-AM-300x200-optimized.png",
    client: "GYMSHARK",
    title: "STORM COLLECTION",
    description: "",
    services: [
      "Creative Direction",
      "Photography",
      "Post Production",
      "Production",
    ],
    heroMedia: { type: "video", src: "" },
    mediaBlocks: [],
    prevLink: "/work",
    nextLink: "/work",
    footerBrand: "SLAPS.",
  },
  {
    slug: "the-disciplined-napthlete",
    thumbnail:
      "https://brandingthatslaps.com/wp-content/uploads/2025/12/the-disciplined-napthlete-scaled-optimized.png",
    client: "AM: CLUB",
    title: "THE DISCIPLINED NAPTHLETE",
    description: "",
    services: ["Creative Direction", "Creative Strategy", "Production"],
    heroMedia: { type: "video", src: "" },
    mediaBlocks: [],
    prevLink: "/work",
    nextLink: "/work",
    footerBrand: "SLAPS.",
  },
  {
    slug: "subcultural-archives",
    thumbnail:
      "https://brandingthatslaps.com/wp-content/uploads/2025/12/COVER-01-optimized.jpg",
    client: "NU MODA",
    title: "SUBCULTURAL ARCHIVES",
    description: "",
    services: ["Brand Strategy", "Creative Direction", "Visual Identity"],
    heroMedia: { type: "video", src: "" },
    mediaBlocks: [],
    prevLink: "/work",
    nextLink: "/work",
    footerBrand: "SLAPS.",
  },
  {
    slug: "its-hot-and-thats-cold",
    thumbnail:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/videoframe_51637-optimized.jpg",
    client: "WINGSTOP UK",
    title: "IT'S HOT. AND THAT'S COLD.",
    description: "",
    services: ["Campaign Strategy", "Creative Direction", "Production"],
    heroMedia: { type: "video", src: "" },
    mediaBlocks: [],
    prevLink: "/work",
    nextLink: "/work",
    footerBrand: "SLAPS.",
  },
  {
    slug: "keeping-up-with-ultras-2",
    thumbnail:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-PUMA-optimized.jpg",
    client: "PUMA",
    title: "KEEPING UP WITH THE ULTRAS",
    description: "",
    services: ["Creative Direction", "Production"],
    heroMedia: { type: "video", src: "" },
    mediaBlocks: [],
    prevLink: "/work",
    nextLink: "/work",
    footerBrand: "SLAPS.",
  },
  {
    slug: "artifact-by-alexia-putellas",
    thumbnail:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/CH2_FINAL_15s_16x9_1_1-optimized.jpg",
    client: "OAKLEY",
    title: "ARTIFACT BY ALEXIA PUTELLAS",
    description: "",
    services: ["Creative Direction", "Photography", "Production"],
    heroMedia: { type: "video", src: "" },
    mediaBlocks: [],
    prevLink: "/work",
    nextLink: "/work",
    footerBrand: "SLAPS.",
  },
  {
    slug: "joga-bonito",
    thumbnail:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-JOGA-optimized.jpg",
    client: "NIKE TN PACK",
    title: "JOGA BONITO",
    description: "",
    services: ["Creative Direction", "Production", "Video"],
    heroMedia: { type: "video", src: "" },
    mediaBlocks: [],
    prevLink: "/work",
    nextLink: "/work",
    footerBrand: "SLAPS.",
  },
  {
    slug: "the-portal-opened-first",
    thumbnail:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/COVER-UNVRS-optimized.jpg",
    client: "[UNVRS]",
    title: "THE PORTAL OPENED FIRST",
    description: "",
    services: ["Brand Strategy", "Creative Direction", "Visual Identity"],
    heroMedia: { type: "video", src: "" },
    mediaBlocks: [],
    prevLink: "/work",
    nextLink: "/work",
    footerBrand: "SLAPS.",
  },
  {
    slug: "become-one",
    thumbnail:
      "https://brandingthatslaps.com/wp-content/uploads/2025/09/HI-IBIZA-COVER2-1-optimized.jpg",
    client: "HÏ IBIZA",
    title: "CONNECTING CULTURES",
    description: "",
    services: ["Creative Direction", "Production", "Video"],
    heroMedia: { type: "video", src: "" },
    mediaBlocks: [],
    prevLink: "/work",
    nextLink: "/work",
    footerBrand: "SLAPS.",
  },
];

// Helper — look up a project by its slug
export const getProject = (slug) =>
  projects.find((p) => p.slug === slug) ?? null;
