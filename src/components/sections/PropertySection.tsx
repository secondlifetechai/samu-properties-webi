"use client"

import { urlFor } from "@/sanity/lib/image";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { PortableText } from "next-sanity";
import { motion } from "framer-motion";

export const PropertySection = ({ property } : any) => {
    const { width } : any = useWindowDimensions();
        
    const imgy = width && width > 640 ? '/backgrounds/desks/d4.png' : '/backgrounds/mobiles/m2/m4.jpeg';

    return (
        <section className="pt-10 overflow-hidden bg-cover bg-center bg-no-repeat bg-blend-multiply md:bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16 antialiased" style={{backgroundImage: "url(" + imgy + ")"}}>
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 mt-28 mb-14">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <motion.div 
                        initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1.6, delay:0.6}}
                        className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                        <img className="w-full dark:hidden" src={urlFor(property?.mainImage).url()} alt="" />
                        <img className="w-full hidden dark:block" src={urlFor(property?.mainImage).url()} alt="" />
                    </motion.div>

                    <motion.div 
                        initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1.8, delay:0.8}}
                        className="mt-6 sm:mt-8 lg:mt-0">
                        <h1 className="text-2xl font-semibold text-gray-200 sm:text-2xl">
                            {property?.name}
                        </h1>
                        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                            <p className="text-2xl font-extrabold text-gray-300 sm:text-3xl">
                                {(property?.regularPrice).toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'AED',
                                })}
                            </p>

                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                <span
                                    className="text-sm font-medium leading-none text-gray-400 underline hover:no-underline"
                                >
                                    {property?.type}
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            <span
                            className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                            role="button"
                            >
                                {property?.address}
                            </span>
                        </div>

                        <hr className="my-6 md:my-8 border-gray-400" />

                        {property?.description && (
                            <PortableText 
                                value={property?.description}
                                components={{
                                    block: {
                                        normal: ({ children }) => (
                                            <p className="mb-6 text-gray-300">
                                                {children}
                                            </p>
                                        ),
                                    }
                                }} 
                            />
                        )}

                        <p className="text-gray-300">
                            <strong>Bedrooms: </strong>{property?.bedrooms}
                        </p>

                        <p className="text-gray-300">
                            <strong>Bathrooms: </strong>{property?.bathrooms}
                        </p>

                        <p className="text-gray-300">
                            <strong>Furnished?: </strong>{property?.furnished ? "Furnished" : "Unfurnished"}
                        </p>

                        <p className="text-gray-300">
                            <strong>Parking?: </strong>{property?.parking ? "Yes" : "No"}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}