"use client";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconApps,
  IconCalendarTime,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeadset,
  IconHeart,
  IconHelp,
  IconHomeCog,
  IconMapPin,
  IconReceipt2,
  IconRouteAltLeft,
  IconShoppingCart,
  IconTerminal2,
  IconTruckDelivery,
} from "@tabler/icons-react";

export function FeaturesSectionDemoArbaaz() {
  const features = [
    {
      title: "All-in-One Platform",
      description:
        "ZEFAZA brings together shopping, services, and swift delivery — all in one powerful app.",
      icon: <IconApps />,
    },
    {
      title: "Hyperlocal Delivery",
      description:
        "With ZEFAZA, get groceries, food, and essentials from nearby stores in under 30 minutes.",
      icon: <IconTruckDelivery />,
    },
    {
      title: "Trusted Home Services",
      description:
        "From cleaning to repairs, book background-verified professionals instantly on ZEFAZA.",
      icon: <IconHomeCog />,
    },
    {
      title: "Seamless Shopping Experience",
      description:
        "Shop thousands of products on ZEFAZA — from electronics to daily essentials — all at your fingertips.",
      icon: <IconShoppingCart />,
    },
    {
      title: "Smart Scheduling",
      description:
        "ZEFAZA lets you schedule home services or deliveries exactly when you need them — stress-free.",
      icon: <IconCalendarTime />,
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden fees. ZEFAZA guarantees fair pricing for all services and products.",
      icon: <IconReceipt2 />,
    },
    {
      title: "Real-Time Tracking",
      description:
        "Track every order and service professional in real time within the ZEFAZA app.",
      icon: <IconMapPin />,
    },
    {
      title: "Support",
      description:
        "ZEFAZA’s support team (and smart AI agents) are here for you — anytime, anywhere.",
      icon: <IconHeadset />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
