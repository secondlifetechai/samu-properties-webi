"use client"

import React from 'react'
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from 'next-sanity';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { motion } from "framer-motion";

export const AboutSection = ({setting, about} : any) => {
    const { width } : any = useWindowDimensions();

    const imgy = width && width > 640 ? '/backgrounds/desks/d1.png' : '/backgrounds/mobiles/m2/m1.jpeg';

  return (
    <>
        <section className="pt-10 overflow-hidden bg-cover bg-center bg-no-repeat bg-blend-multiply md:bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16" style={{backgroundImage: "url(" + imgy + ")"}}>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2 mt-16">

                    <motion.div
                        initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1.6, delay:0.6}}>
                        <h2 className="text-3xl font-bold leading-tight text-gray-200 dark:text-white sm:text-4xl lg:text-5xl">
                            À propos de nous 
                            <br className="block sm:hidden" /> Samu Propriétés 👋
                        </h2>
                        {about?.aboutUs && (
                            <PortableText 
                                value={about?.aboutUs}
                                components={{
                                    block: {
                                        normal: ({ children }) => (
                                            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-300 dark:text-gray-300 md:mt-8">
                                                {children}
                                            </p>
                                        ),
                                    }
                                }} 
                            />
                        )}

                        <div className="mt-4 text-xl text-gray-400 dark:text-gray-300 md:mt-8">
                            <span className="relative inline-block">
                                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                            <span className="relative"> Vous avez une question ? </span>
                            </span>
                            <br className="block sm:hidden" /> Demandez-nous sur 
                            <ul className="inline-flex space-x-6 ml-5 items-center mt-2">
                                <li>
                                    <a href={setting.facebookLink} target='_blank'>
                                        <FaFacebookSquare className="fill-gray-300 hover:fill-white w-7 h-7" />
                                    </a>
                                </li>

                                <li>
                                    <a href={setting.linkedInLink} target='_blank'>
                                        <BsLinkedin className="fill-gray-300 hover:fill-white w-7 h-7" />
                                    </a>
                                </li>

                                <li>
                                    <a href={setting.twitterLink} target='_blank'>
                                        <FaTwitterSquare className="fill-gray-300 hover:fill-white w-7 h-7" />
                                    </a>
                                </li>

                                <li>
                                    <a href={setting.insatagramLink} target='_blank'>
                                        <FaInstagramSquare className="fill-gray-300 hover:fill-white w-7 h-7" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1.8, delay:0.8}}
                        className="relative">
                        <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                        <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={urlFor(about?.aboutPhoto).url()} alt="" />
                    </motion.div>

                </div>
            </div>
        </section>
    </>
  )
}
