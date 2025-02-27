import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { BlogPostSection } from "@/components/sections/BlogPostSection";
import { getHomeSetting, getPost } from "@/sanity/queries";
import { notFound } from "next/navigation";

async function BlogPostPage({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const { slug } = await params;
    const settings = (await getHomeSetting("l-expertise-quebecoise-pour-vos-projets-a-dubai")) || notFound();
    const post = (await getPost(slug)) || notFound();

    return (
        <>
            <Header setting={settings} />
            <BlogPostSection post={post} />
            <Footer setting={settings} />
        </>
    )
}

export default BlogPostPage