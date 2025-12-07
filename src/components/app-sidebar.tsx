"use client";

import * as React from "react";
import {
  AlertCircleIcon,
  BadgeDollarSignIcon,
  CalendarIcon,
  ChartNetworkIcon,
  CreditCardIcon,
  LayoutDashboardIcon,
  LayoutList,
  LockIcon,
  NetworkIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";
// import { NavSecondary } from "@/components/nav-secondary";
// import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Users",
      icon: UsersIcon,
      items: [
        {
          title: "Calorie Logs",
          url: "/users/calorie",
        },
        {
          title: "Workout Logs",
          url: "/users/workout",
        },
        {
          title: "Summaries",
          url: "/users/summaries",
        },
      ],
    },
    {
      title: "Affirmations",
      icon: AlertCircleIcon,
      items: [
        {
          title: "Affirmation Categories",
          url: "/affirmations/categories",
        },
        {
          title: "Affirmation Messages",
          url: "/affirmations/messages",
        },
      ],
    },
    {
      title: "Settings",
      icon: SettingsIcon,
      items: [
        {
          title: "System configure",
          url: "/settings/configure",
        },
        {
          title: "Terms of Service",
          url: "/settings/tnc",
        },
        {
          title: "FAQ",
          url: "/settings/faq",
        },
        {
          title: "About Us",
          url: "/settings/about",
        },
        {
          title: "Privacy Policy",
          url: "/settings/privacy",
        },
        {
          title: "Contact Support",
          url: "/settings/support",
        },
        {
          title: "Social Media",
          url: "/settings/social",
        },
        {
          title: "Profile",
          url: "/settings/profile",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="sidebar" {...props}>
      <SidebarHeader className="">
        <SidebarMenu>
          <div className="w-[200px] mx-auto flex justify-center items-center ">
            <Link href={"/"} className="w-fit">
              <Image
                src={"/logo.webp"}
                height={200}
                width={200}
                alt="icon"
                className="w-fit"
              />
            </Link>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="px-4">
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
