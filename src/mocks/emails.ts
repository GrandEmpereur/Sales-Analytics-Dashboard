import { Customer, mockCustomers } from "./customers";

export type EmailFolder = 'inbox' | 'sent' | 'drafts' | 'archive' | 'trash' | 'spam';

export interface Email {
    id: string;
    from: {
        name: string;
        email: string;
        avatar?: string;
    };
    to: {
        name: string;
        email: string;
    }[];
    subject: string;
    content: string;
    attachments?: {
        name: string;
        size: string;
        type: string;
        url: string;
    }[];
    isStarred: boolean;
    isRead: boolean;
    labels?: string[];
    folder: EmailFolder;
    date: string;
}

export const mockEmails: Email[] = [
    {
        id: "email_001",
        from: {
            name: "Jean Dupont",
            email: "jean.dupont@example.com",
            avatar: mockCustomers[0].avatar
        },
        to: [{
            name: "Support",
            email: "support@company.com"
        }],
        subject: "Question sur la réservation",
        content: `Bonjour,

Je vous contacte au sujet de ma réservation récente (REF: ORD-001). J'aimerais savoir s'il est possible de modifier la date de début de location.

Cordialement,
Jean Dupont`,
        isStarred: true,
        isRead: false,
        folder: 'inbox',
        date: "2024-03-15T10:30:00Z",
        labels: ['client', 'urgent']
    },
    // ... Ajouter plus d'emails
];

export const folders = [
    { icon: 'Inbox', label: "Boîte de réception", count: 12, value: "inbox" },
    { icon: 'Send', label: "Envoyés", value: "sent" },
    { icon: 'File', label: "Brouillons", count: 2, value: "drafts" },
    { icon: 'Archive', label: "Archives", value: "archive" },
    { icon: 'AlertCircle', label: "Spam", count: 3, value: "spam" },
    { icon: 'Trash2', label: "Corbeille", value: "trash" }
];

// Fonctions utilitaires
export const getEmailsByFolder = (folder: EmailFolder): Email[] => {
    return mockEmails.filter(email => email.folder === folder);
};

export const getUnreadCount = (folder: EmailFolder): number => {
    return mockEmails.filter(email => email.folder === folder && !email.isRead).length;
};

export const searchEmails = (query: string): Email[] => {
    const searchTerm = query.toLowerCase();
    return mockEmails.filter(email =>
        email.subject.toLowerCase().includes(searchTerm) ||
        email.content.toLowerCase().includes(searchTerm) ||
        email.from.name.toLowerCase().includes(searchTerm) ||
        email.from.email.toLowerCase().includes(searchTerm)
    );
}; 