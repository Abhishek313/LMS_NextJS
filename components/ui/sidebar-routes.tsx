"use client"
import React, { ReactNode } from 'react'
import { Compass, Layout } from 'lucide-react'
import  SidebarItems from '@/app/(dashboard)/_components/sidebar-items'

const guestRoutes = [
  {
    icon : Layout,
    label: "Dashboard",
    href : "/"
  },
  {
    icon : Compass,
    label: "Browse",
    href : "/search"
  },

]

function SidebarRoutes() {
  const routes= guestRoutes;
  return (
    <div className='flex flex-col w-full'>
      {routes.map((route) => (
        <SidebarItems
           key  = {route.href}
           icon = {route.icon}
           label= {route.label}
           href = {route.href}
         />
      ))}
    </div>
  )
}

export default SidebarRoutes
