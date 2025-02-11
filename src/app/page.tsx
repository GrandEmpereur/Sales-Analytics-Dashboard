import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex h-screen bg-primary">
      {/* Section gauche - Formulaire */}
      <div className="w-1/2 p-8 flex items-center">
        <Card className="w-full max-w-md mx-auto border-0 bg-transparent shadow-none">
          <CardHeader className="space-y-4 p-0">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image 
                  src="/icon.svg" 
                  alt="Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-semibold text-secondary">Sales Analytics Dashboard</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-white">Welcome to my Portfolio</h1>
              <p className="text-muted-foreground">
                This is a demonstration of my frontend development skills using Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 p-0 pt-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="identifier" className="text-muted-foreground">
                  Email professionnel
                </Label>
                <Input
                  id="identifier"
                  type="email"
                  placeholder="votre@email.com"
                  className="bg-white/10 border-0 text-white placeholder:text-muted-foreground focus-visible:ring-secondary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-muted-foreground">
                  Mot de passe
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-white/10 border-0 text-white placeholder:text-muted-foreground focus-visible:ring-secondary"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                Découvrir le Dashboard
              </Button>

              <Button 
                variant="outline" 
                className="w-full border-white/20 text-muted-foreground hover:bg-white/10 hover:text-white"
              >
                Voir le Code Source
              </Button>
            </div>
          </CardContent>

          <CardFooter className="p-0 mt-8">
            <p className="text-sm text-muted-foreground">
              Projet développé par Patrick Bartosik - © 2024
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* Section droite - Image */}
      <div className="w-1/2 relative">
        <Image
          src="/dashboard-preview.jpg"
          alt="Aperçu du dashboard analytics"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
