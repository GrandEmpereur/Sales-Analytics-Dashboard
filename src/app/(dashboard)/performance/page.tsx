"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { 
    Clock, 
    Activity, 
    AlertTriangle, 
    CheckCircle2, 
    Cpu, 
    Database, 
    Network,
    Download,
    ArrowUp,
    ArrowDown,
    RefreshCcw
} from "lucide-react";
import { 
    mockPerformanceMetrics, 
    mockServerMetrics, 
    getPerformanceSummary 
} from "@/mocks/performance";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function PerformancePage() {
    const pathname = usePathname();
    const paths = pathname.split('/').filter(Boolean);
    const [selectedPeriod, setSelectedPeriod] = useState("24h");
    const summary = getPerformanceSummary();

    const getStatusColor = (status: 'good' | 'warning' | 'critical') => {
        return {
            good: "text-green-500",
            warning: "text-yellow-500",
            critical: "text-red-500"
        }[status];
    };
    const getTrendBadge = (trend: number) => (
        <Badge variant={trend >= 0 ? "default" : "destructive"} className="ml-2">
            {trend >= 0 ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
            {Math.abs(trend).toFixed(1)}%
        </Badge>
    );

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
                    <p className="text-muted-foreground">Surveillance des performances système</p>
                </div>
                <div className="flex items-center gap-4">
                    <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                        <SelectTrigger className="w-[180px]">
                            <Clock className="mr-2 h-4 w-4" />
                            <SelectValue placeholder="Période" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1h">Dernière heure</SelectItem>
                            <SelectItem value="24h">24 heures</SelectItem>
                            <SelectItem value="7d">7 jours</SelectItem>
                            <SelectItem value="30d">30 jours</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button variant="outline">
                        <RefreshCcw className="mr-2 h-4 w-4" />
                        Actualiser
                    </Button>
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Exporter
                    </Button>
                </div>
            </div>

            {/* Métriques principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Temps de réponse</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{summary.avgResponseTime}ms</div>
                        <Progress value={summary.avgResponseTime / 10} className="mt-2" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Taux de succès</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{summary.successRate.toFixed(1)}%</div>
                        <Progress value={summary.successRate} className="mt-2" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">CPU</CardTitle>
                        <Cpu className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{summary.cpuUsage.toFixed(1)}%</div>
                        <Progress value={summary.cpuUsage} className="mt-2" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Mémoire</CardTitle>
                        <Database className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{summary.memoryUsage.toFixed(1)}%</div>
                        <Progress value={summary.memoryUsage} className="mt-2" />
                    </CardContent>
                </Card>
            </div>

            {/* Métriques détaillées */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Métriques système</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {mockPerformanceMetrics.map((metric) => (
                                <div key={metric.id} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium">{metric.name}</h3>
                                        <div className="flex items-center">
                                            <span className={getStatusColor(metric.status)}>
                                                {metric.value}{metric.unit}
                                            </span>
                                            {getTrendBadge(metric.trend)}
                                        </div>
                                    </div>
                                    <Progress 
                                        value={metric.unit === '%' ? metric.value : (metric.value / 1000) * 100} 
                                    />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Ressources réseau</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {mockServerMetrics.slice(-5).map((metric, index) => (
                                <div key={index} className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Trafic entrant</span>
                                            <span>{metric.network.in} Mb/s</span>
                                        </div>
                                        <Progress value={(metric.network.in / 150) * 100} />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Trafic sortant</span>
                                            <span>{metric.network.out} Mb/s</span>
                                        </div>
                                        <Progress value={(metric.network.out / 120) * 100} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Statistiques des requêtes */}
            <Card>
                <CardHeader>
                    <CardTitle>Statistiques des requêtes</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {mockServerMetrics.slice(-5).map((metric, index) => (
                            <div key={index} className="space-y-2">
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Total</p>
                                        <p className="text-lg font-medium">{metric.requests.total}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Succès</p>
                                        <p className="text-lg font-medium text-green-600">
                                            {metric.requests.success}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Erreurs</p>
                                        <p className="text-lg font-medium text-red-600">
                                            {metric.requests.error}
                                        </p>
                                    </div>
                                </div>
                                <Progress 
                                    value={(metric.requests.success / metric.requests.total) * 100} 
                                    className="h-2"
                                />
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
