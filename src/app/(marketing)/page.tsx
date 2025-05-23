import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import VideoSet from '@/components/VideoSet';
import { getAbout, getAllPosts, getFeaturedPartner, getHomeSetting, getPartnerTypes, getProjectTypes, getTeamTypes, getZoneTypes } from '@/sanity/queries';
import { notFound } from 'next/navigation';
import React from 'react'

async function Home() {
  const settings = (await getHomeSetting("l-expertise-quebecoise-pour-vos-projets-a-dubai")) || notFound();
  const about = (await getAbout("about-samu-properties")) || notFound();
  const featuredPartner = (await getFeaturedPartner("notre-collaborateur-a-dubai")) || notFound();
  const projects = await getProjectTypes();
  const teams = await getTeamTypes();
  //const properties = await getPropertyTypes();
  const zones = await getZoneTypes();
  const posts = await getAllPosts(5);
  const partners = await getPartnerTypes();

  return (
    <>
      <Header setting={settings} />
      <Hero setting={settings} />
      <VideoSet />
      <About setting={settings} about={about} showTitle={true} />
      <Projects featuredPartner={featuredPartner} setting={settings} projects={projects} />
      <Team setting={settings} teams={teams} zones={zones} />
      <Blog setting={settings} posts={posts} />
      <Contact setting={settings} />
      <Partners partners={partners} />
      <Footer setting={settings} />
    </>
  )
}

export default Home

export const revalidate = 0;