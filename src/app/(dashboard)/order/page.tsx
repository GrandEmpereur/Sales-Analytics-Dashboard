"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getEnrichedOrders, OrderStatus } from "@/mocks/orders";
import { Search, Download, Filter } from "lucide-react";
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
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export default function OrdersPage() {
    const pathname = usePathname();
    const paths = pathname.split('/').filter(Boolean);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState<OrderStatus | "all">("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const orders = getEnrichedOrders();

    // Filtrer les commandes
    const filteredOrders = orders.filter(order => {
        const matchesSearch = 
            order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = selectedStatus === "all" || order.status === selectedStatus;
        return matchesSearch && matchesStatus;
    });

    // Pagination
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

    // Helper pour le statut badge
    const getStatusBadge = (status: OrderStatus) => {
        const variants = {
            'Pending': 'warning',
            'Active': 'success',
            'Completed': 'default',
            'Cancelled': 'destructive'
        };
        return <Badge variant={variants[status] as any}>{status}</Badge>;
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
                    <p className="text-muted-foreground">Gérez et suivez toutes vos commandes de location</p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>Exporter</span>
                </Button>
            </div>

            {/* Filtres */}
            <div className="flex gap-4 items-center">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        placeholder="Rechercher une commande..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <Select
                    value={selectedStatus}
                    onValueChange={(value) => setSelectedStatus(value as OrderStatus | "all")}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Statut" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Tous les statuts</SelectItem>
                        <SelectItem value="Pending">En attente</SelectItem>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Completed">Terminée</SelectItem>
                        <SelectItem value="Cancelled">Annulée</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Table des commandes */}
            <Card className="px-4 py-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>N° Commande</TableHead>
                            <TableHead>Client</TableHead>
                            <TableHead>Véhicule</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead>Date de début</TableHead>
                            <TableHead>Date de fin</TableHead>
                            <TableHead className="text-right">Mensualité</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedOrders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell className="font-medium">{order.orderNumber}</TableCell>
                                <TableCell>
                                    <div>
                                        <div className="font-medium">{order.customerName}</div>
                                        <div className="text-sm text-muted-foreground">{order.customerEmail}</div>
                                    </div>
                                </TableCell>
                                <TableCell>{order.product.name}</TableCell>
                                <TableCell>{getStatusBadge(order.status)}</TableCell>
                                <TableCell>
                                    {format(new Date(order.startDate), 'dd MMM yyyy', { locale: fr })}
                                </TableCell>
                                <TableCell>
                                    {format(new Date(order.endDate), 'dd MMM yyyy', { locale: fr })}
                                </TableCell>
                                <TableCell className="text-right">{order.monthlyPayment.toFixed(2)}€</TableCell>
                                <TableCell className="text-right">{order.totalAmount.toFixed(2)}€</TableCell>
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
                    Affichage de {startIndex + 1} à {Math.min(startIndex + itemsPerPage, filteredOrders.length)} sur {filteredOrders.length} commandes
                </p>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious 
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    onClick={() => setCurrentPage(page)}
                                    isActive={currentPage === page}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext 
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
