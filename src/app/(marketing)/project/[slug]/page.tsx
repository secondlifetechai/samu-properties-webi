import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { getHomeSetting, getProject } from "@/sanity/queries";
import { notFound } from "next/navigation";

async function ProjectPage({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const { slug } = await params;
    const settings = (await getHomeSetting("l-expertise-quebecoise-pour-vos-projets-a-dubai")) || notFound();
    const project = (await getProject(slug)) || notFound();

    return (
        <>
          <Header setting={settings} />
          <ProjectSection project={project} />
          <Footer setting={settings} />
        </>
    )
  }

export default ProjectPage