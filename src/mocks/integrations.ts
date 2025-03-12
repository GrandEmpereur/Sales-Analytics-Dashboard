export type IntegrationType = 'payment' | 'analytics' | 'communication' | 'crm' | 'marketing' | 'other';
export type IntegrationStatus = 'active' | 'inactive' | 'pending' | 'error';

export interface Integration {
    id: string;
    name: string;
    description: string;
    type: IntegrationType;
    status: IntegrationStatus;
    logo: string;
    isEnabled: boolean;
    lastSync?: string;
    features: string[];
    pricing?: {
        type: 'free' | 'paid';
        price?: number;
        period?: 'monthly' | 'yearly';
    };
    settings?: {
        apiKey?: string;
        webhook?: string;
        endpoint?: string;
    };
    stats?: {
        requests: number;
        errors: number;
        uptime: number;
    };
}

export const mockIntegrations: Integration[] = [
    {
        id: "int_stripe",
        name: "Stripe",
        description: "Plateforme de paiement en ligne sécurisée",
        type: "payment",
        status: "active",
        logo: "/integrations/stripe.svg",
        isEnabled: true,
        lastSync: "2024-03-15T10:30:00Z",
        features: [
            "Paiements en ligne",
            "Abonnements récurrents",
            "Gestion des remboursements",
            "Rapports détaillés"
        ],
        pricing: {
            type: "paid",
            price: 25,
            period: "monthly"
        },
        stats: {
            requests: 1250,
            errors: 2,
            uptime: 99.99
        }
    },
    {
        id: "int_google",
        name: "Google Analytics",
        description: "Analyse du trafic et du comportement utilisateur",
        type: "analytics",
        status: "active",
        logo: "/integrations/google-analytics.svg",
        isEnabled: true,
        lastSync: "2024-03-15T12:00:00Z",
        features: [
            "Suivi en temps réel",
            "Rapports personnalisés",
            "Analyse du comportement",
            "Objectifs de conversion"
        ],
        pricing: {
            type: "free"
        },
        stats: {
            requests: 5000,
            errors: 0,
            uptime: 100
        }
    },
    {
        id: "int_slack",
        name: "Slack",
        description: "Communication et notifications en temps réel",
        type: "communication",
        status: "active",
        logo: "/integrations/slack.svg",
        isEnabled: true,
        features: [
            "Notifications automatiques",
            "Commandes personnalisées",
            "Intégration des alertes",
            "Rapports quotidiens"
        ],
        pricing: {
            type: "paid",
            price: 15,
            period: "monthly"
        }
    },
    {
        id: "int_hubspot",
        name: "HubSpot",
        description: "Gestion de la relation client et marketing",
        type: "crm",
        status: "pending",
        logo: "/integrations/hubspot.svg",
        isEnabled: false,
        features: [
            "Gestion des contacts",
            "Automatisation marketing",
            "Suivi des leads",
            "Rapports CRM"
        ],
        pricing: {
            type: "paid",
            price: 45,
            period: "monthly"
        }
    }
];

// Fonctions utilitaires
export const getIntegrationsByType = (type: IntegrationType): Integration[] => {
    return mockIntegrations.filter(integration => integration.type === type);
};

export const getActiveIntegrations = (): Integration[] => {
    return mockIntegrations.filter(integration => integration.status === 'active' && integration.isEnabled);
};

export const getIntegrationById = (id: string): Integration | undefined => {
    return mockIntegrations.find(integration => integration.id === id);
};

export const getIntegrationsStats = () => {
    return {
        total: mockIntegrations.length,
        active: mockIntegrations.filter(i => i.status === 'active').length,
        error: mockIntegrations.filter(i => i.status === 'error').length,
        totalRequests: mockIntegrations.reduce((sum, i) => sum + (i.stats?.requests || 0), 0)
    };
}; 