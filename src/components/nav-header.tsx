"use client"

import { Search, SlidersHorizontal, Bell, Plus, Upload } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function NavHeader() {
    return (
        <div className="flex justify-between items-center gap-4 w-full">
            {/* Search bar */}
            <div className="flex items-center gap-2 px-3 py-2 border border-black rounded-lg flex-1 max-w-md">
                <Search className="w-4 h-4 text-muted-foreground" />
                <Input 
                    type="text" 
                    placeholder="Search" 
                    className="border-0 p-0 text-sm focus-visible:ring-0 h-auto"
                />
                <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
            </div>
            
            {/* Right section */}
            <div className="flex items-center">
                {/* Users and action buttons */}
                <div className="flex items-center">
                    <div className="flex -space-x-2 mr-4">
                        <Avatar className="w-8 h-8 border-2 border-background">
                            <AvatarImage src="/avatars/01.png" />
                            <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                        <Avatar className="w-8 h-8 border-2 border-background">
                            <AvatarImage src="/avatars/02.png" />
                            <AvatarFallback>BC</AvatarFallback>
                        </Avatar>
                        <Avatar className="w-8 h-8 border-2 border-background">
                            <AvatarImage src="/avatars/03.png" />
                            <AvatarFallback>CC</AvatarFallback>
                        </Avatar>
                    </div>
                    
                    <Button variant="outline" size="icon" className="mr-[45px]">
                        <Plus className="w-4 h-4" />
                    </Button>
                    
                    <Button variant="outline" size="icon">
                        <Bell className="w-4 h-4" />
                    </Button>
                </div>

                {/* Separator */}
                <Separator orientation="vertical" className="h-6 mx-5" />

                {/* Export button */}
                <Button variant="secondary" className="flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Export
                </Button>
            </div>
        </div>
    )
} 