"use client"

import { useState, useEffect } from "react"
import { Info, ChevronDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

type PeriodData = {
    totalSales: number
    newSales: number
}

const periodData: Record<string, PeriodData> = {
    "this-month": { totalSales: 43630, newSales: 453 },
    "last-month": { totalSales: 38500, newSales: 401 },
    "this-year": { totalSales: 520000, newSales: 5280 },
}

export function ProductOverview() {
    const [selectedPeriod, setSelectedPeriod] = useState("this-month")
    const [data, setData] = useState<PeriodData>(periodData["this-month"])

    useEffect(() => {
        setData(periodData[selectedPeriod])
    }, [selectedPeriod])

    return (
        <TooltipProvider>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-3">
                    <div className="flex items-center space-x-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Product overview</CardTitle>
                        <Tooltip>
                            <TooltipTrigger>
                                <Info className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>Total sales across all products</TooltipContent>
                        </Tooltip>
                    </div>
                    <Select defaultValue={selectedPeriod} onValueChange={(value) => setSelectedPeriod(value)}>
                        <SelectTrigger className="h-8 w-[120px] text-sm">
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
                        <div>
                            <div className="flex items-baseline gap-2">
                                <div className="text-3xl font-bold">${data.totalSales.toLocaleString()}</div>
                                <div className="text-sm text-muted-foreground">Total sales</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="space-y-2">
                                <div className="text-sm text-muted-foreground">Select by product</div>
                                <div className="flex gap-2">
                                    <div className="px-4 py-1.5 rounded-full bg-[#F97316] text-white text-sm cursor-pointer hover:opacity-90">
                                        Cosmetics
                                    </div>
                                    <div className="px-4 py-1.5 rounded-full bg-[#FED7AA] text-[#F97316] text-sm cursor-pointer hover:opacity-90">
                                        Housewares
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-sm text-muted-foreground">New sales:</div>
                                <div className="flex items-center">
                                    <span className="text-sm font-medium">{data.newSales}</span>
                                    <ChevronDown className="ml-1 h-4 w-4 text-muted-foreground" />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </TooltipProvider>
    )
}

