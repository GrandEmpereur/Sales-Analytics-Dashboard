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
import { toast } from "sonner";
import React from "react";
import { authenticateUser } from "@/lib/auth";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { mockUsers } from "@/mocks/users";
import { useSession } from "@/contexts/session-context";

// Schéma de validation amélioré
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "L'email est requis")
    .email("Format d'email invalide"),
  password: z
    .string()
    .min(1, "Le mot de passe est requis")
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Home() {
  const router = useRouter();
  const sourceCodeUrl = process.env.NEXT_PUBLIC_SOURCE_CODE_URL;
  const adminOTP = process.env.NEXT_PUBLIC_ADMIN_OTP;
  
  const [isLoading, setIsLoading] = React.useState(false);
  const [otp, setOtp] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [error, setError] = React.useState("");

  const { setUser } = useSession();

  // Initialiser le formulaire avec react-hook-form
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError("");

    try {
      const user = await authenticateUser({
        email: data.email,
        password: data.password,
      });

      if (user) {
        setUser(user);
        toast.success("Connexion réussie", {
          description: `Bienvenue ${user.firstName} ${user.lastName}`,
        });
        router.push("/dashboard");
      } else {
        toast.error("Échec de la connexion", {
          description: "Email ou mot de passe incorrect",
        });
      }
    } catch (error) {
      toast.error("Une erreur est survenue", {
        description: "Veuillez réessayer ultérieurement",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const validateOTP = async (value: string) => {
    setError("");
    if (value === adminOTP) {
      setIsLoading(true);
      try {
        const adminUser = mockUsers.find(user => user.role === 'admin');
        if (adminUser) {
          const user = await authenticateUser({
            email: adminUser.email,
            password: adminUser.password
          });

          if (user) {
            setUser(user);
            toast.success("Authentification réussie", {
              description: "Redirection vers le tableau de bord..."
            });
            setIsDialogOpen(false);
            router.push("/dashboard");
          }
        }
      } catch (error) {
        toast.error("Une erreur est survenue", {
          description: "Veuillez réessayer ultérieurement."
        });
      } finally {
        setIsLoading(false);
      }
    } else if (value.length === 6) {
      setError("Code d'authentification incorrect");
      toast.error("Code incorrect", {
        description: "Veuillez vérifier votre code et réessayer."
      });
    }
  };

  const handleOtpComplete = (value: string) => {
    setOtp(value);
    validateOTP(value);
  };

  const handleValidateClick = () => {
    validateOTP(otp);
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">
                          Email professionnel
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="votre@email.com"
                            className="bg-white/10 border-0 text-white placeholder:text-muted-foreground focus-visible:ring-secondary"
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">
                          Mot de passe
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="••••••••"
                            className="bg-white/10 border-0 text-white placeholder:text-muted-foreground focus-visible:ring-secondary"
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Connexion...
                      </div>
                    ) : (
                      "Se connecter"
                    )}
                  </Button>
                </form>
              </Form>

              <div className="space-y-4">
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
              <Dialog open={isDialogOpen} onOpenChange={(open) => {
                setIsDialogOpen(open);
                if (!open) {
                  setOtp("");
                  setError("");
                }
              }}>
                <DialogTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-xs text-muted-foreground order-1 md:order-2"
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
                      onChange={(value) => {
                        setOtp(value);
                        setError("");
                      }}
                      onComplete={handleOtpComplete}
                      disabled={isLoading}
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
                    {error && (
                      <p className="text-sm text-destructive">
                        {error}
                      </p>
                    )}
                    <Button 
                      type="submit" 
                      className="bg-secondary w-full"
                      onClick={handleValidateClick}
                      disabled={isLoading || otp.length !== 6}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Vérification...
                        </div>
                      ) : (
                        "Valider"
                      )}
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
