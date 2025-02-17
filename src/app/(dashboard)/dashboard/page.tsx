"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import { ProductOverview } from "@/components/widgets/product-overview";
import { ActiveSales } from "@/components/widgets/active-sales";
import { ProductRevenue } from "@/components/widgets/product-revenue";
import { Analytics } from "@/components/widgets/analytics";
import { SalesPerformance } from "@/components/widgets/sales-performance";
import { TotalVisits } from "@/components/widgets/total-visits";
import { TopProducts } from "@/components/widgets/top-products";

export default function Page() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return (
    <div className="space-y-4">
      {/* Header */}
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
          <p className="text-muted-foreground">Track your sales and performance of your strategy</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <span>Filters</span>
          </Button>
          <Button variant="secondary" className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>Add Widget</span>
          </Button>
        </div>
      </div>

      {/* Top Row - Overview Widgets */}
      <div className="grid gap-4 md:grid-cols-3">
        <ProductOverview />
        <ActiveSales />
        <ProductRevenue />
      </div>

      {/* Middle Row - Analytics & Performance */}
      <div className="grid gap-4 md:grid-cols-2">
        <Analytics />
        <SalesPerformance />
      </div>

      {/* Bottom Row - Visits & Products */}
      <div className="grid gap-4 md:grid-cols-2">
        <TotalVisits />
        <TopProducts />
      </div>
    </div>
  )
}
