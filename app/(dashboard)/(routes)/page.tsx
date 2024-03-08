"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/clerk-react'

export default function Home() {
  return (
    <>
    <div>
      <UserButton
         afterSignOutUrl='/'
      />
    </div>
    </>
  )
}
