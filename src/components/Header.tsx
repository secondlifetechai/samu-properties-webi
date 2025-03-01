import { urlFor } from '@/sanity/lib/image'
import { Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

function Header({setting} : any) {
  return (
    <nav className="bg-[#173567] fixed w-full z-20 top-0 start-0 border-b border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={urlFor(setting?.logo).url()} alt='Samu Properties Logo' className="h-8" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href='https://w.app/samuprop' target="_blank">
                <BsWhatsapp className='text-slate-300 text-center mx-6 my-2 text-2xl' />
            </a>
            <a href="tel:+18739931780">
                <Phone className='text-slate-300 text-center mx-6 my-2 text-2xl' />
            </a>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-slate-200">
            <li>
                <Link href="/" className="block py-2 px-3 text-slate-200 rounded md:p-0" aria-current="page">MAISON</Link>
            </li>
            <li>
                <Link href="/about" className="block py-2 px-3 text-slate-200 rounded md:p-0">À PROPOS DE NOUS</Link>
            </li>
            <li>
                <Link href="/#projects" className="block py-2 px-3 text-slate-200 rounded md:p-0">PROJETS</Link>
            </li>
            <li>
                <Link href="/#contact" className="block py-2 px-3 text-slate-200 rounded md:p-0">CONTACTEZ-NOUS</Link>
            </li>
            </ul>
        </div>
        </div>
    </nav>

  )
}

export default Header