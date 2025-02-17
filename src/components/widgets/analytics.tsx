"use client"

import { Info, Filter } from "lucide-react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const data = [
    { month: "JAN", value: 3000 },
    { month: "FEB", value: 2000 },
    { month: "MAR", value: 3800 },
    { month: "APR", value: 2800 },
    { month: "MAY", value: 4800 },
    { month: "JUN", value: 3900 },
    { month: "JUL", value: 3800 },
    { month: "AUG", value: 3200 },
]

export function Analytics() {
    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
                <div className="flex items-center space-x-2">
                    <h2 className="text-2xl font-bold">Analytics</h2>
                    <Info className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center space-x-2">
                    <Select defaultValue="this-year">
                        <SelectTrigger className="w-[130px] bg-muted/50">
                            <SelectValue placeholder="Select period" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="this-year">This year</SelectItem>
                            <SelectItem value="last-year">Last year</SelectItem>
                            <SelectItem value="all-time">All time</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button variant="outline" className="space-x-2 bg-muted/50">
                        <Filter className="h-4 w-4" />
                        <span>Filters</span>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="flex justify-between">
                        <div>
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold">-$4.5430</span>
                                <span className="text-sm text-red-500">-0.4%</span>
                            </div>
                            <span className="text-sm text-muted-foreground">sales</span>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold">0.73%</span>
                                <span className="text-sm text-green-500">+13%</span>
                            </div>
                            <span className="text-sm text-muted-foreground">Conv.rate</span>
                        </div>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                                <defs>
                                    <pattern id="diagonal-pattern" patternUnits="userSpaceOnUse" width="10" height="10">
                                        <path
                                            d="M-2,2 l4,-4 M0,10 l10,-10 M8,12 l4,-4"
                                            style={{
                                                stroke: "rgb(251, 146, 60)",
                                                strokeWidth: 1,
                                                opacity: 0.3,
                                            }}
                                        />
                                    </pattern>
                                </defs>
                                <CartesianGrid vertical={false} stroke="#f0f0f0" />
                                <XAxis
                                    dataKey="month"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: "#888", fontSize: 12 }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: "#888", fontSize: 12 }}
                                    tickFormatter={(value) => `$${value / 1000}K`}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="rgb(251, 146, 60)"
                                    fill="url(#diagonal-pattern)"
                                    strokeWidth={2}
                                    dot={{ fill: "rgb(251, 146, 60)", r: 4 }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

