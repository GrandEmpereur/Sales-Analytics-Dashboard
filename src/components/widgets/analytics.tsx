"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { InfoIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { FilterIcon } from "lucide-react"

export function Analytics() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Analytics</h3>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex gap-2">
                    <Select defaultValue="this-year">
                        <SelectTrigger className="w-[130px]">
                            <SelectValue placeholder="Select period" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="this-year">This year</SelectItem>
                            <SelectItem value="last-year">Last year</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                        <FilterIcon className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-baseline gap-x-3">
                        <div className="text-3xl font-bold">-$4.5430</div>
                        <div className="flex items-center gap-1">
                            <span className="text-sm">sales</span>
                            <span className="text-xs text-red-500 bg-red-100 px-1 rounded">-0.4%</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <div className="text-3xl font-bold">0.73%</div>
                        <div className="flex items-center gap-1">
                            <span className="text-sm">Conv.rate</span>
                            <span className="text-xs text-green-500 bg-green-100 px-1 rounded">+13%</span>
                        </div>
                    </div>
                    {/* Ici nous ajouterons le graphique */}
                    <div className="h-64 w-full bg-gradient-to-b from-orange-100/50">
                        {/* Placeholder pour le graphique */}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
} 