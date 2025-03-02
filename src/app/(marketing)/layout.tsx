"use client"

import LoadingSection from "@/components/LoadingSection";
import { useEffect, useState } from "react";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() =>{
    setIsLoaded(true)
  }, [isLoaded])

  if (!isLoaded) {
    return (
      <LoadingSection />
    )
  }
  return (
    <>
      {children}
    </>
  );
}

export const dynamic = 'force-dynamic'
