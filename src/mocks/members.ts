export type MemberRole = 'owner' | 'admin' | 'member' | 'guest';
export type MemberStatus = 'active' | 'inactive' | 'pending';

export interface TeamMember {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    role: MemberRole;
    status: MemberStatus;
    department: string;
    joinedAt: string;
    lastActive: string;
    permissions: string[];
    teamId: string;
}

export const mockMembers: TeamMember[] = [
    {
        id: "mem_001",
        firstName: "Thomas",
        lastName: "Martin",
        email: "thomas.martin@company.com",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,1",
        role: "owner",
        status: "active",
        department: "Direction",
        joinedAt: "2023-01-01",
        lastActive: "2024-03-21T09:30:00",
        permissions: ["all"],
        teamId: "team_001"
    },
    {
        id: "mem_002",
        firstName: "Sophie",
        lastName: "Bernard",
        email: "sophie.bernard@company.com",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,1",
        role: "admin",
        status: "active",
        department: "Marketing",
        joinedAt: "2023-02-15",
        lastActive: "2024-03-21T10:15:00",
        permissions: ["view", "edit", "create"],
        teamId: "team_001"
    },
    // ... autres membres
];

// Fonctions utilitaires
export const getMembersByTeam = (teamId: string): TeamMember[] => {
    return mockMembers.filter(member => member.teamId === teamId);
};

export const getMembersByRole = (role: MemberRole): TeamMember[] => {
    return mockMembers.filter(member => member.role === role);
};

export const getMembersByDepartment = (department: string): TeamMember[] => {
    return mockMembers.filter(member => member.department === department);
};

export const searchMembers = (query: string): TeamMember[] => {
    const searchTerm = query.toLowerCase();
    return mockMembers.filter(member =>
        member.firstName.toLowerCase().includes(searchTerm) ||
        member.lastName.toLowerCase().includes(searchTerm) ||
        member.email.toLowerCase().includes(searchTerm)
    );
}; 