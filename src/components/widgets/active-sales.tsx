"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { InfoIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ActiveSales() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Active sales</h3>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                </div>
            </CardHeader>
            <CardContent>
                <div className=" flex items-center  justify-between space-y-4">
                    <div>
                        <div className="text-3xl font-bold">$27,064</div>
                        <div className="text-sm font-medium text-green-500">vs last month +12%</div>
                    </div>
                    <div className="">
                        <div className="flex justify-center items-end gap-4">
                            <div className="w-4 h-16 bg-orange-500 rounded-full" />
                            <div className="w-4 h-12 bg-orange-200 rounded-full" />
                            <div className="w-4 h-8 bg-orange-100 rounded-full" />
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