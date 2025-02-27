import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { PropertySection } from '@/components/sections/PropertySection';
import { getHomeSetting, getProperty } from '@/sanity/queries';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function PropertyPage({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const { slug } = await params;
    const settings = (await getHomeSetting("l-expertise-quebecoise-pour-vos-projets-a-dubai")) || notFound();
    const property = (await getProperty(slug)) || notFound();

  return (
    <>
        <Header setting={settings} />
        <PropertySection property={property} />
        <Footer setting={settings} />
    </>
  )
}
