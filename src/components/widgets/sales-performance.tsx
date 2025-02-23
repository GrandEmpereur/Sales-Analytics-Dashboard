"use client"

import { Info, ArrowRight } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
    {
        name: "Total Sales per day",
        value: 90,
        fill: "var(--color-total)",
    },
    {
        name: "Average Sales",
        value: 70,
        fill: "var(--color-average)",
    },
]

const chartConfig = {
    total: {
        label: "Total Sales per day",
        color: "hsl(20, 92%, 67%)",
    },
    average: {
        label: "Average Sales",
        color: "hsl(20, 92%, 85%)",
    },
} satisfies ChartConfig

export function SalesPerformance() {
    return (
        <Card className="w-full">
            <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                    <CardTitle>Sales Performance</CardTitle>
                    <Info className="h-4 w-4 text-muted-foreground" />
                </div>
            </CardHeader>
            <CardContent className="pb-2">
                <ChartContainer config={chartConfig} className="">
                    <RadialBarChart
                        data={chartData}
                        startAngle={180}
                        endAngle={0}
                        innerRadius="65%"
                        outerRadius="85%"
                        barSize={15}
                        barGap={10}
                    >
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" className="fill-foreground">
                                                <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 10} className="text-3xl font-semibold">
                                                    17.9%
                                                </tspan>
                                                <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 15} className="text-sm fill-muted-foreground">
                                                    Since yesterday
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <RadialBar dataKey="value" cornerRadius={15} className="stroke-transparent" />
                    </RadialBarChart>
                </ChartContainer>

                <div className="mt-4 space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: chartConfig.total.color }} />
                            <span>{chartConfig.total.label}</span>
                        </div>
                        <span className="text-muted-foreground">For week</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: chartConfig.average.color }} />
                            <span>{chartConfig.average.label}</span>
                        </div>
                        <span className="text-muted-foreground">For today</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-2 text-sm font-medium hover:bg-gray-200">
                    See Details
                    <ArrowRight className="h-4 w-4" />
                </button>
            </CardFooter>
        </Card>
    )
}

