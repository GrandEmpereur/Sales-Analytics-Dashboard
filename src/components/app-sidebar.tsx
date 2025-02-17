"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    MessageCircle,
    Mail,
    BarChart2,
    Settings,
    Link,
    User,
    Users2,
    MessageSquare,
    Clock,
    Link2,
    Bike
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { NavFooter } from "@/components/nav-footer"
import { Separator } from "@/components/ui/separator"

// Nouvelle structure de données
const data = {
    user: {
        name: "Jevline kief",
        email: "j.kief@example.com",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    teams: [
        {
            name: "Vesetly Inc.",
            logo: LayoutDashboard,
            plan: "Free Plan",
        }
    ],
    navMain: [
        {
            title: "MAIN MENU",
            items: [
                {
                    title: "Dashboard",
                    url: "/dashboard",
                    icon: LayoutDashboard,
                    isActive: true,
                },
                {
                    title: "Products",
                    url: "/products",
                    icon: Package,
                },
                {
                    title: "Order",
                    url: "/order",
                    icon: ShoppingCart,
                },
                {
                    title: "Customers",
                    url: "/customers",
                    icon: Users,
                },
                {
                    title: "Chat",
                    url: "/chat",
                    icon: MessageCircle,
                    badge: "22"
                },
            ]
        },
        {
            title: "OTHER",
            items: [
                {
                    title: "Email",
                    url: "/email",
                    icon: Mail,
                },
                {
                    title: "Analytics",
                    url: "/analytics",
                    icon: Clock,
                },
                {
                    title: "Integration",
                    url: "/integration",
                    icon: Link2,
                },
                {
                    title: "Performance",
                    url: "/performance",
                    icon: Bike,
                }
            ]
        },
        {
            title: "ACCOUNT",
            items: [
                {
                    title: "Account",
                    url: "/account",
                    icon: User,
                },
                {
                    title: "Members",
                    url: "/members",
                    icon: Users2,
                },
            ]
        }
    ],
    footer: [
        {
            title: "Settings",
            url: "/settings",
            icon: Settings,
        },
        {
            title: "Feedback",
            url: "/feedback",
            icon: MessageSquare,
        }
    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()

    // Fonction pour vérifier si un item est actif
    const isActive = (url: string) => pathname === url

    // Mise à jour des données avec l'état actif dynamique
    const navData = {
        ...data,
        navMain: data.navMain.map(section => ({
            ...section,
            items: section.items.map(item => ({
                ...item,
                isActive: isActive(item.url)
            }))
        })),
        footer: data.footer.map(item => ({
            ...item,
            isActive: isActive(item.url)
        }))
    }

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <Separator />
            <SidebarContent>
                <NavMain items={navData.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavFooter items={navData.footer} />
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
