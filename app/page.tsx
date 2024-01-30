'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  router.push('https://typebypo.etsy.com')

  return (
    <main className="w-full flex h-full border justify-center items-center">
      <img src="/cho_tbp_012524.svg" alt="" width="400" height="400" />
    </main>
  );
}
