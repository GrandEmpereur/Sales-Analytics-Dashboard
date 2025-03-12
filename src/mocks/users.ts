export type Role = 'admin' | 'hr' | 'user' | 'manager' | 'developer' | 'designer' | 'sales' | 'support';
export type Plan = 'free' | 'pro' | 'business';
export type Department = 'Engineering' | 'Design' | 'Marketing' | 'Sales' | 'HR' | 'Support' | 'Management' | 'Executive';

export interface Team {
    id: string;
    name: string;
    logo?: string;
    plan: Plan;
}

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: Role;
    avatar: string;
    teamId: string;
    department: Department;
    joinedAt: string;
    isActive: boolean;
    password: string;
}

// Mock des équipes/entreprises
export const mockTeams: Team[] = [
    {
        id: "team_001",
        name: "Vesetly Inc.",
        plan: "business"
    },
    {
        id: "team_002",
        name: "TechFlow Solutions",
        plan: "business"
    },
    {
        id: "team_003",
        name: "DesignHub Creative",
        plan: "pro"
    },
    {
        id: "team_004",
        name: "Marketing Masters",
        plan: "pro"
    },
    {
        id: "team_005",
        name: "StartupBoost",
        plan: "free"
    }
];

export const mockUsers: User[] = [
    // Vesetly Inc. (Business Plan)
    {
        id: "usr_001",
        email: "alexandre.dubois@vesetly.com",
        firstName: "Alexandre",
        lastName: "Dubois",
        role: "admin",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        teamId: "team_001",
        department: "Executive",
        joinedAt: "2022-01-01",
        isActive: true,
        password: "Admin@123456"
    },
    {
        id: "usr_002",
        email: "julie.petit@vesetly.com",
        firstName: "Julie",
        lastName: "Petit",
        role: "developer",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        teamId: "team_001",
        department: "Engineering",
        joinedAt: "2023-01-10",
        isActive: true,
        password: "Dev@Julie2024!"
    },
    {
        id: "usr_003",
        email: "sophie.martin@vesetly.com",
        firstName: "Sophie",
        lastName: "Martin",
        role: "hr",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        teamId: "team_001",
        department: "HR",
        joinedAt: "2023-02-15",
        isActive: true,
        password: "HR@Sophie2024!"
    },

    // TechFlow Solutions (Business Plan)
    {
        id: "usr_004",
        email: "thomas.martin@techflow.com",
        firstName: "Thomas",
        lastName: "Martin",
        role: "manager",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        teamId: "team_002",
        department: "Engineering",
        joinedAt: "2023-02-15",
        isActive: true,
        password: "Manager@Thomas2024!"
    },
    {
        id: "usr_005",
        email: "lucas.dubois@techflow.com",
        firstName: "Lucas",
        lastName: "Dubois",
        role: "developer",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        teamId: "team_002",
        department: "Engineering",
        joinedAt: "2023-03-01",
        isActive: true,
        password: "Dev@Lucas2024!"
    },

    // DesignHub Creative (Pro Plan)
    {
        id: "usr_006",
        email: "emma.leroy@designhub.com",
        firstName: "Emma",
        lastName: "Leroy",
        role: "designer",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        teamId: "team_003",
        department: "Design",
        joinedAt: "2023-03-20",
        isActive: true,
        password: "Design@Emma2024!"
    },

    // Marketing Masters (Pro Plan)
    {
        id: "usr_007",
        email: "marc.moreau@marketing-masters.com",
        firstName: "Marc",
        lastName: "Moreau",
        role: "sales",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        teamId: "team_004",
        department: "Sales",
        joinedAt: "2023-04-01",
        isActive: true,
        password: "Sales@Marc2024!"
    },
    {
        id: "usr_008",
        email: "claire.dupont@marketing-masters.com",
        firstName: "Claire",
        lastName: "Dupont",
        role: "manager",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        teamId: "team_004",
        department: "Marketing",
        joinedAt: "2023-04-15",
        isActive: true,
        password: "Marketing@Claire2024!"
    },

    // StartupBoost (Free Plan)
    {
        id: "usr_009",
        email: "sarah.durand@startupboost.com",
        firstName: "Sarah",
        lastName: "Durand",
        role: "user",
        avatar: "https://randomuser.me/api/portraits/women/9.jpg",
        teamId: "team_005",
        department: "Support",
        joinedAt: "2023-05-15",
        isActive: true,
        password: "User@Sarah2024!"
    },
    {
        id: "usr_010",
        email: "paul.vincent@startupboost.com",
        firstName: "Paul",
        lastName: "Vincent",
        role: "developer",
        avatar: "https://randomuser.me/api/portraits/men/10.jpg",
        teamId: "team_005",
        department: "Engineering",
        joinedAt: "2023-06-01",
        isActive: true,
        password: "Dev@Paul2024!"
    }
];

// Fonction utilitaire pour récupérer une équipe par son ID
export const getTeamById = (teamId: string): Team | undefined => {
    return mockTeams.find(team => team.id === teamId);
};

// Fonction utilitaire pour récupérer les utilisateurs d'une équipe
export const getUsersByTeamId = (teamId: string): User[] => {
    return mockUsers.filter(user => user.teamId === teamId);
};

// Type pour la complexité du mot de passe
export type PasswordRequirements = {
    minLength: number;
    hasUpperCase: boolean;
    hasLowerCase: boolean;
    hasNumber: boolean;
    hasSpecialChar: boolean;
};

// Fonction pour vérifier la complexité du mot de passe
export const checkPasswordStrength = (password: string): boolean => {
    const requirements: PasswordRequirements = {
        minLength: 8,
        hasUpperCase: /[A-Z]/.test(password),
        hasLowerCase: /[a-z]/.test(password),
        hasNumber: /[0-9]/.test(password),
        hasSpecialChar: /[!@#$%^&*]/.test(password)
    };

    return Object.values(requirements).every(Boolean);
};

// Type pour les informations d'utilisateur sans mot de passe
export type UserWithoutPassword = Omit<User, 'password'>;

// Fonction utilitaire pour récupérer un utilisateur par son email
export const getUserByEmail = (email: string): UserWithoutPassword | undefined => {
    const user = mockUsers.find(user => user.email === email);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    return undefined;
};

// Fonction utilitaire pour récupérer un utilisateur par son rôle
export const getUsersByRole = (role: Role): UserWithoutPassword[] => {
    return mockUsers
        .filter(user => user.role === role)
        .map(({ password, ...user }) => user);
};

// Fonction utilitaire pour vérifier si un utilisateur est admin
export const isAdmin = (user: UserWithoutPassword): boolean => {
    return user.role === 'admin';
};

// Fonction utilitaire pour vérifier si un utilisateur est RH
export const isHR = (user: UserWithoutPassword): boolean => {
    return user.role === 'hr';
};

// Fonction utilitaire pour récupérer les utilisateurs par département
export const getUsersByDepartment = (department: Department): UserWithoutPassword[] => {
    return mockUsers
        .filter(user => user.department === department)
        .map(({ password, ...user }) => user);
}; 