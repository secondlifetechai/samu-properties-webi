"use client"

import useWindowDimensions from "../../hooks/useWindowDimensions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

function VideoSet() {
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

    const imgy = width && width > 640 ? '/backgrounds/desks/d5.png' : '/backgrounds/mobiles/m2/m9.jpeg';

    return (
        <section className="bg-cover bg-no-repeat md:bg-gray-50 bg-blend-multiply" style={{backgroundImage: "url(" + imgy + ")"}}>
            <div className="max-w-6xl mx-auto py-16 px-4">
                <motion.h2 
                    initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:1.6, delay:0.6}}
                    className="text-gray-300 text-2xl font-bold text-center mb-8">
                    VIDÉOS RÉCENTES
                </motion.h2>

                <motion.div 
                    initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:1.8, delay:0.8}}
                    className="w-full h-fit px-8">
                    <Slider {...settings}>
                        <div className="rounded-lg shadow-lg bg-[#173567] bg-opacity-40 text-slate-200 max-w-lg border border-[#173567]">
                            <a href="#!">
                                <video width="320" height="240" controls className="w-full rounded-t-lg">
                                    <source src="/videos/vid1.mp4" type="video/mp4" />
                                    <source src="movie.ogg" type="video/ogg" />
                                    Your browser does not support the video tag.
                                </video>
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-300 text-xl font-medium mb-2">
                                    Plongez dans le luxe avec Object One !
                                </h5>
                                <p className="text-gray-400 text-base mb-4">
                                Découvrez notre showroom où qualité et finitions d'exception prennent vie. Chaque détail est pensé pour vous offrir un cadre élégant et raffiné. 

                                Regardez jusqu'à la fin et dites-nous ce que vous en pensez!
                                </p>
                                {/* <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
                            </div>
                        </div>

                        <div className="rounded-lg shadow-lg bg-[#173567] bg-opacity-40 text-slate-200 max-w-lg border border-[#173567]">
                            <a href="#!">
                                <video width="320" height="240" controls className="w-full rounded-t-lg">
                                    <source src="/videos/vid1.mp4" type="video/mp4" />
                                    <source src="movie.ogg" type="video/ogg" />
                                    Your browser does not support the video tag.
                                </video>
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-300 text-xl font-medium mb-2">
                                    Plongez dans le luxe avec Object One !
                                </h5>
                                <p className="text-gray-400 text-base mb-4">
                                Découvrez notre showroom où qualité et finitions d'exception prennent vie. Chaque détail est pensé pour vous offrir un cadre élégant et raffiné. 

                                Regardez jusqu'à la fin et dites-nous ce que vous en pensez!
                                </p>
                                {/* <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
                            </div>
                        </div>
                    </Slider>
                </motion.div >
                
            </div>
        </section>
    )
}

export default VideoSet