"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";

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

      {/* Top Row */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Product Overview */}
        <div className="p-6 border rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm text-muted-foreground flex items-center gap-2">
              Product overview
              <span className="inline-block w-4 h-4 rounded-full border" />
            </h3>
            <select className="text-sm border rounded-lg px-3 py-1">
              <option>This month</option>
            </select>
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-3xl font-semibold">$43,630</div>
              <div className="text-sm text-muted-foreground">Total sales</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm">Select by product</div>
              <div className="text-sm">New sales: 453</div>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-1 bg-orange-500/10 text-orange-600 rounded-full text-sm">Cosmetics</span>
              <span className="px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Housewear</span>
            </div>
          </div>
        </div>

        {/* Active Sales */}
        <div className="p-6 border rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm text-muted-foreground flex items-center gap-2">
              Active sales
              <span className="inline-block w-4 h-4 rounded-full border" />
            </h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-3xl font-semibold">$27,064</div>
              <div className="text-sm text-green-500">vs last month +12%</div>
            </div>
            <div className="flex justify-center gap-4">
              {/* Placeholder for bar chart */}
              <div className="w-4 h-16 bg-orange-500 rounded-full" />
              <div className="w-4 h-12 bg-orange-200 rounded-full" />
              <div className="w-4 h-8 bg-orange-100 rounded-full" />
            </div>
            <div className="flex justify-end">
              <button className="text-sm text-muted-foreground hover:text-foreground">
                See Details →
              </button>
            </div>
          </div>
        </div>

        {/* Product Revenue */}
        <div className="p-6 border rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm text-muted-foreground flex items-center gap-2">
              Product Revenue
              <span className="inline-block w-4 h-4 rounded-full border" />
            </h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-3xl font-semibold">$16,568</div>
              <div className="text-sm text-green-500">vs last month +7%</div>
            </div>
            <div className="flex justify-center">
              {/* Placeholder for circle progress */}
              <div className="w-24 h-24 rounded-full border-8 border-orange-500/20 border-t-orange-500" />
            </div>
            <div className="flex justify-end">
              <button className="text-sm text-muted-foreground hover:text-foreground">
                See Details →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Analytics Chart */}
        <div className="p-6 border rounded-xl">
          {/* Chart content will go here */}
        </div>

        {/* Sales Performance */}
        <div className="p-6 border rounded-xl">
          {/* Performance content will go here */}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Total Visits */}
        <div className="p-6 border rounded-xl">
          {/* Visits content will go here */}
        </div>

        {/* Top Products */}
        <div className="p-6 border rounded-xl">
          {/* Products table will go here */}
        </div>
      </div>
    </div>
  )
}
