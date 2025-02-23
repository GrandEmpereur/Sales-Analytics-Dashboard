"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Star, Inbox, Send, Archive, Trash2, AlertCircle, Edit, Mail, MoreVertical, Download, Reply, Forward, File } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Separator } from "@/components/ui/separator";
import { Email, EmailFolder, folders, mockEmails } from "@/mocks/emails";
import { Checkbox } from "@/components/ui/checkbox";

export default function EmailPage() {
    const pathname = usePathname();
    const paths = pathname.split('/').filter(Boolean);

    const [selectedFolder, setSelectedFolder] = useState<EmailFolder>("inbox");
    const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEmails, setSelectedEmails] = useState<string[]>([]);

    const filteredEmails = mockEmails.filter(email => 
        email.folder === selectedFolder &&
        (searchTerm === "" || 
            email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
            email.from.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleSelectEmail = (emailId: string) => {
        if (selectedEmails.includes(emailId)) {
            setSelectedEmails(selectedEmails.filter(id => id !== emailId));
        } else {
            setSelectedEmails([...selectedEmails, emailId]);
        }
    };

    const getIconComponent = (iconName: string) => {
        const icons = {
            'Inbox': Inbox,
            'Send': Send,
            'File': File,
            'Archive': Archive,
            'AlertCircle': AlertCircle,
            'Trash2': Trash2
        };
        return icons[iconName as keyof typeof icons];
    };

    return (
        <div className="flex flex-col h-[calc(100vh-10rem)]">
            {/* Header existant */}
            <div className="flex justify-between items-center mb-4">
                <div className="space-y-1.5">
                    <Breadcrumb>
                        <BreadcrumbList>
                            {paths.map((path, index) => {
                                const isLast = index === paths.length - 1;
                                const href = `/${paths.slice(0, index + 1).join('/')}`;
                                return (
                                    <BreadcrumbItem key={path}>
                                        {isLast ? (
                                            <BreadcrumbPage className="text-xl font-medium capitalize">
                                                {path}
                                            </BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink href={href} className="text-lg capitalize">
                                                {path}
                                            </BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                );
                            })}
                        </BreadcrumbList>
                    </Breadcrumb>
                    <p className="text-muted-foreground">Gérez vos emails et communications</p>
                </div>
                <Button variant="default" className="flex items-center gap-2">
                    <Edit className="w-4 h-4" />
                    <span>Nouveau message</span>
                </Button>
            </div>

            {/* Contenu principal */}
            <div className="flex gap-4 flex-1 min-h-0">
                {/* Sidebar avec les dossiers */}
                <Card className="w-64">
                    <ScrollArea className="h-full">
                        <div className="p-4 space-y-2">
                            {folders.map((folder) => {
                                const IconComponent = getIconComponent(folder.icon);
                                return (
                                    <Button
                                        key={folder.value}
                                        variant={selectedFolder === folder.value ? "secondary" : "ghost"}
                                        className="w-full justify-start"
                                        onClick={() => setSelectedFolder(folder.value as EmailFolder)}
                                    >
                                        <IconComponent className="mr-2 h-4 w-4" />
                                        <span className="flex-1 text-left">{folder.label}</span>
                                        {folder.count && (
                                            <Badge variant="secondary">{folder.count}</Badge>
                                        )}
                                    </Button>
                                );
                            })}
                        </div>
                    </ScrollArea>
                </Card>

                {/* Liste des emails */}
                <Card className="flex-1 flex flex-col">
                    <div className="p-4 border-b">
                        <div className="flex items-center gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input 
                                    placeholder="Rechercher des emails..." 
                                    className="pl-9"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            {selectedEmails.length > 0 && (
                                <div className="flex items-center gap-2">
                                    <Button variant="outline" size="sm">
                                        <Archive className="h-4 w-4 mr-2" />
                                        Archiver
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <Trash2 className="h-4 w-4 mr-2" />
                                        Supprimer
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                    <ScrollArea className="flex-1">
                        <div className="divide-y">
                            {filteredEmails.map((email) => (
                                <div
                                    key={email.id}
                                    className={`p-4 hover:bg-muted/50 ${
                                        selectedEmail?.id === email.id ? 'bg-muted' : ''
                                    } ${!email.isRead ? 'font-medium' : ''}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <Checkbox
                                            checked={selectedEmails.includes(email.id)}
                                            onCheckedChange={() => handleSelectEmail(email.id)}
                                        />
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className={email.isStarred ? "text-yellow-500" : ""}
                                        >
                                            <Star className="h-4 w-4" />
                                        </Button>
                                        <div 
                                            className="flex-1 min-w-0 cursor-pointer"
                                            onClick={() => setSelectedEmail(email)}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Avatar className="h-8 w-8">
                                                        <AvatarImage src={email.from.avatar} />
                                                        <AvatarFallback>{email.from.name[0]}</AvatarFallback>
                                                    </Avatar>
                                                    <p className="font-medium truncate">{email.from.name}</p>
                                                </div>
                                                <span className="text-sm text-muted-foreground">
                                                    {format(new Date(email.date), 'dd MMM HH:mm', { locale: fr })}
                                                </span>
                                            </div>
                                            <p className="text-sm truncate">{email.subject}</p>
                                            <p className="text-sm text-muted-foreground truncate">
                                                {email.content.split('\n')[0]}
                                            </p>
                                            {email.labels && (
                                                <div className="flex gap-2 mt-2">
                                                    {email.labels.map((label) => (
                                                        <Badge key={label} variant="secondary">
                                                            {label}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </Card>

                {/* Détail de l'email */}
                {selectedEmail && (
                    <Card className="w-[600px] flex flex-col">
                        <div className="p-4 border-b flex items-center justify-between">
                            <h3 className="text-lg font-medium">{selectedEmail.subject}</h3>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon">
                                    <Reply className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Forward className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <MoreVertical className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <ScrollArea className="flex-1 p-4">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Avatar>
                                            <AvatarImage src={selectedEmail.from.avatar} />
                                            <AvatarFallback>{selectedEmail.from.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium">{selectedEmail.from.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                À: {selectedEmail.to.map(to => to.name).join(', ')}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {format(new Date(selectedEmail.date), 'dd MMMM yyyy HH:mm', { locale: fr })}
                                    </p>
                                </div>
                                <Separator />
                                <div className="whitespace-pre-wrap">{selectedEmail.content}</div>
                                {selectedEmail.attachments && selectedEmail.attachments.length > 0 && (
                                    <div className="mt-4">
                                        <h4 className="text-sm font-medium mb-2">Pièces jointes</h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {selectedEmail.attachments.map((attachment, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-2 p-2 rounded-lg border"
                                                >
                                                    <Mail className="h-4 w-4" />
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm truncate">{attachment.name}</p>
                                                        <p className="text-xs text-muted-foreground">
                                                            {attachment.size}
                                                        </p>
                                                    </div>
                                                    <Button variant="ghost" size="icon">
                                                        <Download className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                    </Card>
                )}
            </div>
        </div>
    );
}
