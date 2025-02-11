"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
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
          <p className="text-muted-foreground">{getDescription(pathname)}</p>
        </div>
      </div>
    </div>
  )
}

function getDescription(pathname: string): string {
  const descriptions: Record<string, string> = {
    '/products': 'Manage your products and inventory',
    '/order': 'View and manage customer orders',
    '/customers': 'Manage your customer relationships',
    '/chat': 'Chat with your customers and team',
    '/email': 'Manage your email communications',
    '/analytics': 'View detailed analytics and reports',
    '/integration': 'Manage your third-party integrations',
    '/performance': 'Monitor your system performance',
    '/account': 'Manage your account settings',
    '/members': 'Manage team members and permissions',
    '/settings': 'Configure your application settings',
    '/feedback': 'View and manage customer feedback'
  }
  return descriptions[pathname] || 'Manage your dashboard'
} 