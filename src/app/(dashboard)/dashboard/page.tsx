"use client"

import { ProductOverview } from "@/components/widgets/product-overview"
import { ActiveSales } from "@/components/widgets/active-sales"
import { ProductRevenue } from "@/components/widgets/product-revenue"
import { Analytics } from "@/components/widgets/analytics"
import { SalesPerformance } from "@/components/widgets/sales-performance"
import HourlyVisits from "@/components/widgets/hourly-visits"
import { TopProducts } from "@/components/widgets/top-products"

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-10">
      {/* Top Row */}
      <div className="grid gap-4 md:grid-cols-3">
        <ProductOverview />
        <ActiveSales />
        <ProductRevenue />
      </div>

      {/* Middle Row */}
      <div className="grid gap-4 md:grid-cols-[70%_30%]">
        <Analytics />
        <SalesPerformance />
      </div>

      {/* Bottom Row */}
      <div className="grid gap-4 md:grid-cols-[30%_70%]">
        <HourlyVisits />
        <TopProducts />
      </div>
    </div>
  )
}

