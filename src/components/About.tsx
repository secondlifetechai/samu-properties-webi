"use client"

import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { FaHandsHoldingCircle } from 'react-icons/fa6'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { PortableText } from 'next-sanity';
import Link from 'next/link';
import { motion } from "framer-motion";

function About({setting, about, showTitle = false} : any) {
    const { width } : any = useWindowDimensions();

    const imgy = width && width > 640 ? '/backgrounds/desks/d2.png' : '/backgrounds/mobiles/m2/m2.jpeg';

  return (
    <section className="bg-cover bg-no-repeat bg-gray-50 md:bg-gray-50 bg-blend-multiply" style={{backgroundImage: "url(" + imgy + ")"}}>
        <div className="max-w-6xl mx-auto py-16 px-4">
            { showTitle && 
                <motion.h2 
                    initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:1.5, delay:0.5}}
                    className="text-gray-300 text-2xl font-bold text-center mb-8">
                    {setting.aboutTitle}
                </motion.h2> } 

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-md:max-w-md mx-auto justify-center justify-items-center">
                <motion.div 
                    initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:1.8, delay:0.8}}
                    className="bg-[#173567] bg-opacity-55 border border-[#173567] text-slate-200 overflow-hidden shadow-md hover:shadow-lg mx-8 md:mx-0 pb-6">
                    <div className="p-4 text-center">
                        <FaInfoCircle className='text-5xl mb-6 inline-block' />
                        <h3 className="text-xl font-semibold mb-3">Notre mission</h3>
                        {about?.mission && (
                            <PortableText 
                                value={about?.mission}
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
                </motion.div>

                <motion.div 
                    initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:1.9, delay:0.9}}
                    className="bg-[#173567] bg-opacity-40 border border-[#173567] text-slate-200 overflow-hidden shadow-md hover:shadow-lg mx-8 md:mx-0 pb-6">
                    <div className="p-4 text-center">
                        <FaHandsHoldingCircle className='text-5xl mb-6 inline-block' />
                        <h3 className="text-xl font-semibold mb-3">Notre vision</h3>
                        {about?.vision && (
                            <PortableText 
                                value={about?.vision}
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
                </motion.div>
            </div>

            <motion.div 
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1.5, delay:0.5}}
                className="flex flex-col space-y-4 sm:flex-row sm:justify-center items-center sm:space-y-0 mb-20 md:mb-0 mt-8">
                { showTitle && 
                    <Link href="/about" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-slate-300 rounded-lg bg-[#173567] w-44">
                        En savoir plus
                    </Link> }
            </motion.div>

        </div>
    </section>
  )
}

export default About