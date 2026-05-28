// app/work/[slug]/page.tsx
import { getProject, projects } from "../../../data.js";
import ProjectPage from "../../components/Projectpage";
import { notFound } from "next/navigation";
import { cache } from "react";

interface ProjectMedia {
  type: "video" | "image";
  src: string;
  poster?: string;
}

interface Project {
  slug: string;
  thumbnail: string;
  client: string;
  title: string;
  description: string;
  services: string[];
  heroMedia?: ProjectMedia | null;
  mediaBlocks?: Array<{
    layout: "full" | "two-col" | "three-col" | "two-col-asymmetric";
    media: ProjectMedia | ProjectMedia[];
    aspectRatio?: string;
  }>;
}

// Request-memoized project lookup to prevent redundant reads
const getProjectCached = cache((slug: string) => {
  return getProject(slug) as Project | null;
});

// Statically compile all slug paths at build time (SSG caching)
export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectCached(slug);

  if (!project) notFound();

  return <ProjectPage {...project} />;
}

