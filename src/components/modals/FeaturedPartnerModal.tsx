import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "next-sanity"

export function FeaturedPartnerModal({ featuredPartner } : any) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center items-center sm:space-y-0 mb-20 md:mb-8">
            <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-slate-300 rounded-lg bg-[#173567] w-44">
                En savoir plus
            </button>
        </div>
      </SheetTrigger>
      <SheetContent side={'bottom'} className="bg-[#173567] border border-gray-700">
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10 overflow-y-scroll h-96 mt-6 items-center">
            <img src={urlFor(featuredPartner?.logo).url()} alt="" className="inline-block w-full" />
            <div className="flex flex-col gap-5 rounded-2xl border border-solid border-gray-700 p-10 sm:p-12">
                <h2 className="text-3xl font-bold md:text-5xl text-gray-200">{featuredPartner.title}</h2>
                {featuredPartner?.description && (
                    <PortableText 
                        value={featuredPartner?.description}
                        components={{
                            block: {
                                normal: ({ children }) => (
                                    <p className="text-sm text-gray-300 sm:text-base">
                                        {children}
                                    </p>
                                ),
                            }
                        }} 
                    />
                )}
                <div>
                  <a href={`${featuredPartner.website}`} className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-gray-200 hover:bg-gray-400 text-gray-900 text-[13px]" target="_blank">
                    Visitez ce site Web
                  </a>
              </div>
            </div>
          </div>
      </SheetContent>
    </Sheet>
  )
}
