"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { InfoIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductRevenue() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Product Revenue</h3>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between space-y-4">
                    <div>
                        <div className="text-3xl font-bold">$16,568</div>
                        <div className="text-sm font-medium text-green-500">vs last month +7%</div>
                    </div>
                    <div className="flex justify-center py-2">
                        <div className="relative w-24 h-24">
                            <div className="absolute inset-0 rounded-full border-8 border-orange-500/20" />
                            <div
                                className="absolute inset-0 rounded-full border-8 border-transparent border-t-orange-500"
                                style={{ transform: 'rotate(45deg)' }}
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
            <Button variant="ghost" className="w-full border-t border-orange-500/20 rounded-none">
                See Details →
            </Button>
        </Card>
    )
} 