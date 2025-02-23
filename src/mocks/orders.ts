import { mockProducts, Product } from "./products";

export type OrderStatus = 'Pending' | 'Active' | 'Completed' | 'Cancelled';
export type PaymentStatus = 'Paid' | 'Pending' | 'Failed' | 'Refunded';

export interface Order {
    id: string;
    productId: string;
    product?: Product;
    userId: string;
    customerName: string;
    customerEmail: string;
    orderNumber: string;
    status: OrderStatus;
    paymentStatus: PaymentStatus;
    startDate: string;
    endDate: string;
    totalAmount: number;
    monthlyPayment: number;
    duration: number; // en mois
    createdAt: string;
    updatedAt: string;
}

// Fonction helper pour générer un numéro de commande
const generateOrderNumber = () => {
    return `ORD-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
};

export const mockOrders: Order[] = [
    {
        id: "ord_001",
        productId: "car_001",
        userId: "usr_001",
        customerName: "Jean Dupont",
        customerEmail: "jean.dupont@email.com",
        orderNumber: "ORD-X7Y9Z2",
        status: "Active",
        paymentStatus: "Paid",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        totalAmount: 10799.88,
        monthlyPayment: 899.99,
        duration: 12,
        createdAt: "2024-01-01",
        updatedAt: "2024-03-15"
    },
    {
        id: "ord_002",
        productId: "car_013",
        userId: "usr_002",
        customerName: "Marie Martin",
        customerEmail: "marie.martin@email.com",
        orderNumber: "ORD-K8L9M1",
        status: "Active",
        paymentStatus: "Paid",
        startDate: "2024-02-01",
        endDate: "2025-01-31",
        totalAmount: 22799.88,
        monthlyPayment: 1899.99,
        duration: 12,
        createdAt: "2024-02-01",
        updatedAt: "2024-03-15"
    },
    {
        id: "ord_003",
        productId: "car_014",
        userId: "usr_003",
        customerName: "Pierre Bernard",
        customerEmail: "pierre.bernard@email.com",
        orderNumber: "ORD-N5P7Q8",
        status: "Pending",
        paymentStatus: "Pending",
        startDate: "2024-04-01",
        endDate: "2024-09-30",
        totalAmount: 7799.94,
        monthlyPayment: 1299.99,
        duration: 6,
        createdAt: "2024-03-15",
        updatedAt: "2024-03-15"
    },
    {
        id: "ord_004",
        productId: "car_018",
        userId: "usr_004",
        customerName: "Sophie Petit",
        customerEmail: "sophie.petit@email.com",
        orderNumber: "ORD-R2S4T6",
        status: "Active",
        paymentStatus: "Paid",
        startDate: "2024-01-15",
        endDate: "2024-07-14",
        totalAmount: 6599.94,
        monthlyPayment: 1099.99,
        duration: 6,
        createdAt: "2024-01-15",
        updatedAt: "2024-03-15"
    },
    {
        id: "ord_005",
        productId: "car_019",
        userId: "usr_005",
        customerName: "Lucas Dubois",
        customerEmail: "lucas.dubois@email.com",
        orderNumber: "ORD-U9V1W3",
        status: "Cancelled",
        paymentStatus: "Refunded",
        startDate: "2024-02-01",
        endDate: "2024-07-31",
        totalAmount: 7199.94,
        monthlyPayment: 1199.99,
        duration: 6,
        createdAt: "2024-02-01",
        updatedAt: "2024-02-15"
    },
    {
        id: "ord_006",
        productId: "car_040",
        userId: "usr_006",
        customerName: "Emma Leroy",
        customerEmail: "emma.leroy@email.com",
        orderNumber: "ORD-X4Y6Z8",
        status: "Active",
        paymentStatus: "Paid",
        startDate: "2024-03-01",
        endDate: "2025-02-28",
        totalAmount: 8998.88,
        monthlyPayment: 749.99,
        duration: 12,
        createdAt: "2024-03-01",
        updatedAt: "2024-03-15"
    },
    {
        id: "ord_007",
        productId: "car_015",
        userId: "usr_007",
        customerName: "Thomas Moreau",
        customerEmail: "thomas.moreau@email.com",
        orderNumber: "ORD-A2B4C6",
        status: "Active",
        paymentStatus: "Paid",
        startDate: "2024-02-15",
        endDate: "2025-02-14",
        totalAmount: 19199.88,
        monthlyPayment: 1599.99,
        duration: 12,
        createdAt: "2024-02-15",
        updatedAt: "2024-03-15"
    },
    {
        id: "ord_008",
        productId: "car_016",
        userId: "usr_008",
        customerName: "Julie Roux",
        customerEmail: "julie.roux@email.com",
        orderNumber: "ORD-D5E7F9",
        status: "Completed",
        paymentStatus: "Paid",
        startDate: "2023-09-01",
        endDate: "2024-02-29",
        totalAmount: 5999.94,
        monthlyPayment: 999.99,
        duration: 6,
        createdAt: "2023-09-01",
        updatedAt: "2024-03-01"
    },
    {
        id: "ord_009",
        productId: "car_048",
        userId: "usr_009",
        customerName: "Antoine Simon",
        customerEmail: "antoine.simon@email.com",
        orderNumber: "ORD-G1H3I5",
        status: "Active",
        paymentStatus: "Paid",
        startDate: "2024-03-01",
        endDate: "2024-08-31",
        totalAmount: 5999.94,
        monthlyPayment: 999.99,
        duration: 6,
        createdAt: "2024-03-01",
        updatedAt: "2024-03-15"
    },
    {
        id: "ord_010",
        productId: "car_020",
        userId: "usr_010",
        customerName: "Camille Laurent",
        customerEmail: "camille.laurent@email.com",
        orderNumber: "ORD-J4K6L8",
        status: "Pending",
        paymentStatus: "Pending",
        startDate: "2024-04-01",
        endDate: "2024-09-30",
        totalAmount: 4799.94,
        monthlyPayment: 799.99,
        duration: 6,
        createdAt: "2024-03-15",
        updatedAt: "2024-03-15"
    }
];

// Enrichir les commandes avec les informations des produits
export const getEnrichedOrders = (): (Order & { product: Product })[] => {
    return mockOrders.map(order => ({
        ...order,
        product: mockProducts.find(p => p.id === order.productId)!
    }));
};

// Fonctions utilitaires
export const getOrdersByStatus = (status: OrderStatus): Order[] => {
    return mockOrders.filter(order => order.status === status);
};

export const getOrdersByUserId = (userId: string): Order[] => {
    return mockOrders.filter(order => order.userId === userId);
};

export const getOrderById = (id: string): Order | undefined => {
    return mockOrders.find(order => order.id === id);
};

export const getActiveOrders = (): Order[] => {
    return mockOrders.filter(order => order.status === 'Active');
};

export const getPendingOrders = (): Order[] => {
    return mockOrders.filter(order => order.status === 'Pending');
};

export const getOrdersByDateRange = (startDate: string, endDate: string): Order[] => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return mockOrders.filter(order => {
        const orderDate = new Date(order.startDate);
        return orderDate >= start && orderDate <= end;
    });
}; 