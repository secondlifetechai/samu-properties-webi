"use client"

import React from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from 'next-sanity';
import { FeaturedPartnerModal } from './modals/FeaturedPartnerModal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { motion } from "framer-motion";

function Projects({featuredPartner, setting, projects} : any) {
    const { width } : any = useWindowDimensions();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    const imgy = width && width > 640 ? '/backgrounds/desks/d3.png' : '/backgrounds/mobiles/m2/m3.jpeg';

  return (
    <section className="bg-cover bg-no-repeat md:bg-gray-100 bg-blend-multiply flex flex-col" style={{backgroundImage: "url(" + imgy + ")"}} id='projects'>

        <motion.div 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1.5, delay:0.5}}
            className="pt-16">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-md:max-w-md mx-auto">
                <div className="bg-black bg-opacity-40 border border-gray-800 text-slate-200 overflow-hidden shadow-md hover:shadow-lg mx-2 md:mx-56">
                    <div className="p-10 text-center">
                        <img src={urlFor(featuredPartner?.logo).url()} alt="logo" className="w-40 mb-6 inline-block" />
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
                    <FeaturedPartnerModal featuredPartner={featuredPartner} />
                </div>
            </div>
        </motion.div>

        <motion.div 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1.6, delay:0.6}}
            className="p-4 font-[sans-serif] pt-8">
            <div className="font-[sans-serif] bg-[#173567] border border-[#173567] mx-auto max-w-4xl text-center py-8">
                <h2 className="text-xl sm:text-3xl font-extrabold text-gray-300 mb-6 sm:mb-8">
                    {setting.projectTitle}
                </h2>
                
                <div className="w-full h-fit px-8">
                    <Slider {...settings}>
                        {projects?.map((project : any) => ( 
                            <div key={project.slug}  className="max-w-sm bg-[#173567] border rounded-lg shadow-sm border-gray-700"> 
                                <a href="#">
                                    <img className="rounded-t-lg w-full h-52 object-cover" src={urlFor(project?.photo).url()} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-200">{project.name}</h5>
                                    </a>

                                    <p className="mb-3 font-normal text-gray-300 dark:text-gray-400">
                                        {project.location}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-gray-400 ">
                                            {(project.price).toLocaleString('en-US', {
                                                style: 'currency',
                                                currency: 'AED',
                                            })}
                                        </span>
                                        <Link href={`/project/${project.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Voir le projet
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Projects