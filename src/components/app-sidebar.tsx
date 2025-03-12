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
    Settings,
    User,
    Users2,
    MessageSquare,
    Clock,
    Bike,
    Link2
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
import { useSession } from "@/contexts/session-context"
import { getTeamById } from "@/mocks/users"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()
    const { user } = useSession();
    const userTeam = user ? getTeamById(user.teamId) : null;

    // Fonction pour vérifier si un item est actif
    const isActive = (url: string) => pathname === url

    // Structure de données basée sur le rôle de l'utilisateur
    const getNavItems = () => {
        const baseItems = [
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
            }
        ];

        // Section "OTHER"
        baseItems.push({
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
        });

        // Section "ACCOUNT"
        baseItems.push({
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
        });

        return baseItems;
    };

    const navData = {
        navMain: getNavItems().map(section => ({
            ...section,
            items: section.items.map(item => ({
                ...item,
                isActive: isActive(item.url)
            }))
        })),
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
    };

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                {userTeam && (
                    <TeamSwitcher
                        teams={[
                            {
                                name: userTeam.name,
                                logo: LayoutDashboard,
                                plan: userTeam.plan
                            }
                        ]}
                    />
                )}
            </SidebarHeader>
            <Separator />
            <SidebarContent>
                <NavMain items={navData.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavFooter items={navData.footer} />
                {user && (
                    <NavUser
                        user={{
                            name: `${user.firstName} ${user.lastName}`,
                            email: user.email,
                            avatar: user.avatar
                        }}
                    />
                )}
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
