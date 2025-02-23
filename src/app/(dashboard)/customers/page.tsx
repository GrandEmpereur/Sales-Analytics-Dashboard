"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Customer, CustomerStatus, CustomerTier, mockCustomers } from "@/mocks/customers";
import { Search, UserPlus, Download, Users, CreditCard, Building2, Activity } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function CustomersPage() {
    const pathname = usePathname();
    const paths = pathname.split('/').filter(Boolean);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState<CustomerStatus | "all">("all");
    const [selectedTier, setSelectedTier] = useState<CustomerTier | "all">("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Filtrer les clients
    const filteredCustomers = mockCustomers.filter(customer => {
        const matchesSearch = 
            `${customer.firstName} ${customer.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.company?.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = selectedStatus === "all" || customer.status === selectedStatus;
        const matchesTier = selectedTier === "all" || customer.tier === selectedTier;
        return matchesSearch && matchesStatus && matchesTier;
    });

    // Pagination
    const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedCustomers = filteredCustomers.slice(startIndex, startIndex + itemsPerPage);

    // Calculer les statistiques
    const stats = {
        totalCustomers: mockCustomers.length,
        activeCustomers: mockCustomers.filter(c => c.status === 'Active').length,
        totalRevenue: mockCustomers.reduce((sum, c) => sum + c.totalSpent, 0),
        averageOrders: mockCustomers.reduce((sum, c) => sum + c.totalOrders, 0) / mockCustomers.length
    };

    // Helper pour le statut badge
    const getStatusBadge = (status: CustomerStatus) => {
        const variants = {
            'Active': 'success',
            'Inactive': 'warning',
            'Blocked': 'destructive'
        };
        return <Badge variant={variants[status] as any}>{status}</Badge>;
    };

    // Helper pour le tier badge
    const getTierBadge = (tier: CustomerTier) => {
        const variants = {
            'Bronze': 'secondary',
            'Silver': 'outline',
            'Gold': 'warning',
            'Platinum': 'default'
        };
        return <Badge variant={variants[tier] as any}>{tier}</Badge>;
    };

    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="space-y-1.5">
                    <Breadcrumb>
                        <BreadcrumbList>
                            {paths.map((path, index) => {
                                const isLast = index === paths.length - 1;
                                const href = `/${paths.slice(0, index + 1).join('/')}`;
                                return (
                                    <BreadcrumbItem key={path}>
                                        {isLast ? (
                                            <BreadcrumbPage className="text-xl font-medium capitalize">
                                                {path}
                                            </BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink href={href} className="text-lg capitalize">
                                                {path}
                                            </BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                );
                            })}
                        </BreadcrumbList>
                    </Breadcrumb>
                    <p className="text-muted-foreground">Gérez vos clients et suivez leur activité</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        <span>Exporter</span>
                    </Button>
                    <Button variant="default" className="flex items-center gap-2">
                        <UserPlus className="w-4 h-4" />
                        <span>Ajouter un client</span>
                    </Button>
                </div>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.totalCustomers}</div>
                        <p className="text-xs text-muted-foreground">
                            {stats.activeCustomers} actifs
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Revenu Total</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.totalRevenue.toFixed(2)}€</div>
                        <p className="text-xs text-muted-foreground">
                            {(stats.totalRevenue / stats.totalCustomers).toFixed(2)}€ par client
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Commandes Moyennes</CardTitle>
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.averageOrders.toFixed(1)}</div>
                        <p className="text-xs text-muted-foreground">
                            commandes par client
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Taux d'activité</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {((stats.activeCustomers / stats.totalCustomers) * 100).toFixed(1)}%
                        </div>
                        <p className="text-xs text-muted-foreground">
                            des clients sont actifs
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Filtres */}
            <div className="flex gap-4 items-center">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        placeholder="Rechercher un client..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <Select
                    value={selectedStatus}
                    onValueChange={(value) => setSelectedStatus(value as CustomerStatus | "all")}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Statut" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Tous les statuts</SelectItem>
                        <SelectItem value="Active">Actif</SelectItem>
                        <SelectItem value="Inactive">Inactif</SelectItem>
                        <SelectItem value="Blocked">Bloqué</SelectItem>
                    </SelectContent>
                </Select>
                <Select
                    value={selectedTier}
                    onValueChange={(value) => setSelectedTier(value as CustomerTier | "all")}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Niveau" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Tous les niveaux</SelectItem>
                        <SelectItem value="Bronze">Bronze</SelectItem>
                        <SelectItem value="Silver">Silver</SelectItem>
                        <SelectItem value="Gold">Gold</SelectItem>
                        <SelectItem value="Platinum">Platinum</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Table des clients */}
            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Client</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead>Niveau</TableHead>
                            <TableHead>Commandes</TableHead>
                            <TableHead>Total dépensé</TableHead>
                            <TableHead>Inscription</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedCustomers.map((customer) => (
                            <TableRow key={customer.id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar>
                                            <AvatarImage src={customer.avatar} />
                                            <AvatarFallback>
                                                {customer.firstName[0]}{customer.lastName[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-medium">{customer.firstName} {customer.lastName}</div>
                                            <div className="text-sm text-muted-foreground">{customer.email}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>{getStatusBadge(customer.status)}</TableCell>
                                <TableCell>{getTierBadge(customer.tier)}</TableCell>
                                <TableCell>{customer.totalOrders}</TableCell>
                                <TableCell>{customer.totalSpent.toFixed(2)}€</TableCell>
                                <TableCell>
                                    {format(new Date(customer.createdAt), 'dd MMM yyyy', { locale: fr })}
                                </TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="sm">
                                        Détails
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>

            {/* Pagination */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                    Affichage de {startIndex + 1} à {Math.min(startIndex + itemsPerPage, filteredCustomers.length)} sur {filteredCustomers.length} clients
                </p>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious 
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                            />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                            // Afficher seulement les pages proches de la page courante
                            if (
                                page === 1 ||
                                page === totalPages ||
                                (page >= currentPage - 2 && page <= currentPage + 2)
                            ) {
                                return (
                                    <PaginationItem key={page}>
                                        <PaginationLink
                                            onClick={() => setCurrentPage(page)}
                                            isActive={currentPage === page}
                                            className="cursor-pointer"
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            } else if (
                                page === currentPage - 3 ||
                                page === currentPage + 3
                            ) {
                                return (
                                    <PaginationItem key={page}>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                );
                            }
                            return null;
                        })}
                        <PaginationItem>
                            <PaginationNext 
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
