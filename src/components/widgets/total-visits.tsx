"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { InfoIcon, MoreHorizontal, X, ArrowRightLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TotalVisits() {
    const days = ['MON', 'TUE', 'WED']
    const hours = Array.from({ length: 8 }, (_, i) => i)

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                    <div className="p-2 bg-orange-50 rounded-lg">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#f97316"/>
                            <path d="M3.41421 20.4142C2.63316 19.6332 2 18.1569 2 17C2 15.8431 2.63316 14.3668 3.41421 13.5858C4.19526 12.8047 5.67157 12.1716 6.82843 12.1716C7.98528 12.1716 9.46159 12.8047 10.2426 13.5858C11.0237 14.3668 11.6569 15.8431 11.6569 17C11.6569 18.1569 11.0237 19.6332 10.2426 20.4142C9.46159 21.1953 7.98528 21.8284 6.82843 21.8284C5.67157 21.8284 4.19526 21.1953 3.41421 20.4142Z" fill="#f97316"/>
                            <path d="M13.7574 20.4142C12.9763 19.6332 12.3431 18.1569 12.3431 17C12.3431 15.8431 12.9763 14.3668 13.7574 13.5858C14.5384 12.8047 16.0147 12.1716 17.1716 12.1716C18.3284 12.1716 19.8047 12.8047 20.5858 13.5858C21.3668 14.3668 22 15.8431 22 17C22 18.1569 21.3668 19.6332 20.5858 20.4142C19.8047 21.1953 18.3284 21.8284 17.1716 21.8284C16.0147 21.8284 14.5384 21.1953 13.7574 20.4142Z" fill="#f97316"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Total visits by hourly</h3>
                        <div className="flex items-center gap-1">
                            <span className="text-2xl font-bold">288,822</span>
                            <span className="text-xs text-green-500 bg-green-100 px-1 rounded">+4%</span>
                        </div>
                    </div>
                </div>
                <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-8 gap-1">
                    {days.map((day) => (
                        <div key={day} className="space-y-1">
                            <div className="text-xs text-muted-foreground">{day}</div>
                            {hours.map((hour) => (
                                <div
                                    key={hour}
                                    className={`h-8 rounded-md ${
                                        Math.random() > 0.7 
                                            ? 'bg-orange-500' 
                                            : Math.random() > 0.5 
                                                ? 'bg-orange-200' 
                                                : 'bg-orange-100'
                                    }`}
                                >
                                    {hour === 3 && day === 'MON' && (
                                        <div className="relative">
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-background border px-2 py-1 rounded text-xs">
                                                21.3,890 (DAU)
                                                <X className="absolute -top-1 -right-1 h-3 w-3" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mt-4">
                    <Button variant="ghost" size="sm">
                        <ArrowRightLeft className="h-4 w-4 mr-2" />
                        Compare
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
} 