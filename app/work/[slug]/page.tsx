// app/work/[slug]/page.tsx
import { getProject } from "../../../data.js";
import ProjectPage from "../../components/Projectpage";
import { notFound } from "next/navigation";

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectPage {...project} />;
}
