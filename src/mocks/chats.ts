import { Customer, mockCustomers } from "./customers";

export type MessageType = 'text' | 'image' | 'file' | 'system';
export type ChatStatus = 'active' | 'resolved' | 'pending' | 'archived' | 'closed';

export interface Message {
    id: string;
    chatId: string;
    senderId: string;
    senderType: 'user' | 'support' | 'system';
    type: MessageType;
    content: string;
    attachments?: {
        url: string;
        type: string;
        name: string;
        size?: number;
    }[];
    createdAt: string;
    readAt?: string;
}

export interface Chat {
    id: string;
    customerId: string;
    customer?: Customer;
    subject: string;
    status: ChatStatus;
    unreadCount: number;
    lastMessage?: Message;
    assignedTo?: {
        id: string;
        name: string;
        avatar: string;
    };
    priority: 'low' | 'medium' | 'high';
    tags: string[];
    createdAt: string;
    updatedAt: string;
}

export const mockChats: Chat[] = [
    {
        id: "chat_001",
        customerId: "usr_001",
        subject: "Problème de paiement",
        status: "active",
        unreadCount: 2,
        priority: "high",
        tags: ["paiement", "urgent"],
        assignedTo: {
            id: "support_001",
            name: "Sarah Support",
            avatar: "https://source.unsplash.com/random/200x200/?portrait,woman"
        },
        createdAt: "2024-03-15T10:30:00Z",
        updatedAt: "2024-03-15T14:45:00Z"
    },
    {
        id: "chat_002",
        customerId: "usr_002",
        subject: "Question sur la location",
        status: "pending",
        unreadCount: 0,
        priority: "medium",
        tags: ["location", "information"],
        createdAt: "2024-03-14T15:20:00Z",
        updatedAt: "2024-03-14T16:30:00Z"
    },
    {
        id: "chat_003",
        customerId: "usr_003",
        subject: "Demande de prolongation",
        status: "active",
        unreadCount: 1,
        priority: "low",
        tags: ["prolongation"],
        assignedTo: {
            id: "support_002",
            name: "Marc Support",
            avatar: "https://source.unsplash.com/random/200x200/?portrait,man"
        },
        createdAt: "2024-03-13T09:15:00Z",
        updatedAt: "2024-03-15T11:20:00Z"
    },
    {
        id: "chat_004",
        customerId: "usr_004",
        subject: "Annulation de réservation",
        status: "closed",
        unreadCount: 0,
        priority: "high",
        tags: ["annulation", "urgent"],
        assignedTo: {
            id: "support_003",
            name: "Emma Support",
            avatar: "https://source.unsplash.com/random/200x200/?portrait,woman"
        },
        createdAt: "2024-03-12T08:45:00Z",
        updatedAt: "2024-03-12T09:30:00Z"
    },
    {
        id: "chat_005",
        customerId: "usr_005",
        subject: "Problème technique sur le site",
        status: "active",
        unreadCount: 3,
        priority: "medium",
        tags: ["technique", "site"],
        assignedTo: {
            id: "support_004",
            name: "Lucas Support",
            avatar: "https://source.unsplash.com/random/200x200/?portrait,man"
        },
        createdAt: "2024-03-11T11:00:00Z",
        updatedAt: "2024-03-11T12:15:00Z"
    }
];


export const mockMessages: Message[] = [
    {
        id: "msg_001",
        chatId: "chat_001",
        senderId: "usr_001",
        senderType: "user",
        type: "text",
        content: "Bonjour, j'ai un problème avec mon dernier paiement",
        createdAt: "2024-03-15T10:30:00Z",
        readAt: "2024-03-15T10:31:00Z"
    },
    {
        id: "msg_002",
        chatId: "chat_001",
        senderId: "support_001",
        senderType: "support",
        type: "text",
        content: "Bonjour, je suis là pour vous aider. Pouvez-vous me donner plus de détails sur le problème rencontré ?",
        createdAt: "2024-03-15T10:32:00Z",
        readAt: "2024-03-15T10:33:00Z"
    },
    {
        id: "msg_003",
        chatId: "chat_001",
        senderId: "usr_001",
        senderType: "user",
        type: "text",
        content: "Le paiement a été débité deux fois de mon compte",
        createdAt: "2024-03-15T10:34:00Z",
        readAt: "2024-03-15T10:35:00Z"
    },
    {
        id: "msg_004",
        chatId: "chat_001",
        senderId: "usr_001",
        senderType: "user",
        type: "image",
        content: "Capture d'écran du relevé bancaire",
        attachments: [{
            url: "https://source.unsplash.com/random/800x600/?screenshot",
            type: "image/png",
            name: "releve_bancaire.png",
            size: 1024576
        }],
        createdAt: "2024-03-15T10:36:00Z",
        readAt: "2024-03-15T10:37:00Z"
    },
    {
        id: "msg_005",
        chatId: "chat_002",
        senderId: "usr_002",
        senderType: "user",
        type: "text",
        content: "Bonjour, je souhaiterais des informations sur la prolongation de location",
        createdAt: "2024-03-14T15:20:00Z"
    },
    {
        id: "msg_006",
        chatId: "chat_002",
        senderId: "support_002",
        senderType: "support",
        type: "text",
        content: "Bien sûr, pouvez-vous préciser la durée supplémentaire souhaitée ?",
        createdAt: "2024-03-14T15:22:00Z",
        readAt: "2024-03-14T15:23:00Z"
    },
    {
        id: "msg_007",
        chatId: "chat_002",
        senderId: "usr_002",
        senderType: "user",
        type: "text",
        content: "Je voudrais prolonger de 3 jours.",
        createdAt: "2024-03-14T15:24:00Z",
        readAt: "2024-03-14T15:25:00Z"
    },
    {
        id: "msg_008",
        chatId: "chat_003",
        senderId: "usr_003",
        senderType: "user",
        type: "text",
        content: "Est-ce que le véhicule est disponible ce weekend ?",
        createdAt: "2024-03-13T12:00:00Z",
        readAt: "2024-03-13T12:01:00Z"
    },
    {
        id: "msg_009",
        chatId: "chat_003",
        senderId: "support_001",
        senderType: "support",
        type: "text",
        content: "Oui, il est encore disponible. Voulez-vous effectuer une réservation ?",
        createdAt: "2024-03-13T12:02:00Z",
        readAt: "2024-03-13T12:03:00Z"
    },
    {
        id: "msg_010",
        chatId: "chat_003",
        senderId: "usr_003",
        senderType: "user",
        type: "text",
        content: "Oui, merci de me confirmer la disponibilité.",
        createdAt: "2024-03-13T12:04:00Z",
        readAt: "2024-03-13T12:05:00Z"
    },
    {
        id: "msg_011",
        chatId: "chat_004",
        senderId: "usr_004",
        senderType: "user",
        type: "text",
        content: "J'ai besoin d'aide pour annuler ma réservation.",
        createdAt: "2024-03-12T09:00:00Z",
        readAt: "2024-03-12T09:01:00Z"
    },
    {
        id: "msg_012",
        chatId: "chat_004",
        senderId: "support_003",
        senderType: "support",
        type: "text",
        content: "Pouvez-vous me donner votre numéro de réservation s'il vous plaît ?",
        createdAt: "2024-03-12T09:02:00Z",
        readAt: "2024-03-12T09:03:00Z"
    },
    {
        id: "msg_013",
        chatId: "chat_004",
        senderId: "usr_004",
        senderType: "user",
        type: "text",
        content: "C'est la réservation 789456.",
        createdAt: "2024-03-12T09:04:00Z",
        readAt: "2024-03-12T09:05:00Z"
    },
    {
        id: "msg_014",
        chatId: "chat_005",
        senderId: "usr_005",
        senderType: "user",
        type: "text",
        content: "Salut, je voudrais modifier les dates de ma location.",
        createdAt: "2024-03-11T16:00:00Z",
        readAt: "2024-03-11T16:01:00Z"
    },
    {
        id: "msg_015",
        chatId: "chat_005",
        senderId: "support_004",
        senderType: "support",
        type: "text",
        content: "D'accord, quelles sont les nouvelles dates que vous souhaitez ?",
        createdAt: "2024-03-11T16:02:00Z",
        readAt: "2024-03-11T16:03:00Z"
    },
    {
        id: "msg_016",
        chatId: "chat_005",
        senderId: "usr_005",
        senderType: "user",
        type: "text",
        content: "Du 20 au 25 avril, s'il vous plaît.",
        createdAt: "2024-03-11T16:04:00Z",
        readAt: "2024-03-11T16:05:00Z"
    },
    {
        id: "msg_017",
        chatId: "chat_006",
        senderId: "usr_006",
        senderType: "user",
        type: "text",
        content: "Est-ce que je peux récupérer le véhicule à un autre endroit ?",
        createdAt: "2024-03-10T14:30:00Z",
        readAt: "2024-03-10T14:31:00Z"
    },
    {
        id: "msg_018",
        chatId: "chat_006",
        senderId: "support_005",
        senderType: "support",
        type: "text",
        content: "Oui, nous offrons des options de remise dans différentes villes.",
        createdAt: "2024-03-10T14:32:00Z",
        readAt: "2024-03-10T14:33:00Z"
    },
    {
        id: "msg_019",
        chatId: "chat_006",
        senderId: "usr_006",
        senderType: "user",
        type: "image",
        content: "Photo de l'endroit de récupération",
        attachments: [{
            url: "https://source.unsplash.com/random/800x600/?location",
            type: "image/jpeg",
            name: "location.jpg",
            size: 876543
        }],
        createdAt: "2024-03-10T14:34:00Z",
        readAt: "2024-03-10T14:35:00Z"
    },
    {
        id: "msg_020",
        chatId: "chat_007",
        senderId: "usr_007",
        senderType: "user",
        type: "text",
        content: "Bonjour, pouvez-vous m'aider avec ma réservation en ligne ?",
        createdAt: "2024-03-09T11:00:00Z",
        readAt: "2024-03-09T11:01:00Z"
    },
    {
        id: "msg_021",
        chatId: "chat_007",
        senderId: "support_006",
        senderType: "support",
        type: "text",
        content: "Bien sûr, quelle est la difficulté que vous rencontrez ?",
        createdAt: "2024-03-09T11:02:00Z",
        readAt: "2024-03-09T11:03:00Z"
    },
    {
        id: "msg_022",
        chatId: "chat_007",
        senderId: "usr_007",
        senderType: "user",
        type: "text",
        content: "Le site ne m'affiche pas les disponibilités pour ma date de départ.",
        createdAt: "2024-03-09T11:04:00Z",
        readAt: "2024-03-09T11:05:00Z"
    }
];


// Fonctions utilitaires
export const getEnrichedChats = (): (Chat & { customer: Customer })[] => {
    return mockChats.map(chat => ({
        ...chat,
        customer: mockCustomers.find(c => c.id === chat.customerId)!
    }));
};

export const getChatMessages = (chatId: string): Message[] => {
    return mockMessages.filter(message => message.chatId === chatId);
};

export const getChatsByStatus = (status: ChatStatus): Chat[] => {
    return mockChats.filter(chat => chat.status === status);
};

export const getUnreadChatsCount = (): number => {
    return mockChats.reduce((sum, chat) => sum + chat.unreadCount, 0);
};

export const getChatsByPriority = (priority: Chat['priority']): Chat[] => {
    return mockChats.filter(chat => chat.priority === priority);
};

export const searchChats = (query: string): Chat[] => {
    const searchTerm = query.toLowerCase();
    return mockChats.filter(chat =>
        chat.subject.toLowerCase().includes(searchTerm) ||
        chat.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
};

export const getLatestMessage = (chatId: string): Message | undefined => {
    return mockMessages
        .filter(message => message.chatId === chatId)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];
}; 