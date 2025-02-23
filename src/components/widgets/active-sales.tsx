"use client"

import { ArrowRight, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

const data = [
    {
        value: 80,
        fill: "#f97316", // orange-500
    },
    {
        value: 60,
        fill: "#fb923c", // orange-400
    },
    {
        value: 40,
        fill: "#fdba74", // orange-300
    },
]

export function ActiveSales() {
    return (
        <TooltipProvider>
            <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="flex items-center space-x-2">
                        <CardTitle className="text-sm font-medium">Active sales</CardTitle>
                        <Tooltip>
                            <TooltipTrigger>
                                <Info className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>Current active sales</TooltipContent>
                        </Tooltip>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-start">
                        <div className="space-y-2">
                            <div className="text-2xl font-bold">$27,064</div>
                            <div className="flex items-center gap-2">
                                <div className="text-xs text-muted-foreground">vs last month</div>
                                <Badge variant="default" className="bg-emerald-50 text-emerald-700">
                                    +12%
                                </Badge>
                            </div>
                        </div>
                        <div className="h-[60px] flex items-end gap-2">
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-3 rounded-sm transition-all hover:opacity-90"
                                    style={{
                                        height: `${item.value}%`,
                                        backgroundColor: item.fill,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="p-0 border-t border-gray-200">
                    <Button variant="ghost" className="w-full mt-4 text-orange-600 hover:text-orange-600 hover:bg-orange-50">
                        See Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        </TooltipProvider>
    )
}

