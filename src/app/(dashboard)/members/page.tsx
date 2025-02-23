"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { 
    Search, Plus, Filter, MoreVertical, Mail, Shield,
    UserPlus, UserMinus, Settings, Users, Activity,
    Building2, Clock, ChevronRight
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { mockMembers, MemberRole, MemberStatus, getMembersByDepartment } from "@/mocks/members";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function MembersPage() {
    const pathname = usePathname();
    const paths = pathname.split('/').filter(Boolean);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTab, setSelectedTab] = useState("all");

    const departments = Array.from(new Set(mockMembers.map(m => m.department)));
    const membersByDepartment = departments.map(dept => ({
        name: dept,
        count: getMembersByDepartment(dept).length,
        active: getMembersByDepartment(dept).filter(m => m.status === 'active').length
    }));

    const teamStats = {
        totalMembers: mockMembers.length,
        activeMembers: mockMembers.filter(m => m.status === 'active').length,
        pendingInvites: mockMembers.filter(m => m.status === 'pending').length,
        departments: departments.length
    };

    const getRoleBadgeVariant = (role: MemberRole) => {
        const variants = {
            owner: "default",
            admin: "secondary",
            member: "outline",
            guest: "destructive"
        };
        return variants[role] || "default";
    };

    const getStatusColor = (status: MemberStatus) => {
        const colors = {
            active: "bg-green-500",
            inactive: "bg-gray-500",
            pending: "bg-yellow-500"
        };
        return colors[status] || "bg-gray-500";
    };

    const filteredMembers = mockMembers.filter(member =>
        (selectedTab === "all" || member.department === selectedTab) &&
        (member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="space-y-6">
            {/* Header avec stats */}
            <div className="grid gap-4 md:grid-cols-4">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <Users className="h-8 w-8 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">Total Membres</p>
                                <p className="text-2xl font-bold">{teamStats.totalMembers}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <Activity className="h-8 w-8 text-green-500" />
                            <div>
                                <p className="text-sm text-muted-foreground">Membres Actifs</p>
                                <p className="text-2xl font-bold">{teamStats.activeMembers}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <Clock className="h-8 w-8 text-yellow-500" />
                            <div>
                                <p className="text-sm text-muted-foreground">Invitations en attente</p>
                                <p className="text-2xl font-bold">{teamStats.pendingInvites}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <Building2 className="h-8 w-8 text-blue-500" />
                            <div>
                                <p className="text-sm text-muted-foreground">Départements</p>
                                <p className="text-2xl font-bold">{teamStats.departments}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Barre d'actions */}
            <div className="flex justify-between items-center">
                <Input
                    placeholder="Rechercher un membre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                />
                <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        <span>Filtres</span>
                    </Button>
                    <Button className="flex items-center gap-2">
                        <UserPlus className="w-4 h-4" />
                        <span>Inviter</span>
                    </Button>
                </div>
            </div>

            {/* Contenu principal */}
            <div className="grid gap-6 md:grid-cols-12">
                {/* Liste des départements */}
                <Card className="md:col-span-3">
                    <CardHeader>
                        <CardTitle>Départements</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div
                                className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-accent"
                                onClick={() => setSelectedTab("all")}
                            >
                                <span className="font-medium">Tous les membres</span>
                                <ChevronRight className="w-4 h-4" />
                            </div>
                            {membersByDepartment.map((dept) => (
                                <div
                                    key={dept.name}
                                    className="space-y-2 p-2 rounded-lg cursor-pointer hover:bg-accent"
                                    onClick={() => setSelectedTab(dept.name)}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">{dept.name}</span>
                                        <span className="text-sm text-muted-foreground">
                                            {dept.count}
                                        </span>
                                    </div>
                                    <Progress value={(dept.active / dept.count) * 100} />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Liste des membres */}
                <Card className="md:col-span-9">
                    <CardHeader>
                        <CardTitle>Membres de l'équipe</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {filteredMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="flex items-center justify-between p-4 border rounded-lg"
                                >
                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarImage src={member.avatar} alt={`${member.firstName} ${member.lastName}`} />
                                            <AvatarFallback>
                                                {member.firstName[0]}{member.lastName[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="font-medium">
                                                {member.firstName} {member.lastName}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {member.email}
                                            </p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Badge variant="default">
                                                    {member.role}
                                                </Badge>
                                                <div className={`w-2 h-2 rounded-full ${getStatusColor(member.status)}`} />
                                                <span className="text-xs text-muted-foreground">
                                                    {member.department}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-muted-foreground">
                                            Dernière activité: {format(new Date(member.lastActive), 'Pp', { locale: fr })}
                                        </span>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoreVertical className="w-4 h-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem className="flex items-center gap-2">
                                                    <Mail className="w-4 h-4" />
                                                    Envoyer un message
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="flex items-center gap-2">
                                                    <Shield className="w-4 h-4" />
                                                    Modifier les permissions
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                                                    <UserMinus className="w-4 h-4" />
                                                    Retirer de l'équipe
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
