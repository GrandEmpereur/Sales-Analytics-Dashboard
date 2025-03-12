import { User, UserWithoutPassword, mockUsers } from "@/mocks/users";

export interface LoginCredentials {
    email: string;
    password: string;
}

// Simuler une base de données de mots de passe (en vrai projet, ils seraient hashés)
const mockPasswords: Record<string, string> = {
    "admin@company.com": "admin123",
    "sophie.martin@company.com": "rh123",
    "thomas.bernard@company.com": "manager123",
    "julie.petit@company.com": "dev123",
    "marc.leroy@company.com": "user123"
};

export async function authenticateUser(credentials: LoginCredentials): Promise<UserWithoutPassword | null> {
    // Simuler un délai d'authentification
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = mockUsers.find(user =>
        user.email.toLowerCase() === credentials.email.toLowerCase() &&
        user.password === credentials.password
    );

    if (!user) {
        return null;
    }

    // On retourne l'utilisateur sans son mot de passe
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}

// Fonction utilitaire pour obtenir les identifiants de test
export function getTestCredentials(): Array<{ email: string; password: string; role: string }> {
    return Object.entries(mockPasswords).map(([email, password]) => ({
        email,
        password,
        role: mockUsers.find(u => u.email === email)?.role || 'unknown'
    }));
} 