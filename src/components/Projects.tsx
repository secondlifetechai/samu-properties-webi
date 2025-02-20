"use client"

import React from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from 'next-sanity';

function Projects({featuredPartner, setting, projects} : any) {
    const { width } : any = useWindowDimensions();

    const imgy = width && width > 640 ? '/backgrounds/desks/d3.png' : '/backgrounds/mobiles/h2.jpeg';

  return (
    <section className="bg-cover bg-no-repeat bg-gray-400 md:bg-gray-100 bg-blend-multiply" style={{backgroundImage: "url(" + imgy + ")"}}>

        <div className="pt-16">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-md:max-w-md mx-auto">
                <div className="bg-black bg-opacity-40 border border-gray-800 text-slate-200 overflow-hidden shadow-md hover:shadow-lg mx-2 md:mx-56">
                    <div className="p-10 text-center">
                        <img src={urlFor(featuredPartner?.logo).url()}alt="logo" className="w-40 mb-6 inline-block" />
                        <h3 className="text-2xl font-semibold mb-4">{featuredPartner.title}</h3>
                        {featuredPartner?.description && (
                            <PortableText 
                                value={featuredPartner?.description}
                                components={{
                                    block: {
                                        normal: ({ children }) => (
                                            <p className="text-sm leading-relaxed">
                                                {children}
                                            </p>
                                        ),
                                    }
                                }} 
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>

        <div className="p-4 font-[sans-serif] pt-8 pb-16 ">
            <div className="font-[sans-serif] bg-[#173567] border border-[#173567] mx-auto max-w-4xl text-center py-8">
                <h2 className="text-xl sm:text-3xl font-extrabold text-gray-300 mb-6 sm:mb-8">
                    {setting.projectTitle}
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 px-10">
                    {projects?.map((project : any) => ( 
                        <div key={project.slug} className="group overflow-hidden cursor-pointer relative">
                            <div className="bg-gray-100 w-full overflow-hidden">
                                <img src={urlFor(project?.photo).url()} alt="Product 1"
                                className="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700" />
                            </div>

                            <div className="p-4 relative">
                                <div className="z-20 relative">
                                    <h6 className="text-xs font-bold text-gray-200 truncate">
                                        {project.name}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects