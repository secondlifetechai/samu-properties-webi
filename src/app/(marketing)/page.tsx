import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import { getAbout, getAllPosts, getFeaturedPartner, getHomeSetting, getPartnerTypes, getProjectTypes, getPropertyTypes, getTeamTypes } from '@/sanity/queries';
import { notFound } from 'next/navigation';
import React from 'react'

export const revalidate = 10;

async function Home() {
  const settings = (await getHomeSetting("l-expertise-quebecoise-pour-vos-projets-a-dubai")) || notFound();
  const about = (await getAbout("about-samu-properties")) || notFound();
  const featuredPartner = (await getFeaturedPartner("notre-collaborateur-a-dubai")) || notFound();
  const projects = await getProjectTypes();
  const teams = await getTeamTypes();
  const properties = await getPropertyTypes();
  const posts = await getAllPosts(5);
  const partners = await getPartnerTypes();

  return (
    <>
      <Header setting={settings} />
      <Hero setting={settings} />
      <About setting={settings} about={about} />
      <Projects featuredPartner={featuredPartner} setting={settings} projects={projects} />
      <Team setting={settings} teams={teams} properties={properties} />
      <Blog setting={settings} posts={posts} />
      <Contact setting={settings} />
      <Partners partners={partners} />
      <Footer setting={settings} />
    </>
  )
}

export default Home