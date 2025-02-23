"use client"

import { useSession } from "@/contexts/session-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const { user, isLoading } = useSession();
    const router = useRouter();
    const [hasShownToast, setHasShownToast] = useState(false);

    useEffect(() => {
        if (!isLoading && !user && !hasShownToast) {
            toast.error("Accès refusé", {
                description: "Veuillez vous connecter pour accéder à cette page",
            });
            setHasShownToast(true);
            router.push("/");
        }
    }, [user, isLoading, router, hasShownToast]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                    <p className="text-muted-foreground">Chargement...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return <>{children}</>;
} 