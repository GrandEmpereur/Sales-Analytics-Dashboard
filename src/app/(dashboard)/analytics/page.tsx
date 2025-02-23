"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAnalyticsSummary, getRevenueData, getCustomerSegments, getRegionalData, getConversionData } from "@/mocks/analytics";
import { ArrowDown, ArrowUp, Users, ShoppingCart, CreditCard, Activity, Download, Calendar, TrendingUp, Building2, Percent } from "lucide-react";
import { usePathname } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export default function AnalyticsPage() {
    const pathname = usePathname();
    const paths = pathname.split('/').filter(Boolean);

    const [period, setPeriod] = useState("30");
    const [selectedTab, setSelectedTab] = useState("overview");

    const summary = getAnalyticsSummary();
    const revenueData = getRevenueData(parseInt(period));
    const segments = getCustomerSegments();
    const regionalData = getRegionalData();
    const conversionData = getConversionData();

    const handleExport = () => {
        const data = {
            summary,
            revenueData,
            segments,
            regionalData,
            conversionData
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `analytics-${format(new Date(), 'yyyy-MM-dd')}.json`;
        a.click();
    };

    return (
        <div className="space-y-6">
            {/* Header avec filtres */}
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
                    <p className="text-muted-foreground">Aperçu de vos performances commerciales</p>
                </div>
                <div className="flex items-center gap-4">
                    <Select value={period} onValueChange={setPeriod}>
                        <SelectTrigger className="w-[180px]">
                            <Calendar className="mr-2 h-4 w-4" />
                            <SelectValue placeholder="Période" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="7">7 derniers jours</SelectItem>
                            <SelectItem value="30">30 derniers jours</SelectItem>
                            <SelectItem value="90">90 derniers jours</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button variant="outline" onClick={handleExport}>
                        <Download className="mr-2 h-4 w-4" />
                        Exporter
                    </Button>
                </div>
            </div>

            {/* Cartes de statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Revenus Totaux</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{summary.totalRevenue.toFixed(2)}€</div>
                        <div className="flex items-center text-sm text-muted-foreground">
                            {summary.revenueGrowth >= 0 ? (
                                <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                            ) : (
                                <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
                            )}
                            <span className={summary.revenueGrowth >= 0 ? "text-green-500" : "text-red-500"}>
                                {Math.abs(summary.revenueGrowth).toFixed(1)}%
                            </span>
                            <span className="ml-1">vs mois dernier</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Commandes</CardTitle>
                        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{summary.totalOrders}</div>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                            <span className="text-green-500">{summary.orderGrowth}%</span>
                            <span className="ml-1">vs mois dernier</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Clients Actifs</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{summary.activeCustomers}</div>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                            <span className="text-green-500">{summary.customerGrowth}%</span>
                            <span className="ml-1">vs mois dernier</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Valeur Moyenne</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{summary.averageOrderValue.toFixed(2)}€</div>
                        <p className="text-xs text-muted-foreground">
                            Par commande
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Tableaux de données */}
            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
                    <TabsTrigger value="revenue">Revenus</TabsTrigger>
                    <TabsTrigger value="customers">Clients</TabsTrigger>
                    <TabsTrigger value="regions">Régions</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                        {/* Tendances des revenus */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Tendances des revenus</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {revenueData.slice(-5).map((data) => (
                                        <div key={data.date} className="flex items-center">
                                            <div className="w-24 text-sm">
                                                {format(new Date(data.date), 'dd MMM', { locale: fr })}
                                            </div>
                                            <div className="flex-1">
                                                <Progress value={
                                                    (data.revenue / Math.max(...revenueData.map(d => d.revenue))) * 100
                                                } />
                                            </div>
                                            <div className="w-24 text-right text-sm">
                                                {data.revenue.toFixed(2)}€
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Conversion */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Taux de conversion</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {conversionData.slice(-5).map((data) => (
                                        <div key={data.date} className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>{format(new Date(data.date), 'dd MMM', { locale: fr })}</span>
                                                <span className="font-medium">{data.rate}%</span>
                                            </div>
                                            <Progress value={parseFloat(data.rate)} />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Segments clients */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Répartition des segments</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {segments.map((segment) => (
                                        <div key={segment.segment} className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>{segment.segment}</span>
                                                <span className="font-medium">{segment.percentage.toFixed(1)}%</span>
                                            </div>
                                            <Progress value={segment.percentage} />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Performance régionale */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Top régions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {regionalData
                                        .sort((a, b) => b.revenue - a.revenue)
                                        .slice(0, 5)
                                        .map((region) => (
                                            <div key={region.region} className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span>{region.region}</span>
                                                    <span className="font-medium">{region.revenue.toFixed(2)}€</span>
                                                </div>
                                                <Progress 
                                                    value={
                                                        (region.revenue / Math.max(...regionalData.map(r => r.revenue))) * 100
                                                    } 
                                                />
                                            </div>
                                        ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="revenue">
                    <Card>
                        <CardHeader>
                            <CardTitle>Détail des revenus</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Revenus</TableHead>
                                        <TableHead>Commandes</TableHead>
                                        <TableHead>Moyenne</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {revenueData.map((data) => (
                                        <TableRow key={data.date}>
                                            <TableCell>
                                                {format(new Date(data.date), 'dd MMM yyyy', { locale: fr })}
                                            </TableCell>
                                            <TableCell>{data.revenue.toFixed(2)}€</TableCell>
                                            <TableCell>{data.orders}</TableCell>
                                            <TableCell>
                                                {data.orders > 0 ? (data.revenue / data.orders).toFixed(2) : 0}€
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="customers">
                    <div className="grid gap-4 grid-cols-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>Analyse des segments clients</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-8">
                                    {segments.map((segment) => (
                                        <div key={segment.segment}>
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-medium">{segment.segment}</h3>
                                                <span className="text-muted-foreground">
                                                    {segment.customers} clients
                                                </span>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span>Revenus</span>
                                                    <span>{segment.revenue.toFixed(2)}€</span>
                                                </div>
                                                <Progress value={segment.percentage} />
                                                <p className="text-sm text-muted-foreground">
                                                    {segment.percentage.toFixed(1)}% du revenu total
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="regions">
                    <div className="grid gap-4 grid-cols-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>Performance par région</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-8">
                                    {regionalData.map((region) => (
                                        <div key={region.region}>
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-medium">{region.region}</h3>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-muted-foreground">
                                                        {region.customers} clients
                                                    </span>
                                                    <span className="font-medium">
                                                        {region.revenue.toFixed(2)}€
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span>Commandes</span>
                                                    <span>{region.orders}</span>
                                                </div>
                                                <Progress 
                                                    value={
                                                        (region.orders / Math.max(...regionalData.map(r => r.orders))) * 100
                                                    } 
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
