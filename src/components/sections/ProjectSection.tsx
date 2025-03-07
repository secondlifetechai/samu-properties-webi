"use client"

import { urlFor } from "@/sanity/lib/image";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { PortableText } from "next-sanity";
import { motion } from "framer-motion";

export const ProjectSection = ({ project } : any) => {
    const { width } : any = useWindowDimensions();
    
    const imgy = width && width > 640 ? '/backgrounds/desks/d3.png' : '/backgrounds/mobiles/m2/m3.jpeg';
    const CADollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'CAD',
    });

    return (
        <section className="pt-10 overflow-hidden bg-cover bg-center bg-no-repeat bg-blend-multiply md:bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16" style={{backgroundImage: "url(" + imgy + ")"}}>
            <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-6 md:py-12 mt-16">
                <div className="grid gap-12 sm:gap-12 md:grid-cols-2">
                    <motion.div 
                        initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1.6, delay:0.6}}
                        className="flex flex-col items-start gap-2">
                        <div className="flex items-center rounded-md bg-gray-300 px-3 py-1 mb-2 mt-3">
                            <div className="mr-1 h-2 w-2 rounded-full bg-black"></div>
                            <p className="text-sm text-gray-800">Project</p>
                        </div>
                        <p className="text-sm text-gray-300 sm:text-xl">
                            {project?.location}
                        </p>
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl md:mb-8 text-gray-200">
                            {project?.name}
                        </h1>
                        {project?.description && (
                            <PortableText 
                                value={project?.description}
                                components={{
                                    block: {
                                        normal: ({ children }) => (
                                            <p className="text-sm text-gray-300 sm:text-xl">
                                                {children}
                                            </p>
                                        ),
                                    }
                                }} 
                            />
                        )}
                        <div className="mb-8 mt-8 h-px w-full bg-slate-700"></div>
                        <div className="mb-6 flex flex-col gap-2 text-sm text-gray-300 sm:text-base md:mb-8">
                            <p className="text-lg">
                                <strong>Prix: </strong>
                                {CADollar.format(project?.price).replace('CA$', '')} CAD
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1.8, delay:0.8}}
                        className="min-h-full overflow-hidden rounded-md">
                        <img className=" w-full object-cover" src={urlFor(project?.photo).url()} alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}