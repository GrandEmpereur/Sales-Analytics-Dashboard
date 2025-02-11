"use client"

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React from "react";

export default function Home() {
  const router = useRouter();
  const sourceCodeUrl = process.env.NEXT_PUBLIC_SOURCE_CODE_URL;
  const adminOTP = process.env.NEXT_PUBLIC_ADMIN_OTP;
  const [otp, setOtp] = React.useState("");

  const handleOtpComplete = (value: string) => {
    setOtp(value);
    if (value === adminOTP) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-primary">
      {/* Logo en position absolue */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10">
        <div className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px]">
          <Image 
            src="/assets/logo.svg"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Section gauche - Formulaire */}
      <div className="w-full md:w-1/2 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-[400px] px-4 md:px-8">
          <Card className="border-0 bg-transparent shadow-none">
            <CardHeader className="space-y-4 p-0 mt-16 md:mt-0">
              <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold text-white">Connexion</h1>
                <p className="text-sm md:text-base text-muted-foreground">
                  Accédez à votre tableau de bord pour visualiser et analyser 
                  vos données commerciales en temps réel.
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
                  Explorer la Démo
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full border-white/20 text-muted-foreground hover:bg-white/10 hover:text-white"
                  onClick={() => window.open(sourceCodeUrl, '_blank')}
                >
                  Accéder au Code Source
                </Button>
              </div>
            </CardContent>

            <CardFooter className="p-0 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
              <p className="text-xs md:text-sm text-muted-foreground order-2 md:order-1">
                Développé par Patrick Bartosik - © 2024
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-xs text-muted-foreground hover:text-white order-1 md:order-2"
                  >
                    Admin
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md mx-4">
                  <DialogHeader>
                    <DialogTitle>Accès Administrateur</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-sm text-muted-foreground text-center">
                      Veuillez entrer votre code d'authentification à 6 chiffres
                    </p>
                    <InputOTP 
                      maxLength={6} 
                      className="gap-1 md:gap-2 w-full"
                      value={otp}
                      onChange={(value) => setOtp(value)}
                      onComplete={handleOtpComplete}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                    <Button type="submit" className="bg-secondary w-full">
                      Valider
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Section droite - Image */}
      <div className="hidden md:block md:w-1/2 md:relative">
        <Image
          src="/assets/images/image.png"
          alt="Aperçu du tableau de bord analytique"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
