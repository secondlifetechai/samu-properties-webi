"use client"

import React from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { PartnerModal } from './modals/PartnerModal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Partners = ({partners} : any) => {
    const { width } : any = useWindowDimensions();

    const settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        rows: 2,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
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

    const imgy = width && width > 640 ? '/backgrounds/desks/d1.png' : '/backgrounds/mobiles/m2/m7.jpeg';

  return (
    <div className="bg-cover bg-no-repeat md:bg-gray-50 bg-blend-multiply p-8 min-h-[350px] flex items-center justify-center font-sans" style={{backgroundImage: "url(" + imgy + ")"}}>
      <motion.div 
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1.6, delay:0.6}}
        className="shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] w-full h-fit px-8 rounded-3xl py-4">
          {partners && partners.length > 0 && (
              <Slider {...settings}>
                  {partners.map((partner : any) => (
                      <PartnerModal key={partner.slug} partner={partner} />
                  ))}
              </Slider>
          )}
      </motion.div>
    </div>
  )
}

export default Partners