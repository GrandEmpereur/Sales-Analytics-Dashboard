"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getEnrichedChats, getChatMessages, ChatStatus } from "@/mocks/chats";
import { Search, Send, Filter, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function ChatPage() {
    const pathname = usePathname();
    const paths = pathname.split('/').filter(Boolean);

    const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
    const [messageInput, setMessageInput] = useState("");

    const enrichedChats = getEnrichedChats();
    const selectedChat = selectedChatId ? enrichedChats.find(chat => chat.id === selectedChatId) : null;
    const chatMessages = selectedChatId ? getChatMessages(selectedChatId) : [];

    const getStatusColor = (status: ChatStatus) => {
        const colors = {
            active: "bg-green-500",
            pending: "bg-yellow-500",
            resolved: "bg-blue-500",
            archived: "bg-gray-500",
            closed: "bg-gray-500"
        };
        return colors[status] || "bg-gray-500";
    };

    return (
        <div className="flex flex-col h-[calc(100vh-10rem)]">
            {/* Header */}
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
                    <p className="text-muted-foreground">Gérez vos conversations avec les clients</p>
                </div>
            </div>

            {/* Chat Container */}
            <div className="flex gap-4 flex-1 min-h-0">
                {/* Liste des conversations */}
                <Card className="w-80 flex flex-col">
                    <div className="p-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Rechercher..." className="pl-9" />
                        </div>
                    </div>
                    <ScrollArea className="flex-1">
                        <div className="p-2 space-y-2">
                            {enrichedChats.map((chat) => (
                                <div
                                    key={chat.id}
                                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                                        selectedChatId === chat.id ? 'bg-muted' : 'hover:bg-muted/50'
                                    }`}
                                    onClick={() => setSelectedChatId(chat.id)}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <Avatar>
                                                <AvatarImage src={chat.customer.avatar} />
                                                <AvatarFallback>
                                                    {chat.customer.firstName[0]}{chat.customer.lastName[0]}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${getStatusColor(chat.status)}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start">
                                                <p className="font-medium truncate">
                                                    {chat.customer.firstName} {chat.customer.lastName}
                                                </p>
                                                <span className="text-xs text-muted-foreground">
                                                    {format(new Date(chat.updatedAt), 'HH:mm')}
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground truncate">
                                                {chat.subject}
                                            </p>
                                            {chat.unreadCount > 0 && (
                                                <Badge variant="secondary" className="mt-1">
                                                    {chat.unreadCount} non lu{chat.unreadCount > 1 ? 's' : ''}
                                                </Badge>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </Card>

                {/* Zone de chat */}
                <Card className="flex-1 flex flex-col">
                    {selectedChat ? (
                        <>
                            {/* En-tête du chat */}
                            <div className="p-4 border-b">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Avatar>
                                            <AvatarImage src={selectedChat.customer.avatar} />
                                            <AvatarFallback>
                                                {selectedChat.customer.firstName[0]}{selectedChat.customer.lastName[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="font-medium">
                                                {selectedChat.customer.firstName} {selectedChat.customer.lastName}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">{selectedChat.subject}</p>
                                        </div>
                                    </div>
                                    <Badge variant="outline">{selectedChat.status}</Badge>
                                </div>
                            </div>

                            {/* Messages */}
                            <ScrollArea className="flex-1 p-4">
                                <div className="space-y-4">
                                    {chatMessages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`flex ${message.senderType === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[70%] rounded-lg p-3 ${
                                                    message.senderType === 'user'
                                                        ? 'bg-primary text-primary-foreground'
                                                        : 'bg-muted'
                                                }`}
                                            >
                                                <p>{message.content}</p>
                                                {message.attachments && (
                                                    <div className="mt-2">
                                                        {message.attachments.map((attachment, index) => (
                                                            <img
                                                                key={index}
                                                                src={attachment.url}
                                                                alt={attachment.name}
                                                                className="rounded-md max-w-sm"
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                                <p className="text-xs mt-1 opacity-70">
                                                    {format(new Date(message.createdAt), 'HH:mm')}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>

                            {/* Zone de saisie */}
                            <div className="p-4 border-t">
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Écrivez votre message..."
                                        value={messageInput}
                                        onChange={(e) => setMessageInput(e.target.value)}
                                    />
                                    <Button>
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-muted-foreground">
                            <div className="text-center">
                                <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                <p>Sélectionnez une conversation pour commencer</p>
                            </div>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
}
