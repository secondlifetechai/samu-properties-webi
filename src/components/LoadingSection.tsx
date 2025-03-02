import React from 'react'

export default function LoadingSection() {
  return (
    <div className="flex items-center justify-center w-screen h-screen rounded-lg bg-[#173567]">
        <div className="px-10 py-5 text-6xl font-extralight leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
            LOADING...
        </div>
    </div>
  )
}
