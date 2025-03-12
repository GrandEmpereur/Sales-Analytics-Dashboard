"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
    Settings, Bell, Globe, Shield, CreditCard, 
    Building, Mail, Palette, Moon, Sun, 
    Languages, Clock, Webhook, Key, Users,
    Smartphone, BellRing, Lock, Trash2, Download,
    FileJson, RefreshCw
} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSession } from "@/contexts/session-context";

export default function SettingsPage() {
    const pathname = usePathname();
    const paths = pathname.split('/').filter(Boolean);
    const { user } = useSession();

    const webhookEvents = [
        { name: "user.created", description: "Quand un utilisateur est créé" },
        { name: "user.updated", description: "Quand un utilisateur est mis à jour" },
        { name: "order.created", description: "Quand une commande est créée" },
        { name: "order.updated", description: "Quand une commande est mise à jour" }
    ];

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
                    <p className="text-muted-foreground">Configurez les paramètres de votre application</p>
                </div>
            </div>

            {/* Contenu principal */}
            <Tabs defaultValue="general" className="space-y-4">
                <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full">
                    <TabsTrigger value="general" className="flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Général
                    </TabsTrigger>
                    <TabsTrigger value="appearance" className="flex items-center gap-2">
                        <Palette className="h-4 w-4" />
                        Apparence
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="flex items-center gap-2">
                        <Bell className="h-4 w-4" />
                        Notifications
                    </TabsTrigger>
                    <TabsTrigger value="security" className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Sécurité
                    </TabsTrigger>
                    <TabsTrigger value="integrations" className="flex items-center gap-2">
                        <Webhook className="h-4 w-4" />
                        Intégrations
                    </TabsTrigger>
                    <TabsTrigger value="advanced" className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Avancé
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="general">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Informations de l'entreprise</CardTitle>
                                <CardDescription>
                                    Configurez les informations de base de votre entreprise
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Nom de l'entreprise</Label>
                                    <Input placeholder="Votre entreprise" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Email professionnel</Label>
                                    <Input type="email" placeholder="contact@entreprise.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Site web</Label>
                                    <Input type="url" placeholder="https://www.entreprise.com" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Localisation</CardTitle>
                                <CardDescription>
                                    Définissez vos préférences régionales
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Langue</Label>
                                    <Select defaultValue="fr">
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="fr">Français</SelectItem>
                                            <SelectItem value="en">English</SelectItem>
                                            <SelectItem value="es">Español</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Fuseau horaire</Label>
                                    <Select defaultValue="europe-paris">
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="europe-paris">Europe/Paris</SelectItem>
                                            <SelectItem value="america-new_york">America/New_York</SelectItem>
                                            <SelectItem value="asia-tokyo">Asia/Tokyo</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Format de date</Label>
                                    <Select defaultValue="dd/mm/yyyy">
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
                                            <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                                            <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="integrations">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Webhooks</CardTitle>
                                <CardDescription>
                                    Gérez vos points de terminaison webhook
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>URL du Webhook</Label>
                                        <div className="flex gap-2">
                                            <Input placeholder="https://api.votreapp.com/webhook" />
                                            <Button variant="outline">Tester</Button>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Événements</Label>
                                        <ScrollArea className="h-[200px] rounded-md border p-4">
                                            <div className="space-y-2">
                                                {webhookEvents.map((event) => (
                                                    <div key={event.name} className="flex items-center space-x-2">
                                                        <Switch id={event.name} />
                                                        <div className="grid gap-1.5 leading-none">
                                                            <Label htmlFor={event.name}>
                                                                {event.name}
                                                            </Label>
                                                            <p className="text-sm text-muted-foreground">
                                                                {event.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </ScrollArea>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Clés API</CardTitle>
                                <CardDescription>
                                    Gérez vos clés d'API pour l'intégration
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Clé API Live</Label>
                                        <div className="flex gap-2">
                                            <Input
                                                type="password"
                                                value="sk_live_xxxxxxxxxxxxxxxxxxxxx"
                                                readOnly
                                            />
                                            <Button variant="outline">Copier</Button>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Clé API Test</Label>
                                        <div className="flex gap-2">
                                            <Input
                                                type="password"
                                                value="sk_test_xxxxxxxxxxxxxxxxxxxxx"
                                                readOnly
                                            />
                                            <Button variant="outline">Copier</Button>
                                        </div>
                                    </div>
                                    <Button className="w-full">
                                        <RefreshCw className="w-4 h-4 mr-2" />
                                        Régénérer les clés
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="advanced">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Exportation des données</CardTitle>
                                <CardDescription>
                                    Exportez vos données dans différents formats
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-medium">Export JSON</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Téléchargez toutes vos données au format JSON
                                            </p>
                                        </div>
                                        <Button variant="outline">
                                            <FileJson className="w-4 h-4 mr-2" />
                                            Exporter
                                        </Button>
                                    </div>
                                    <Separator />
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-medium">Sauvegarde complète</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Créez une sauvegarde complète de vos données
                                            </p>
                                        </div>
                                        <Button variant="outline">
                                            <Download className="w-4 h-4 mr-2" />
                                            Télécharger
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Zone de danger</CardTitle>
                                <CardDescription>
                                    Actions irréversibles pour votre compte
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-medium">Réinitialiser les données</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Supprime toutes les données de votre compte
                                            </p>
                                        </div>
                                        <Button variant="destructive">
                                            Réinitialiser
                                        </Button>
                                    </div>
                                    <Separator />
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-medium">Supprimer le compte</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Supprime définitivement votre compte
                                            </p>
                                        </div>
                                        <Button variant="destructive">
                                            <Trash2 className="w-4 h-4 mr-2" />
                                            Supprimer
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="appearance">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Thème</CardTitle>
                                <CardDescription>
                                    Personnalisez l'apparence de votre interface
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Mode sombre</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Activer le thème sombre
                                        </p>
                                    </div>
                                    <Switch />
                                </div>
                                <Separator />
                                <div className="space-y-2">
                                    <Label>Couleur principale</Label>
                                    <Select defaultValue="blue">
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="blue">Bleu</SelectItem>
                                            <SelectItem value="purple">Violet</SelectItem>
                                            <SelectItem value="green">Vert</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Interface</CardTitle>
                                <CardDescription>
                                    Ajustez les paramètres d'affichage
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Densité de contenu</Label>
                                    <Select defaultValue="comfortable">
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="compact">Compact</SelectItem>
                                            <SelectItem value="comfortable">Confortable</SelectItem>
                                            <SelectItem value="spacious">Spacieux</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Animations</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Activer les animations de l'interface
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="notifications">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Notifications par email</CardTitle>
                                <CardDescription>
                                    Gérez vos préférences de notifications par email
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Nouvelles commandes</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Recevoir une notification pour chaque nouvelle commande
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Rapports hebdomadaires</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Recevoir un résumé hebdomadaire de vos activités
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Alertes de sécurité</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Recevoir des alertes de sécurité importantes
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Notifications push</CardTitle>
                                <CardDescription>
                                    Configurez les notifications en temps réel
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Messages instantanés</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Notifications pour les nouveaux messages
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Mises à jour système</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Notifications pour les mises à jour importantes
                                        </p>
                                    </div>
                                    <Switch />
                                </div>
                                <div className="space-y-2">
                                    <Label>Horaires de notification</Label>
                                    <Select defaultValue="always">
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="always">Toujours</SelectItem>
                                            <SelectItem value="working-hours">Heures de travail</SelectItem>
                                            <SelectItem value="custom">Personnalisé</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="security">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Authentification</CardTitle>
                                <CardDescription>
                                    Gérez vos paramètres de sécurité
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Authentification à deux facteurs</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Ajouter une couche de sécurité supplémentaire
                                        </p>
                                    </div>
                                    <Switch />
                                </div>
                                <Separator />
                                <div className="space-y-2">
                                    <Label>Méthode de récupération</Label>
                                    <Select defaultValue="email">
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="email">Email</SelectItem>
                                            <SelectItem value="sms">SMS</SelectItem>
                                            <SelectItem value="authenticator">Authenticator</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button className="w-full" variant="outline">
                                    <Key className="w-4 h-4 mr-2" />
                                    Changer le mot de passe
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Sessions actives</CardTitle>
                                <CardDescription>
                                    Gérez vos sessions de connexion
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-[300px] pr-4">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 border rounded-lg">
                                            <div>
                                                <p className="font-medium">Chrome - MacBook Pro</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Paris, France • Dernière activité il y a 2 minutes
                                                </p>
                                            </div>
                                            <Badge>Actuelle</Badge>
                                        </div>
                                        <div className="flex items-center justify-between p-4 border rounded-lg">
                                            <div>
                                                <p className="font-medium">Safari - iPhone</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Lyon, France • Dernière activité hier
                                                </p>
                                            </div>
                                            <Button variant="outline" size="sm">
                                                Déconnecter
                                            </Button>
                                        </div>
                                    </div>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
