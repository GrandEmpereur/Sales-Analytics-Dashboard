"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useSession } from "@/contexts/session-context";
import { 
    User, Settings, Bell, Shield, CreditCard, Key,
    Mail, Phone, Globe, Building, MapPin, 
    Smartphone, History, Download, LogOut,
    Plus, Languages, Clock
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function AccountPage() {
    const pathname = usePathname();
    const paths = pathname.split('/').filter(Boolean);
    const { user } = useSession();

    const connectionHistory = [
        { 
            date: "2024-03-20T10:30:00", 
            device: "MacBook Pro", 
            location: "Paris, France",
            ip: "192.168.1.1"
        },
        { 
            date: "2024-03-19T15:45:00", 
            device: "iPhone 13", 
            location: "Lyon, France",
            ip: "192.168.1.2"
        }
    ];

    const connectedDevices = [
        {
            name: "MacBook Pro",
            lastActive: "2024-03-20T10:30:00",
            type: "Desktop",
            location: "Paris, France"
        },
        {
            name: "iPhone 13",
            lastActive: "2024-03-19T15:45:00",
            type: "Mobile",
            location: "Lyon, France"
        }
    ];

    return (
        <div className="space-y-6">
            {/* Header existant */}
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
                    <p className="text-muted-foreground">Gérez votre compte et vos préférences</p>
                </div>
            </div>

            {/* Contenu principal */}
            <Tabs defaultValue="profile" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="profile" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Profil
                    </TabsTrigger>
                    <TabsTrigger value="security" className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Sécurité
                    </TabsTrigger>
                    <TabsTrigger value="devices" className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        Appareils
                    </TabsTrigger>
                    <TabsTrigger value="preferences" className="flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Préférences
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                    <Card>
                        <CardHeader>
                            <CardTitle>Informations personnelles</CardTitle>
                            <CardDescription>
                                Mettez à jour vos informations personnelles
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-6">
                                <Avatar className="h-20 w-20">
                                    <AvatarImage src={user?.avatar} />
                                    <AvatarFallback>
                                        {user?.firstName?.[0]}{user?.lastName?.[0]}
                                    </AvatarFallback>
                                </Avatar>
                                <Button variant="outline">Changer la photo</Button>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">Prénom</Label>
                                    <Input id="firstName" defaultValue={user?.firstName} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Nom</Label>
                                    <Input id="lastName" defaultValue={user?.lastName} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" defaultValue={user?.email} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Téléphone</Label>
                                    <Input id="phone" type="tel" defaultValue={user?.phone} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="devices" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Appareils connectés</CardTitle>
                            <CardDescription>
                                Gérez les appareils connectés à votre compte
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[300px] pr-4">
                                <div className="space-y-4">
                                    {connectedDevices.map((device, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                                            <div className="flex items-center gap-4">
                                                <Smartphone className="h-8 w-8" />
                                                <div>
                                                    <p className="font-medium">{device.name}</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {device.type} • {device.location}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Dernière activité: {format(new Date(device.lastActive), 'Pp', { locale: fr })}
                                                    </p>
                                                </div>
                                            </div>
                                            <Button variant="destructive" size="sm">
                                                Déconnecter
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Historique des connexions</CardTitle>
                            <CardDescription>
                                Consultez l'historique des connexions à votre compte
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[300px] pr-4">
                                <div className="space-y-4">
                                    {connectionHistory.map((connection, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                                            <div>
                                                <p className="font-medium">{connection.device}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {connection.location} • {connection.ip}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {format(new Date(connection.date), 'Pp', { locale: fr })}
                                                </p>
                                            </div>
                                            <History className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="preferences" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Préférences régionales</CardTitle>
                            <CardDescription>
                                Personnalisez vos paramètres régionaux
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label>Langue</Label>
                                    <div className="flex items-center gap-2">
                                        <Languages className="h-4 w-4" />
                                        <span>Français</span>
                                        <Button variant="outline" size="sm" className="ml-auto">
                                            Modifier
                                        </Button>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Fuseau horaire</Label>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        <span>Europe/Paris</span>
                                        <Button variant="outline" size="sm" className="ml-auto">
                                            Modifier
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Exportation des données</CardTitle>
                            <CardDescription>
                                Téléchargez une copie de vos données personnelles
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Download className="h-4 w-4" />
                                Exporter mes données
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Suppression du compte</CardTitle>
                            <CardDescription>
                                Supprimez définitivement votre compte et toutes vos données
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button variant="destructive" className="flex items-center gap-2">
                                <LogOut className="h-4 w-4" />
                                Supprimer mon compte
                            </Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
