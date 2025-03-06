import React from 'react'

export default function LoadingSection() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen rounded-lg bg-[#173567]">
      <img src='/logos/lg-1.png' alt='Samu Properties Logo' className="h-36 mb-6" />
      <div className="px-7 py-3 text-xl font-extralight leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
        LOADING...
      </div>
    </div>
  )
}
