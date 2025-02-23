"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockProducts, ProductCategory, ProductStatus } from "@/mocks/products";
import { Filter, Plus, Star } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function ProductsPage() {
    const pathname = usePathname();
    const paths = pathname.split('/').filter(Boolean);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all");
    const [selectedStatus, setSelectedStatus] = useState<ProductStatus | "all">("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // Filtrer les produits
    const filteredProducts = mockProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        const matchesStatus = selectedStatus === "all" || product.status === selectedStatus;
        return matchesSearch && matchesCategory && matchesStatus;
    });

    // Calculer la pagination
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    // Générer les numéros de page
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 10;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 3; i++) pages.push(i);
                pages.push('ellipsis');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('ellipsis');
                for (let i = totalPages - 2; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push('ellipsis');
                pages.push(currentPage - 1);
                pages.push(currentPage);
                pages.push(currentPage + 1);
                pages.push('ellipsis');
                pages.push(totalPages);
            }
        }
        return pages;
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
                    <p className="text-muted-foreground">Gérez votre flotte de véhicules en location</p>
                </div>
                <Button variant="secondary" className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    <span>Ajouter un véhicule</span>
                </Button>
            </div>

            {/* Filtres */}
            <div className="flex gap-4 items-center">
                <Input
                    placeholder="Rechercher un véhicule..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                />
                <Select
                    value={selectedCategory}
                    onValueChange={(value) => setSelectedCategory(value as ProductCategory | "all")}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Toutes les catégories</SelectItem>
                        <SelectItem value="SUV">SUV</SelectItem>
                        <SelectItem value="Sedan">Berline</SelectItem>
                        <SelectItem value="Sports">Sport</SelectItem>
                        <SelectItem value="Electric">Électrique</SelectItem>
                        <SelectItem value="Luxury">Luxe</SelectItem>
                        <SelectItem value="Compact">Compact</SelectItem>
                        <SelectItem value="Van">Van</SelectItem>
                    </SelectContent>
                </Select>
                <Select
                    value={selectedStatus}
                    onValueChange={(value) => setSelectedStatus(value as ProductStatus | "all")}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Statut" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Tous les statuts</SelectItem>
                        <SelectItem value="Available">Disponible</SelectItem>
                        <SelectItem value="Limited">Stock limité</SelectItem>
                        <SelectItem value="Reserved">Réservé</SelectItem>
                        <SelectItem value="Coming Soon">Bientôt disponible</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Grille de produits - ajustement des colonnes pour 12 items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                        <div className="relative h-48">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full text-sm font-medium">
                                {product.status}
                            </div>
                        </div>
                        <div className="p-4 space-y-2">
                            <div className="flex justify-between items-start">
                                <h3 className="font-medium">{product.name}</h3>
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm">{product.rating}</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                            <div className="pt-2 flex justify-between items-center">
                                <span className="text-lg font-semibold">{product.price}€/mois</span>
                                <Button variant="secondary" size="sm">Voir détails</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-end items-center w-full">
                <Pagination className="justify-end">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>

                        {getPageNumbers().map((pageNumber, index) => (
                            <PaginationItem key={index}>
                                {pageNumber === 'ellipsis' ? (
                                    <PaginationEllipsis />
                                ) : (
                                    <PaginationLink
                                        isActive={currentPage === pageNumber}
                                        onClick={() => setCurrentPage(pageNumber as number)}
                                    >
                                        {pageNumber}
                                    </PaginationLink>
                                )}
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
