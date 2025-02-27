import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { urlFor } from "@/sanity/lib/image"
  import { PortableText } from "next-sanity"
  
  export function TeamModal({ team } : any) {
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
            
            <div className="mt-5 h-72 overflow-y-scroll">
                <div className="flex flex-col items-center bg-[#173567] border border-gray-600 rounded-lg shadow-sm md:flex-row w-auto hover:bg-blue-950 mx-36">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={urlFor(team?.photo).url()} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300">{team.name}</h5>
                        {team?.about && (
                            <PortableText 
                                value={team?.about}
                                components={{
                                    block: {
                                        normal: ({ children }) => (
                                            <p className="mb-3 font-normal text-gray-400">
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

        </SheetContent>
      </Sheet>
    )
  }
  