// app/work/[slug]/page.tsx
// ... imports

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  // Cast 'project' to 'any' or your specific Component Props type
  // to bypass the strict union check
  return <ProjectPage {...(project as any)} />;
}
