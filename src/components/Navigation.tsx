"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ChevronLeft } from "lucide-react"

import Link from "next/link"

export default function Navigation() {
    return (
        <div className="fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b bg-zinc-900/0 border-transparent">
            <NavigationMenu>
                <Link className="duration-200 text-zinc-300 hover:text-zinc-100" href="/"><ChevronLeft size={24} /></Link>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/about/">About</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/services/">Services</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/contact/">Contact</NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}