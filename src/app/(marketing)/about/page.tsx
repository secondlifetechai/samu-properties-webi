import About from '@/components/About';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { AboutSection } from '@/components/sections/AboutSection';
import { getAbout, getHomeSetting } from '@/sanity/queries';
import { notFound } from 'next/navigation';
import React from 'react'

async function AboutPage() {
    const settings = (await getHomeSetting("l-expertise-quebecoise-pour-vos-projets-a-dubai")) || notFound();
    const about = (await getAbout("about-samu-properties")) || notFound();

    return (
        <>
            <Header setting={settings} />
            <AboutSection setting={settings} about={about} />
            <About setting={settings} about={about} />
            <Footer setting={settings} />
        </>
    )
}

export default AboutPage