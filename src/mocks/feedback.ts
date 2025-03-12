export type FeedbackStatus = 'new' | 'in-progress' | 'completed' | 'planned';
export type FeedbackType = 'bug' | 'feature' | 'improvement' | 'other';
export type FeedbackPriority = 'low' | 'medium' | 'high';

export interface FeedbackComment {
    id: string;
    feedbackId: string;
    userId: string;
    content: string;
    createdAt: string;
}

export interface Feedback {
    id: string;
    title: string;
    description: string;
    type: FeedbackType;
    status: FeedbackStatus;
    priority: FeedbackPriority;
    votes: number;
    authorId: string;
    createdAt: string;
    updatedAt: string;
    comments: FeedbackComment[];
    tags: string[];
    attachments?: {
        name: string;
        url: string;
        type: string;
    }[];
}

export const mockFeedbacks: Feedback[] = [
    {
        id: "fb_001",
        title: "Ajouter un mode sombre",
        description: "Il serait utile d'avoir un mode sombre pour réduire la fatigue oculaire.",
        type: "feature",
        status: "planned",
        priority: "medium",
        votes: 42,
        authorId: "usr_001",
        createdAt: "2024-03-15T10:30:00",
        updatedAt: "2024-03-15T10:30:00",
        comments: [
            {
                id: "com_001",
                feedbackId: "fb_001",
                userId: "usr_002",
                content: "Excellente idée ! Cela améliorerait vraiment l'expérience utilisateur.",
                createdAt: "2024-03-15T11:00:00"
            }
        ],
        tags: ["UI", "UX", "Accessibilité"]
    },
    // ... autres feedbacks
];

// Fonctions utilitaires
export const getFeedbacksByStatus = (status: FeedbackStatus): Feedback[] => {
    return mockFeedbacks.filter(feedback => feedback.status === status);
};

export const getFeedbacksByType = (type: FeedbackType): Feedback[] => {
    return mockFeedbacks.filter(feedback => feedback.type === type);
};

export const getFeedbacksByPriority = (priority: FeedbackPriority): Feedback[] => {
    return mockFeedbacks.filter(feedback => feedback.priority === priority);
};

export const getFeedbackStats = () => {
    return {
        total: mockFeedbacks.length,
        completed: mockFeedbacks.filter(f => f.status === 'completed').length,
        inProgress: mockFeedbacks.filter(f => f.status === 'in-progress').length,
        planned: mockFeedbacks.filter(f => f.status === 'planned').length,
        totalVotes: mockFeedbacks.reduce((sum, f) => sum + f.votes, 0),
        totalComments: mockFeedbacks.reduce((sum, f) => sum + f.comments.length, 0)
    };
};

export const searchFeedbacks = (query: string): Feedback[] => {
    const searchTerm = query.toLowerCase();
    return mockFeedbacks.filter(feedback =>
        feedback.title.toLowerCase().includes(searchTerm) ||
        feedback.description.toLowerCase().includes(searchTerm) ||
        feedback.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
}; 