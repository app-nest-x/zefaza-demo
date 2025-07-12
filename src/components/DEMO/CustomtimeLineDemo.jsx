"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Zefaza was born in the bustling heart of Warangal — not just as a
            brand, but as a hyperlocal revolution. Our mission? To digitize
            every local shop, cafe, restaurant, and service provider, giving
            them their own modern storefront, powered by smart QR technology.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/zefaza-restaurant.webp"
              alt="restaurant QR example"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/zefaza-shop.webp"
              alt="shopfront"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/zefaza-payment.webp"
              alt="UPI smart QR"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/zefaza-dashboard.webp"
              alt="dashboard analytics"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "How Zefaza Works",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Each Zefaza partner gets a unique smart QR. When a customer scans
            it, two things can happen:
          </p>
          <ul className="mb-8 text-xs md:text-sm text-neutral-800 dark:text-neutral-200 list-disc pl-5">
            <li>
              → If payment is enabled: it opens a UPI-based instant payment link
            </li>
            <li>
              → If the storefront is enabled: it takes them to a custom
              mini-site with product/menu listings, offers, and ratings
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/zefaza-customer-scan.webp"
              alt="customer scanning QR"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/zefaza-upi-flow.webp"
              alt="UPI payment flow"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/zefaza-storefront.webp"
              alt="digital storefront"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/zefaza-orders.webp"
              alt="order dashboard"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Why Zefaza Exists",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Local businesses often miss out on the digital wave. Zefaza bridges
            that gap with:
          </p>
          <ul className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200 list-disc pl-5">
            <li>✅ Instant payment solutions via QR</li>
            <li>✅ Digital storefronts with reviews, images, and menus</li>
            <li>✅ Admin & sales dashboards to track performance</li>
            <li>✅ Customer analytics & retention insights</li>
            <li>✅ Affordable monthly pricing</li>
          </ul>
          <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            It’s not just tech — it’s empowerment for every kirana, dhaba,
            boutique, and cafe to thrive online.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
