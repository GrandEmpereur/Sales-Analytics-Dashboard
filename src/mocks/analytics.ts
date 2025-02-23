import { mockOrders } from "./orders";
import { mockCustomers } from "./customers";
import { subDays, format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

export interface AnalyticsSummary {
    totalRevenue: number;
    totalOrders: number;
    totalCustomers: number;
    activeCustomers: number;
    averageOrderValue: number;
    revenueGrowth: number;
    customerGrowth: number;
    orderGrowth: number;
}

export interface RevenueData {
    date: string;
    revenue: number;
    orders: number;
}

export interface TopProduct {
    id: string;
    name: string;
    revenue: number;
    orders: number;
    growth: number;
}

export interface CustomerSegment {
    segment: string;
    customers: number;
    revenue: number;
    percentage: number;
}

// Générer des données de revenus pour les 30 derniers jours
export const getRevenueData = (days: number = 30): RevenueData[] => {
    return Array.from({ length: days }).map((_, index) => {
        const date = subDays(new Date(), days - 1 - index);
        const dateStr = format(date, 'yyyy-MM-dd');

        // Filtrer les commandes pour cette date
        const dayOrders = mockOrders.filter(order =>
            format(new Date(order.createdAt), 'yyyy-MM-dd') === dateStr
        );

        return {
            date: dateStr,
            revenue: dayOrders.reduce((sum, order) => sum + order.totalAmount, 0),
            orders: dayOrders.length
        };
    });
};

// Obtenir les statistiques globales
export const getAnalyticsSummary = (): AnalyticsSummary => {
    const currentMonthOrders = mockOrders.filter(order => {
        const orderDate = new Date(order.createdAt);
        return orderDate >= startOfMonth(new Date()) && orderDate <= endOfMonth(new Date());
    });

    const lastMonthOrders = mockOrders.filter(order => {
        const orderDate = new Date(order.createdAt);
        const lastMonth = subDays(startOfMonth(new Date()), 1);
        return orderDate >= startOfMonth(lastMonth) && orderDate <= endOfMonth(lastMonth);
    });

    const currentRevenue = currentMonthOrders.reduce((sum, order) => sum + order.totalAmount, 0);
    const lastRevenue = lastMonthOrders.reduce((sum, order) => sum + order.totalAmount, 0);
    const revenueGrowth = lastRevenue ? ((currentRevenue - lastRevenue) / lastRevenue) * 100 : 0;

    return {
        totalRevenue: mockOrders.reduce((sum, order) => sum + order.totalAmount, 0),
        totalOrders: mockOrders.length,
        totalCustomers: mockCustomers.length,
        activeCustomers: mockCustomers.filter(customer => customer.status === 'Active').length,
        averageOrderValue: mockOrders.reduce((sum, order) => sum + order.totalAmount, 0) / mockOrders.length,
        revenueGrowth,
        customerGrowth: 12.5, // Exemple de croissance
        orderGrowth: 8.3 // Exemple de croissance
    };
};

// Obtenir les segments de clients
export const getCustomerSegments = (): CustomerSegment[] => {
    const totalRevenue = mockCustomers.reduce((sum, customer) => sum + customer.totalSpent, 0);

    const segments: CustomerSegment[] = [
        {
            segment: 'Premium',
            customers: mockCustomers.filter(c => c.tier === 'Platinum').length,
            revenue: mockCustomers.filter(c => c.tier === 'Platinum')
                .reduce((sum, c) => sum + c.totalSpent, 0),
            percentage: 0 // Calculé ci-dessous
        },
        {
            segment: 'Gold',
            customers: mockCustomers.filter(c => c.tier === 'Gold').length,
            revenue: mockCustomers.filter(c => c.tier === 'Gold')
                .reduce((sum, c) => sum + c.totalSpent, 0),
            percentage: 0
        },
        {
            segment: 'Standard',
            customers: mockCustomers.filter(c => c.tier === 'Silver').length,
            revenue: mockCustomers.filter(c => c.tier === 'Silver')
                .reduce((sum, c) => sum + c.totalSpent, 0),
            percentage: 0
        },
        {
            segment: 'Basic',
            customers: mockCustomers.filter(c => c.tier === 'Bronze').length,
            revenue: mockCustomers.filter(c => c.tier === 'Bronze')
                .reduce((sum, c) => sum + c.totalSpent, 0),
            percentage: 0
        }
    ];

    // Calculer les pourcentages
    segments.forEach(segment => {
        segment.percentage = (segment.revenue / totalRevenue) * 100;
    });

    return segments;
};

// Obtenir les données de performance par région
export const getRegionalData = () => {
    const regions = ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille'];
    return regions.map(region => ({
        region,
        orders: mockOrders.filter(order =>
            mockCustomers.find(c => c.id === order.userId)?.address.city === region
        ).length,
        revenue: mockOrders.filter(order =>
            mockCustomers.find(c => c.id === order.userId)?.address.city === region
        ).reduce((sum, order) => sum + order.totalAmount, 0),
        customers: mockCustomers.filter(c => c.address.city === region).length
    }));
};

// Obtenir les données de conversion
export const getConversionData = () => {
    const days = eachDayOfInterval({
        start: subDays(new Date(), 30),
        end: new Date()
    });

    return days.map(day => {
        const dateStr = format(day, 'yyyy-MM-dd');
        const dayOrders = mockOrders.filter(order =>
            format(new Date(order.createdAt), 'yyyy-MM-dd') === dateStr
        );

        return {
            date: dateStr,
            visitors: Math.floor(Math.random() * 1000) + 500, // Données simulées
            conversions: dayOrders.length,
            rate: ((dayOrders.length / (Math.floor(Math.random() * 1000) + 500)) * 100).toFixed(2)
        };
    });
}; 