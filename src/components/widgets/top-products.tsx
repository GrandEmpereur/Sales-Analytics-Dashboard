"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { InfoIcon } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function TopProducts() {
    const products = [
        {
            id: 1,
            icon: "👕",
            name: "Bled Shorts",
            price: "$4,730.33",
            sales: "127 pcs",
            revenue: "$1,890",
            stock: "120",
            status: "In Stock",
            targetAchieved: "15% target achieved"
        },
        {
            id: 2,
            icon: "👕",
            name: "T Shirts_Mid",
            sales: "540 pcs",
            revenue: "$2,869",
            stock: "100",
            status: "Out of stock"
        }
    ]

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Top Products</h3>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                </div>
                <button className="text-sm text-orange-500 hover:text-orange-600">
                    See Details →
                </button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Product</TableHead>
                            <TableHead>Sales</TableHead>
                            <TableHead>Revenue</TableHead>
                            <TableHead>Stock</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl">{product.icon}</span>
                                        <div className="flex flex-col">
                                            <span>{product.name}</span>
                                            {product.price && (
                                                <span className="text-sm text-muted-foreground">{product.price}</span>
                                            )}
                                            {product.targetAchieved && (
                                                <span className="text-xs text-orange-500">{product.targetAchieved}</span>
                                            )}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>{product.sales}</TableCell>
                                <TableCell>{product.revenue}</TableCell>
                                <TableCell>{product.stock}</TableCell>
                                <TableCell>
                                    <Badge 
                                        variant={product.status === "In Stock" ? "default" : "destructive"}
                                        className="bg-opacity-10 text-xs"
                                    >
                                        {product.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
} 