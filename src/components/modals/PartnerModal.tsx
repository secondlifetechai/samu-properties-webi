import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "next-sanity"

export function PartnerModal({ partner } : any) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="text-center cursor-pointer">
            <img src={urlFor(partner?.logo).url()} className='w-20' />
        </div>
      </SheetTrigger>
      <SheetContent side={'bottom'} className="bg-[#173567] border border-gray-700">
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 overflow-y-scroll h-96 items-center">
            <img src={urlFor(partner?.logo).url()} alt="" className="inline-block w-full" />
            <div className="flex flex-col gap-5 rounded-2xl border border-solid border-gray-700 p-10 sm:p-12">
              <h2 className="text-3xl font-bold md:text-5xl text-gray-200">{partner.name}</h2>
              {partner?.description && (
                  <PortableText 
                      value={partner?.description}
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
                <a href={`${partner.website}`} className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-gray-200 hover:bg-gray-400 text-gray-900 text-[13px]" target="_blank">
                  Visitez ce site Web
                </a>
              </div>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
