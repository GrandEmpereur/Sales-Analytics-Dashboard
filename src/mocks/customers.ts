import { Order, mockOrders } from "./orders";

export type CustomerStatus = 'Active' | 'Inactive' | 'Blocked';
export type CustomerTier = 'Bronze' | 'Silver' | 'Gold' | 'Platinum';

export interface Customer {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatar: string;
    status: CustomerStatus;
    tier: CustomerTier;
    totalOrders: number;
    totalSpent: number;
    address: {
        street: string;
        city: string;
        zipCode: string;
        country: string;
    };
    company?: {
        name: string;
        position: string;
    };
    createdAt: string;
    updatedAt: string;
}

export const mockCustomers: Customer[] = [
    {
        id: "usr_001",
        firstName: "Jean",
        lastName: "Dupont",
        email: "jean.dupont@email.com",
        phone: "+33 6 12 34 56 78",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,1",
        status: "Active",
        tier: "Gold",
        totalOrders: 5,
        totalSpent: 15799.88,
        address: {
            street: "123 Rue de Paris",
            city: "Paris",
            zipCode: "75001",
            country: "France"
        },
        company: {
            name: "Tech Solutions",
            position: "Directeur"
        },
        createdAt: "2023-01-15",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_002",
        firstName: "Marie",
        lastName: "Martin",
        email: "marie.martin@email.com",
        phone: "+33 6 23 45 67 89",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,1",
        status: "Active",
        tier: "Platinum",
        totalOrders: 8,
        totalSpent: 32799.88,
        address: {
            street: "45 Avenue des Champs-Élysées",
            city: "Paris",
            zipCode: "75008",
            country: "France"
        },
        company: {
            name: "Marketing Pro",
            position: "Consultante"
        },
        createdAt: "2023-02-20",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_003",
        firstName: "Pierre",
        lastName: "Bernard",
        email: "pierre.bernard@email.com",
        phone: "+33 6 34 56 78 90",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,2",
        status: "Active",
        tier: "Silver",
        totalOrders: 3,
        totalSpent: 8799.94,
        address: {
            street: "78 Rue de Lyon",
            city: "Lyon",
            zipCode: "69002",
            country: "France"
        },
        createdAt: "2023-03-10",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_004",
        firstName: "Sophie",
        lastName: "Petit",
        email: "sophie.petit@email.com",
        phone: "+33 6 45 67 89 01",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,2",
        status: "Active",
        tier: "Bronze",
        totalOrders: 2,
        totalSpent: 6599.94,
        address: {
            street: "12 Rue du Commerce",
            city: "Bordeaux",
            zipCode: "33000",
            country: "France"
        },
        createdAt: "2023-04-05",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_005",
        firstName: "Lucas",
        lastName: "Dubois",
        email: "lucas.dubois@email.com",
        phone: "+33 6 56 78 90 12",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,3",
        status: "Inactive",
        tier: "Bronze",
        totalOrders: 1,
        totalSpent: 7199.94,
        address: {
            street: "34 Avenue Jean Jaurès",
            city: "Toulouse",
            zipCode: "31000",
            country: "France"
        },
        company: {
            name: "Auto Plus",
            position: "Mécanicien"
        },
        createdAt: "2023-05-20",
        updatedAt: "2024-02-15"
    }
];

// Fonctions utilitaires
export const getCustomerById = (id: string): Customer | undefined => {
    return mockCustomers.find(customer => customer.id === id);
};

export const getCustomersByStatus = (status: CustomerStatus): Customer[] => {
    return mockCustomers.filter(customer => customer.status === status);
};

export const getCustomersByTier = (tier: CustomerTier): Customer[] => {
    return mockCustomers.filter(customer => customer.tier === tier);
};

export const getCustomerOrders = (customerId: string): Order[] => {
    return mockOrders.filter(order => order.userId === customerId);
};

export const getTopCustomers = (limit: number = 5): Customer[] => {
    return [...mockCustomers]
        .sort((a, b) => b.totalSpent - a.totalSpent)
        .slice(0, limit);
};

export const searchCustomers = (query: string): Customer[] => {
    const searchTerm = query.toLowerCase();
    return mockCustomers.filter(customer =>
        customer.firstName.toLowerCase().includes(searchTerm) ||
        customer.lastName.toLowerCase().includes(searchTerm) ||
        customer.email.toLowerCase().includes(searchTerm) ||
        customer.company?.name.toLowerCase().includes(searchTerm)
    );
};

export const getCustomerMetrics = (customerId: string) => {
    const customer = getCustomerById(customerId);
    const orders = getCustomerOrders(customerId);

    return {
        totalOrders: orders.length,
        activeOrders: orders.filter(order => order.status === 'Active').length,
        totalSpent: orders.reduce((sum, order) => sum + order.totalAmount, 0),
        averageOrderValue: orders.length > 0
            ? orders.reduce((sum, order) => sum + order.totalAmount, 0) / orders.length
            : 0
    };
}; 