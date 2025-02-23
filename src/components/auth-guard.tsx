"use client"

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// État global simplifié
let isAuthenticated = true; // Pour la démo, toujours authentifié

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    if (!isAuthenticated && pathname !== '/auth/login') {
        return <Link href="/auth/login" />;
    }

    return <>{children}</>;
} 