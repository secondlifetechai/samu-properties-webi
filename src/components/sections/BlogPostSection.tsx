"use client"

import { urlFor } from "@/sanity/lib/image";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import dayjs from "dayjs";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const BlogPostSection = ({ post } : any) => {
    const { width } : any = useWindowDimensions();
            
    const imgy = width && width > 640 ? '/backgrounds/desks/d5.png' : '/backgrounds/mobiles/m2/m2.jpeg';

    return (
        <main className="pt-10 overflow-hidden bg-cover bg-center bg-no-repeat bg-blend-multiply bg-gray-50 md:bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16 antialiased" style={{backgroundImage: "url(" + imgy + ")"}}>
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl mt-28 mb-16">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    {post?.author && (
                        <motion.header 
                            initial={{opacity:0, y:100}}
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:1.6, delay:0.6}}
                            className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-300">
                                    {post?.author?.image && (
                                        <img className="mr-4 w-16 h-16 rounded-full" src={urlFor(post?.author?.image).url()} alt={post?.author?.name} />
                                    )}
                                    <div>
                                        <span rel="author" className="text-xl font-bold text-gray-300">{post?.author?.name}</span>
                                        <p className="text-base text-gray-300">
                                            {dayjs(post?.publishedAt).format("dddd, MMMM D, YYYY")}
                                        </p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-200 lg:mb-6 lg:text-4xl">{post?.title}</h1>
                        </motion.header>
                    )}

                    <motion.figure 
                        initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1.7, delay:0.7}}
                        className="mb-6 text-gray-400">
                        <img src={urlFor(post?.mainImage).url()} alt={post?.title} />
                        <figcaption>{post?.title}</figcaption>
                    </motion.figure>

                    <motion.div
                        initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1.9, delay:0.9}}>
                        {post?.body && (
                            <PortableText
                                value={post?.body}
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
                    </motion.div>
                </article>
            </div>
        </main>
    )
}