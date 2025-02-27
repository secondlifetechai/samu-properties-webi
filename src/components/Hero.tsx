"use client"

import React from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { motion } from "framer-motion";
import Link from 'next/link';

function Hero({setting} : any) {
  const { width } : any = useWindowDimensions();

  const everyTwo = (str: string) => {
    return str
        .split(" ") // find spaces and make array from string
        .map((item: string, idx: number) => idx % 2 === 0 ? item : item + "\n") // add line break to every second word
        .join(" ") // make string from array
  }

  const imgy = width && width > 640 ? '/backgrounds/desks/d1.png' : '/backgrounds/mobiles/m2/m1.jpeg';
  
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-blend-multiply bg-gray-400 md:bg-gray-50" style={{backgroundImage: "url(" + imgy + ")"}}>
      <div
        className="px-8 mx-auto max-w-screen-xl text-center py-24 lg:py-56 pt-60 lg:pt-60">
        <div className='flex justify-center'>
          <motion.h1 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1.5, delay:0.5}}
            className="mb-4 text-2xl font-extrabold tracking-tight leading-8 text-gray-200 md:text-3xl lg:text-4xl w-[550px]">
            {everyTwo(setting.heroTitle)}
          </motion.h1>
        </div>
        <motion.p 
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:1.5, delay:0.5}}
          className="mb-8 text-sm font-normal text-gray-400 lg:text-lg sm:px-16 lg:px-48 pt-8">
          {setting.heroSubTitle}
        </motion.p>
        <motion.div 
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:1.5, delay:0.5}}
          className="flex flex-col space-y-4 sm:flex-row sm:justify-center items-center sm:space-y-0 mb-16 md:mb-0">
          <Link href="/about" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-slate-300 rounded-lg bg-[#173567] w-72">
            {setting.heroButton}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero