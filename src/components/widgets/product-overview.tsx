"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { InfoIcon } from "lucide-react"

export function ProductOverview() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Product overview</h3>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                </div>
                <Select defaultValue="this-month">
                    <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="this-month">This month</SelectItem>
                        <SelectItem value="last-month">Last month</SelectItem>
                        <SelectItem value="this-year">This year</SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-end gap-x-3">
                        <div className="text-3xl font-bold">$43,630</div>
                        <div className="text-sm text-muted-foreground">Total sales</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Select by product</span>
                        <span className="text-sm text-muted-foreground">New sales: 453</span>
                    </div>
                    <div className="flex space-x-[1px]">
                        {/* Premier bloc */}
                        <div className="bg-orange-500 text-white px-4 py-2 rounded-md">
                            Cosmetics
                        </div>

                        {/* Deuxième bloc (même arrondi que le premier) */}
                        <div className="bg-orange-500 text-white px-4 py-2 rounded">
                            Housewest
                        </div>

                        {/* Troisième bloc (vide ou texte au choix) */}
                        <div className="bg-orange-500 text-white px-4 py-2 rounded-md">
                            {/* Laissez vide ou ajoutez un texte */}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
} 