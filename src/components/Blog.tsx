"use client"

import React, { Fragment } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { urlFor } from '@/sanity/lib/image';
import dayjs from "dayjs";

function Blog({setting, posts} : any) {
    const { width } : any = useWindowDimensions();

    const imgy = width && width > 640 ? '/backgrounds/desks/d5.png' : '/backgrounds/mobiles/h2.jpeg';
  return (
    <section className="bg-cover bg-no-repeat bg-gray-400 md:bg-gray-50 bg-blend-multiply pt-10" style={{backgroundImage: "url(" + imgy + ")"}}>
        <div className="p-4 font-[sans-serif] pt-8 pb-16 ">
            <div className="font-[sans-serif] bg-black bg-opacity-45 border border-gray-800 mx-auto max-w-4xl text-center py-8">
                <div className='mb-6 sm:mb-8'>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-gray-300">{setting.blogTitle}</h2>
                    <p className="text-lg text-gray-400">{setting.blogSubTitle}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8 px-10">
                    {posts && posts.length > 0 && (
                        <Fragment>
                            {posts.map((post : any) => (
                                <div key={post.slug} className="bg-[#173567] rounded overflow-hidden">
                                    <img src={urlFor(post?.mainImage).url()} alt="Blog Post 1" className="w-full h-52 object-cover" />
                                    <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-200 mb-3">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {post.excerpt}
                                    </p>
                                    <p className="text-gray-300 text-[13px] font-semibold mt-4">
                                        {dayjs(post?.publishedAt).format("dddd, MMMM D, YYYY")}
                                    </p>
                                    <a href="#" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-gray-200 hover:bg-gray-400 text-gray-900 text-[13px]">
                                        {setting.blogButton}
                                    </a>
                                    </div>
                                </div>
                            ))}
                        </Fragment>
                    )}
                </div>

            </div>
        </div>
    </section>
  )
}

export default Blog