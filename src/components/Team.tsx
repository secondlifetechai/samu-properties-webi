"use client"

import React from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { urlFor } from '@/sanity/lib/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TeamModal } from './modals/TeamModal';
import Link from 'next/link';
import { motion } from "framer-motion";
import { TeamModal2 } from './modals/TeamModal2';

function Team({setting, teams, zones} : any) {
    const { width } : any = useWindowDimensions();

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
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

    const settings2 = {
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
              slidesToShow: 1,
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

    const imgy = width && width > 640 ? '/backgrounds/desks/d4.png' : '/backgrounds/mobiles/m2/m4.jpeg';

  return (
    <section className="bg-cover bg-no-repeat md:bg-gray-50 bg-blend-multiply pb-12" style={{backgroundImage: "url(" + imgy + ")"}}>

        <motion.div 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1.5, delay:0.5}}
            className="p-4 font-[sans-serif] pt-16 pb-6 ">
            <div className="max-w-4xl mx-auto relative bg-[#173567] bg-opacity-60 border border-[#173567] p-8">
                <div className="text-center">
                    <h2 className="text-gray-300 text-2xl font-bold">{setting.teamTitle}</h2>
                </div>

                {teams && teams.length > 0 && (
                    <div className="w-full h-fit px-8">
                        <Slider {...settings}>
                            {teams.map((team : any) => (
                                <div key={team.slug} className="rounded-lg shadow-sm">
                                    <div className="flex flex-col items-center justify-center pb-10">
                                        <img className="w-48 mb-3 shadow-lg" src={urlFor(team?.photo).url()} alt={team.name}/>
                                        <h5 className="mb-1 text-xl font-medium text-gray-300">
                                            {team.name}
                                        </h5>
                                        <span className="text-sm text-gray-400">
                                            {team.title}
                                        </span>
                                        {width && width > 640 ? (
                                          <TeamModal team={team} />
                                        ) : (
                                          <TeamModal2 team={team} />
                                        )}
                                        
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}
            </div>
        </motion.div>

        <motion.div 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1.7, delay:0.7}}
            className="p-4 font-[sans-serif] pt-6" id='properties'>
            <div className="font-[sans-serif] bg-black bg-opacity-45 border border-gray-800 mx-auto max-w-4xl text-center py-8">
                <div className='mb-6 sm:mb-8'>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-gray-300">
                        {setting.propertyTitle}
                    </h2>
                    <p className="text-lg text-gray-400">{setting.propertySubTitle}</p>
                </div>

                <div className="w-full h-fit px-8">
                    {zones && zones.length > 0 && (
                        <Slider {...settings2}>
                            {zones.map((zone : any) => (
                                <div key={zone?.slug} className=" bg-[#173567] rounded-lg overflow-hidden">
                                    <div className="relative h-52">
                                        <img className="h-52 w-full object-cover" src={urlFor(zone?.photo).url()} alt="" />
                                        <span className="absolute bottom-5 right-5 bg-gray-500 text-sm font-semibold px-2.5 py-2 rounded text-gray-50">
                                            {zone?.emirate}
                                        </span>
                                    </div>
                        
                                    <div className="p-4 pt-0 flex justify-between items-center">
                                        <div>
                                            <h2 className="text-lg font-semibold mt-2 text-gray-300">
                                                {zone?.name}
                                            </h2>
                                            <p className='text-gray-400'>
                                                {zone?.location}
                                            </p>
                                        </div>
                            
                                        <Link href={`/zone/${zone?.slug}`} className="cursor-pointer h-14 w-14">
                                            <svg className="h-14 w-14" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.0001 52.5001C42.4265 52.5001 52.5001 42.4265 52.5001 30.0001C52.5001 17.5736 42.4265 7.5 30.0001 7.5C17.5736 7.5 7.5 17.5736 7.5 30.0001C7.5 42.4265 17.5736 52.5001 30.0001 52.5001Z" fill="black" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
                                            <path d="M31.4297 37.9454L39.375 30L31.4297 22.0547" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M20.625 30H39.3751" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    )}
                </div>
            </div>
        </motion.div>

    </section>
  )
}

export default Team