import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ZoneSection } from '@/components/sections/ZoneSection';
import { getHomeSetting, getZone } from '@/sanity/queries';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function PropertyPage({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const { slug } = await params;
    const settings = (await getHomeSetting("l-expertise-quebecoise-pour-vos-projets-a-dubai")) || notFound();
    const zone = (await getZone(slug)) || notFound();

  return (
    <>
        <Header setting={settings} />
        <ZoneSection zone={zone} />
        <Footer setting={settings} />
    </>
  )
}
