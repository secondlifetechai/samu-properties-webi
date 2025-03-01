import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { urlFor } from "@/sanity/lib/image"
  import { PortableText } from "next-sanity"
  
  export function TeamModal2({ team } : any) {
    return (
      <Sheet>
        <SheetTrigger asChild>
            <div className="flex mt-4 md:mt-6">
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Voir le profil
                </button>
            </div>
        </SheetTrigger>
        <SheetContent side={'bottom'} className="bg-[#173567] border border-gray-700">
            <SheetHeader>
                <SheetTitle></SheetTitle>
            </SheetHeader>

            <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-20 mt-5 h-72 overflow-y-scroll">
                <div className="flex flex-col items-stretch">
                    <div className="gap-x-8 [column-count:1] md:grid-cols-2 md:gap-x-4 md:[column-count:2]">
                        <div className="mb-12 inline-block border border-solid border-gray-600 md:mb-8 lg:mb-10">
                            <img src={urlFor(team?.photo).url()} alt="" className="max-h-64 object-cover object-top w-full" />
                            <div className="px-5 py-8 sm:px-6">
                                <h5 className="mb-3 text-xl font-bold text-gray-300">{team.name}</h5>
                                {team?.about && (
                                    <PortableText 
                                        value={team?.about}
                                        components={{
                                            block: {
                                                normal: ({ children }) => (
                                                    <p className="flex-col text-gray-400">
                                                        {children}
                                                    </p>
                                                ),
                                            }
                                        }} 
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </SheetContent>
      </Sheet>
    )
  }
  