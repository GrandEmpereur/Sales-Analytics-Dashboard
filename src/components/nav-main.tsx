"use client"

import { type LucideIcon } from "lucide-react"

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Separator } from "./ui/separator"
import Link from "next/link"

export function NavMain({
    items,
}: {
    items: {
        title: string
        items: {
            title: string
            url: string
            icon?: LucideIcon
            isActive?: boolean
            badge?: string
        }[]
    }[]
}) {
    return (
        <>
            {items.map((section) => (
                <SidebarGroup key={section.title}>
                    <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
                    <SidebarMenu>
                        {section.items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton 
                                    asChild
                                    className={item.isActive ? 
                                        "bg-orange-500/10 text-orange-600 hover:bg-orange-500/20 hover:text-orange-600" : 
                                        undefined}
                                >
                                    <Link href={item.url}>
                                        {item.icon && <item.icon className={item.isActive ? "text-orange-600" : undefined} />}
                                        <span>{item.title}</span>
                                        {item.badge && (
                                            <span className="ml-auto text-xs bg-muted rounded-full px-2 py-0.5">
                                                {item.badge}
                                            </span>
                                        )}
                                    </Link>
                                </SidebarMenuButton>

                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                    <Separator className="mt-5" />
                </SidebarGroup>
            ))}
        </>
    )
}
