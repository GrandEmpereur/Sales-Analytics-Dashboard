"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { 
    MessageSquare, Search, Filter, Plus, 
    ThumbsUp, ThumbsDown, MoreVertical,
    ArrowUp, ArrowDown, Tag, Clock,
    AlertCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { mockFeedbacks, FeedbackStatus, FeedbackType, getFeedbackStats } from "@/mocks/feedback";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function FeedbackPage() {
    const pathname = usePathname();
    const paths = pathname.split('/').filter(Boolean);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState<string>("all");
    const [selectedStatus, setSelectedStatus] = useState<string>("all");

    const stats = getFeedbackStats();

    const getStatusColor = (status: FeedbackStatus) => {
        const colors = {
            'new': "bg-blue-500",
            'in-progress': "bg-yellow-500",
            'completed': "bg-green-500",
            'planned': "bg-purple-500"
        };
        return colors[status];
    };

    const getTypeVariant = (type: FeedbackType) => {
        const variants = {
            'bug': "destructive",
            'feature': "default",
            'improvement': "secondary",
            'other': "outline"
        };
        return variants[type] as any;
    };

    const filteredFeedbacks = mockFeedbacks.filter(feedback => {
        const matchesType = selectedType === "all" || feedback.type === selectedType;
        const matchesStatus = selectedStatus === "all" || feedback.status === selectedStatus;
        const matchesSearch = 
            feedback.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            feedback.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            feedback.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        return matchesType && matchesStatus && matchesSearch;
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="space-y-1.5">
                    <Breadcrumb>
                        <BreadcrumbList>
                            {paths.map((path, index) => {
                                const isLast = index === paths.length - 1;
                                const href = `/${paths.slice(0, index + 1).join('/')}`;
                                return (
                                    <BreadcrumbItem key={path}>
                                        {isLast ? (
                                            <BreadcrumbPage className="text-xl font-medium capitalize">
                                                {path}
                                            </BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink href={href} className="text-lg capitalize">
                                                {path}
                                            </BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                );
                            })}
                        </BreadcrumbList>
                    </Breadcrumb>
                    <p className="text-muted-foreground">Gérez et suivez les retours utilisateurs</p>
                </div>
                <Button className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Nouveau feedback
                </Button>
            </div>

            {/* Statistiques */}
            <div className="grid gap-4 md:grid-cols-4">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <MessageSquare className="h-8 w-8 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">Total</p>
                                <p className="text-2xl font-bold">{stats.total}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <ThumbsUp className="h-8 w-8 text-green-500" />
                            <div>
                                <p className="text-sm text-muted-foreground">Complétés</p>
                                <p className="text-2xl font-bold">{stats.completed}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <Clock className="h-8 w-8 text-yellow-500" />
                            <div>
                                <p className="text-sm text-muted-foreground">En cours</p>
                                <p className="text-2xl font-bold">{stats.inProgress}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <AlertCircle className="h-8 w-8 text-red-500" />
                            <div>
                                <p className="text-sm text-muted-foreground">En attente</p>
                                <p className="text-2xl font-bold">{stats.planned}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Filtres et recherche */}
            <div className="flex gap-4">
                <Input
                    placeholder="Rechercher un feedback..."
                    className="max-w-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Tous les types</SelectItem>
                        <SelectItem value="bug">Bugs</SelectItem>
                        <SelectItem value="feature">Fonctionnalités</SelectItem>
                        <SelectItem value="improvement">Améliorations</SelectItem>
                    </SelectContent>
                </Select>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Statut" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Tous les statuts</SelectItem>
                        <SelectItem value="new">Nouveau</SelectItem>
                        <SelectItem value="in-progress">En cours</SelectItem>
                        <SelectItem value="completed">Complété</SelectItem>
                        <SelectItem value="planned">Planifié</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Liste des feedbacks */}
            <Card>
                <CardHeader>
                    <CardTitle>Feedbacks</CardTitle>
                    <CardDescription>
                        {filteredFeedbacks.length} feedback(s) trouvé(s)
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[600px] pr-4">
                        <div className="space-y-4">
                            {filteredFeedbacks.map((feedback) => (
                                <div
                                    key={feedback.id}
                                    className="flex items-start justify-between p-4 border rounded-lg"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex flex-col items-center gap-1">
                                            <Button variant="ghost" size="icon">
                                                <ArrowUp className="h-4 w-4" />
                                            </Button>
                                            <span className="font-medium">{feedback.votes}</span>
                                            <Button variant="ghost" size="icon">
                                                <ArrowDown className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-medium">{feedback.title}</h3>
                                                <Badge variant={getTypeVariant(feedback.type)}>
                                                    {feedback.type}
                                                </Badge>
                                                <div className={`w-2 h-2 rounded-full ${getStatusColor(feedback.status)}`} />
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                {feedback.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {feedback.tags.map((tag) => (
                                                    <Badge key={tag} variant="outline">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-4 mt-2">
                                                <span className="text-sm text-muted-foreground">
                                                    {format(new Date(feedback.createdAt), 'Pp', { locale: fr })}
                                                </span>
                                                <div className="flex items-center gap-1">
                                                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm text-muted-foreground">
                                                        {feedback.comments.length}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>Voir les détails</DropdownMenuItem>
                                            <DropdownMenuItem>Ajouter un commentaire</DropdownMenuItem>
                                            <DropdownMenuItem>Modifier le statut</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="text-red-600">
                                                Supprimer
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    );
}
