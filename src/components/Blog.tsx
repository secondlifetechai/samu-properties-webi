"use client"

import React from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { urlFor } from '@/sanity/lib/image';
import dayjs from "dayjs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { motion } from "framer-motion";

function Blog({setting, posts} : any) {
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

    const imgy = width && width > 640 ? '/backgrounds/desks/d5.png' : '/backgrounds/mobiles/m2/m5.jpeg';

  return (
    <section className="bg-cover bg-no-repeat bg-gray-400 md:bg-gray-50 bg-blend-multiply pt-10" style={{backgroundImage: "url(" + imgy + ")"}} id='blog'>
      <div className="p-4 font-[sans-serif] pt-8 pb-16 ">
        <motion.div 
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:1.6, delay:0.6}}
          className="font-[sans-serif] bg-black bg-opacity-45 border border-gray-800 mx-auto max-w-4xl text-center py-8">
          <div className='mb-6 sm:mb-8'>
            <h2 className="text-xl sm:text-3xl font-extrabold text-gray-300">{setting.blogTitle}</h2>
            <p className="text-lg text-gray-400">{setting.blogSubTitle}</p>
          </div>

          <div className="w-full h-fit px-8">
            {posts && posts.length > 0 && (
              <Slider {...settings}>
                {posts.map((post : any) => (
                  <div key={post.slug} className="bg-[#173567] rounded overflow-hidden">
                    <img src={urlFor(post?.mainImage).url()} alt={post.title} className="w-full h-52 object-cover" />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-200 mb-2">
                          {post.title}
                      </h3>
                      <p className="text-gray-300 text-[13px] font-semibold mt-2">
                          {dayjs(post?.publishedAt).format("dddd, MMMM D, YYYY")}
                      </p>
                      <Link href={`/blog-post/${post.slug}`} className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-gray-200 hover:bg-gray-400 text-gray-900 text-[13px]">
                          En savoir plus
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog