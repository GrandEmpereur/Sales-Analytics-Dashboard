"use client"

import { Info, ArrowRight } from "lucide-react"
import { PieChart, Pie, Cell } from "recharts"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const data = [
    { name: "Main", value: 75 },
    { name: "Secondary", value: 15 },
    { name: "Tertiary", value: 10 },
]

const COLORS = ["hsl(24, 95%, 53%)", "hsl(28, 96%, 72%)", "hsl(28, 100%, 86%)"]

export function ProductRevenue() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Product Revenue</h3>
                    <Info className="h-4 w-4 text-muted-foreground" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center">
                    <div className="space-y-1">
                        <div className="text-2xl font-bold">$16,568</div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">vs last month</span>
                            <Badge variant="default" className="bg-emerald-50 text-emerald-700">
                                +7%
                            </Badge>
                        </div>
                    </div>
                    <div className="w-20 h-20">
                        <PieChart width={80} height={80}>
                            <Pie
                                data={data}
                                cx={40}
                                cy={40}
                                innerRadius={25}
                                outerRadius={38}
                                fill="#8884d8"
                                paddingAngle={2}
                                dataKey="value"
                                startAngle={90}
                                endAngle={450}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-0 border-t border-gray-200">
                <Button variant="ghost" className="w-full mt-4 text-orange-600 hover:text-orange-600 hover:bg-orange-50">
                    See Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    )
}

