"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info, MoreHorizontal, Users } from "lucide-react"
import { useState } from "react"

export default function HourlyVisits() {
    // Mock data for the heatmap
    const days = ["MON", "TUE", "WED"]
    const hours = Array.from({ length: 8 }, (_, i) => i)

    // Generate random intensity values for demo
    const [intensities] = useState(() => days.map(() => hours.map(() => Math.random())))

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div className="flex items-center gap-2">
                        <CardTitle className="text-base font-medium">Total visits by hourly</CardTitle>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Info className="h-4 w-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Hourly visit statistics</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Export data</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent>
                <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-2xl font-bold">288,822</span>
                    <span className="text-xs text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded-full">+4.3%</span>
                </div>
                <div className="grid gap-1">
                    {days.map((day, dayIndex) => (
                        <div key={day} className="grid grid-cols-[40px_1fr] gap-2">
                            <div className="text-xs text-muted-foreground self-center">{day}</div>
                            <div className="grid grid-cols-8 gap-1">
                                {hours.map((hour, hourIndex) => (
                                    <div
                                        key={hour}
                                        className="aspect-square rounded-md"
                                        style={{
                                            backgroundColor: `rgba(246, 121, 75, ${intensities[dayIndex][hourIndex]})`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

