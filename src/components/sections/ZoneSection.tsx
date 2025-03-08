"use client"

import { urlFor } from "@/sanity/lib/image";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { PortableText } from "next-sanity";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const ZoneSection = ({ zone } : any) => {
    const { width } : any = useWindowDimensions();
        
    const imgy = width && width > 640 ? '/backgrounds/desks/d4.png' : '/backgrounds/mobiles/m2/m4.jpeg';

    let zoneImages = null;

    if(zone?.gallery?.length > 0) {
        zoneImages = zone?.gallery.map((pic : any)  => { 
            return {original: urlFor(pic).url(), thumbnail: urlFor(pic).url()}
        })
    }

    return (
        <section className="pt-10 overflow-hidden bg-cover bg-center bg-no-repeat bg-blend-multiply md:bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16 antialiased" style={{backgroundImage: "url(" + imgy + ")"}}>
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 mt-28 mb-14">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <motion.div 
                        initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1.6, delay:0.6}}
                        className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                        {zoneImages ? 
                            <>
                                <ImageGallery items={zoneImages} /> 
                            </>
                            : <>
                                <img className="w-full dark:hidden" src={urlFor(zone?.photo).url()} alt="" />
                                <img className="w-full hidden dark:block" src={urlFor(zone?.photo).url()} alt="" />
                            </>
                        }
                    </motion.div>

                    <motion.div 
                        initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1.8, delay:0.8}}
                        className="mt-6 sm:mt-8 lg:mt-0">
                        <h1 className="text-2xl font-semibold text-gray-200 sm:text-2xl">
                            {zone?.name}
                        </h1>

                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            <span
                            className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                            role="button"
                            >
                                {zone?.location}
                            </span>
                        </div>

                        <hr className="my-6 md:my-8 border-gray-400" />
                        
                        <div className="text-gray-300">
                        {zone?.description && (
                            <PortableText
                            value={zone?.description}
                            components={{
                            block: {
                                normal: ({ children }) => (
                                <p className="my-2 text-base/8 first:mt-0 last:mb-0 text-gray-300">
                                    {children}
                                </p>
                                ),
                                h2: ({ children }) => (
                                <h2 className="my-5 text-2xl/8 font-medium tracking-tight text-gray-300 first:mt-0 last:mb-0">
                                    {children}
                                </h2>
                                ),
                                h3: ({ children }) => (
                                <h3 className="my-5 text-xl/8 font-medium tracking-tight text-gray-300 first:mt-0 last:mb-0">
                                    {children}
                                </h3>
                                ),
                                blockquote: ({ children }) => (
                                <blockquote className="my-2.5 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-300 first:mt-0 last:mb-0">
                                    {children}
                                </blockquote>
                                ),
                            },
                            types: {
                                image: ({ value }) => (
                                <Image
                                    alt={value.alt || ""}
                                    src={urlFor(value).url()}
                                    className="w-full rounded-2xl"
                                    width={1400}
                                    height={1000}
                                />
                                ),
                                separator: ({ value }) => {
                                switch (value.style) {
                                    case "line":
                                    return (
                                        <hr className="my-8 border-t border-gray-200" />
                                    );
                                    case "space":
                                    return <div className="my-8" />;
                                    default:
                                    return null;
                                }
                                },
                            },
                            list: {
                                bullet: ({ children }) => (
                                <ul className="list-disc pl-4 text-base/8 marker:text-gray-300">
                                    {children}
                                </ul>
                                ),
                                number: ({ children }) => (
                                <ol className="list-decimal pl-4 text-base/8 marker:text-gray-300">
                                    {children}
                                </ol>
                                ),
                            },
                            listItem: {
                                bullet: ({ children }) => {
                                return (
                                    <li className="my-2 pl-2 has-[br]:mb-8">
                                    {children}
                                    </li>
                                );
                                },
                                number: ({ children }) => {
                                return (
                                    <li className="my-2 pl-2 has-[br]:mb-8">
                                    {children}
                                    </li>
                                );
                                },
                            },
                            marks: {
                                strong: ({ children }) => (
                                <strong className="font-semibold text-gray-300">
                                    {children}
                                </strong>
                                ),
                                code: ({ children }) => (
                                <>
                                    <span aria-hidden>`</span>
                                    <code className="text-[15px]/8 font-semibold text-gray-300">
                                    {children}
                                    </code>
                                    <span aria-hidden>`</span>
                                </>
                                ),
                                link: ({ value, children }) => {
                                return (
                                    <Link
                                        href={value.href}
                                        className="font-medium text-gray-300 underline decoration-gray-400 underline-offset-4 data-[hover]:decoration-gray-600"
                                    >
                                        {children}
                                    </Link>
                                );
                                },
                            },
                            }}
                        />
                        )}
                        </div>

                        <p className="text-gray-300">
                            <strong>Emirate: </strong>{zone?.emirate}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}