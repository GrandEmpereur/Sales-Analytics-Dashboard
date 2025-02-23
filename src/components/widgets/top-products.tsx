"use client"

import { Info, ArrowRight, Package } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

export function TopProducts() {
    return (
        <TooltipProvider>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="flex items-center space-x-2">
                        <CardTitle className="text-sm font-medium">Top Products</CardTitle>
                        <Tooltip>
                            <TooltipTrigger>
                                <Info className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>Best performing products</TooltipContent>
                        </Tooltip>
                    </div>
                    <Button variant="link" className="h-auto p-0 text-orange-600">
                        See Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 md:grid-cols-[30%_70%]">
                        <Card className="border-none shadow-none bg-slate-50">
                            <CardContent className="p-4">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded bg-orange-100 p-1.5 flex items-center justify-center">
                                            <Package className="h-5 w-5 text-orange-600" />
                                        </div>
                                        <div className="text-sm font-medium">Bird Shorts</div>
                                    </div>
                                    <div className="text-xl font-bold">$4,730.33</div>
                                    <div className="space-y-2">
                                        <div className="relative h-2 w-full overflow-hidden rounded-full bg-orange-100">
                                            <div 
                                                className="h-full bg-orange-500 transition-all" 
                                                style={{ width: '50%' }}
                                            />
                                        </div>
                                        <div className="text-xs text-emerald-600">5% targets achieved</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Table className="overflow-x-auto">
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
                                <TableRow>
                                    <TableCell>Bird Shorts</TableCell>
                                    <TableCell>127 pcs</TableCell>
                                    <TableCell>$1,890</TableCell>
                                    <TableCell>120</TableCell>
                                    <TableCell>
                                        <Badge className="bg-purple-50 text-purple-700">In Stock</Badge>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>T Shirts_Mel</TableCell>
                                    <TableCell>540 pcs</TableCell>
                                    <TableCell>$2,889</TableCell>
                                    <TableCell>100</TableCell>
                                    <TableCell>
                                        <Badge variant="destructive" className="bg-red-50 text-red-700">
                                            Out of stock
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </TooltipProvider>
    )
}

