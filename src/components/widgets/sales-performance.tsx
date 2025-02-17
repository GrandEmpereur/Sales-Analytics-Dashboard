"use client"

import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { InfoIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SalesPerformance() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Sales Performance</h3>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-48 h-48">
                            <div className="absolute inset-0">
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold">17.9%</div>
                                        <div className="text-sm text-muted-foreground">Since yesterday</div>
                                    </div>
                                </div>
                            </div>
                            <svg className="w-full h-full transform -rotate-90">
                                <circle
                                    className="text-orange-100"
                                    strokeWidth="12"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="90"
                                    cx="96"
                                    cy="96"
                                />
                                <circle
                                    className="text-orange-500"
                                    strokeWidth="12"
                                    strokeDasharray={565.48}
                                    strokeDashoffset={465.48}
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="90"
                                    cx="96"
                                    cy="96"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-orange-500 rounded-full" />
                            <span className="text-sm">Total Sales per day</span>
                            <span className="text-sm text-muted-foreground">For week</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-orange-200 rounded-full" />
                            <span className="text-sm">Average Sales</span>
                            <span className="text-sm text-muted-foreground">For today</span>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button variant="ghost" className="w-full">
                    See Details →
                </Button>
            </CardFooter>
        </Card>
    )
} 