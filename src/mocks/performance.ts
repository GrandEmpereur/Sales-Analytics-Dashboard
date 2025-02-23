import { subDays, format } from "date-fns";

export interface PerformanceMetric {
    id: string;
    name: string;
    value: number;
    unit: string;
    trend: number;
    status: 'good' | 'warning' | 'critical';
    history: {
        date: string;
        value: number;
    }[];
}

export interface ServerMetrics {
    cpu: number;
    memory: number;
    disk: number;
    network: {
        in: number;
        out: number;
    };
    requests: {
        total: number;
        success: number;
        error: number;
    };
    responseTime: number;
}

// Générer des données historiques
const generateHistory = (days: number, baseValue: number, volatility: number) => {
    return Array.from({ length: days }).map((_, index) => ({
        date: format(subDays(new Date(), days - 1 - index), 'yyyy-MM-dd'),
        value: baseValue + (Math.random() - 0.5) * volatility
    }));
};

export const mockPerformanceMetrics: PerformanceMetric[] = [
    {
        id: "metric_response_time",
        name: "Temps de réponse moyen",
        value: 245,
        unit: "ms",
        trend: -5.2,
        status: "good",
        history: generateHistory(30, 250, 50)
    },
    {
        id: "metric_success_rate",
        name: "Taux de succès",
        value: 99.8,
        unit: "%",
        trend: 0.3,
        status: "good",
        history: generateHistory(30, 99.8, 0.5)
    },
    {
        id: "metric_error_rate",
        name: "Taux d'erreur",
        value: 0.2,
        unit: "%",
        trend: -0.1,
        status: "good",
        history: generateHistory(30, 0.2, 0.1)
    },
    {
        id: "metric_cpu_usage",
        name: "Utilisation CPU",
        value: 68,
        unit: "%",
        trend: 12.5,
        status: "warning",
        history: generateHistory(30, 65, 15)
    }
];

export const mockServerMetrics: ServerMetrics[] = Array.from({ length: 24 }).map((_, index) => ({
    cpu: 45 + Math.random() * 30,
    memory: 60 + Math.random() * 20,
    disk: 55 + Math.random() * 10,
    network: {
        in: Math.floor(100 + Math.random() * 50),
        out: Math.floor(80 + Math.random() * 40)
    },
    requests: {
        total: Math.floor(1000 + Math.random() * 500),
        success: Math.floor(950 + Math.random() * 45),
        error: Math.floor(5 + Math.random() * 5)
    },
    responseTime: Math.floor(200 + Math.random() * 100)
}));

// Fonctions utilitaires
export const getPerformanceSummary = () => {
    const latestMetrics = mockServerMetrics[mockServerMetrics.length - 1];
    return {
        avgResponseTime: latestMetrics.responseTime,
        successRate: (latestMetrics.requests.success / latestMetrics.requests.total) * 100,
        errorRate: (latestMetrics.requests.error / latestMetrics.requests.total) * 100,
        cpuUsage: latestMetrics.cpu,
        memoryUsage: latestMetrics.memory,
        totalRequests: latestMetrics.requests.total
    };
};

export const getMetricHistory = (metricId: string) => {
    return mockPerformanceMetrics.find(m => m.id === metricId)?.history || [];
};

export const getServerMetricsHistory = () => {
    return mockServerMetrics;
}; 