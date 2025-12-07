"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url?: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: { title: string; url: string }[];
  }[];
}) {
  const path = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const hasChildren = item.items && item.items.length > 0;
          const active = path === item.url;

          return (
            <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
              <SidebarMenuItem
                className={cn("font-semibold", active && "text-foreground")}
              >
                {/* --------------------- */}
                {/* PARENT WITH CHILDREN */}
                {/* --------------------- */}
                {hasChildren ? (
                  <CollapsibleTrigger asChild>
                    <div
                      className={cn(
                        "flex items-center gap-2 w-full px-4 text-sm! py-2 cursor-pointer rounded-md",
                        active && "bg-secondary"
                      )}
                    >
                      <item.icon
                        className={cn(
                          "w-4 h-4",
                          active &&
                            "fill-transparent stroke-[3px] [stroke:url(#grad)]"
                        )}
                      />

                      <span
                        className={cn(
                          active &&
                            "bg-linear-to-t from-[#FF6702] to-[#FF8C00] bg-clip-text text-transparent"
                        )}
                      >
                        {item.title}
                      </span>

                      {/* gradient svg */}
                      <svg
                        width="0"
                        height="0"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <defs>
                          <linearGradient
                            id="grad"
                            x1="0%"
                            y1="100%"
                            x2="0%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#FF6702" />
                            <stop offset="100%" stopColor="#FF8C00" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </CollapsibleTrigger>
                ) : (
                  <SidebarMenuButton
                    size="lg"
                    variant={active ? "outline" : "default"}
                    className={cn("px-4", active && "bg-secondary")}
                    tooltip={item.title}
                    asChild
                  >
                    <Link href={item.url ?? "#"}>
                      <item.icon
                        className={cn(
                          "w-5 h-5",
                          active &&
                            "fill-transparent stroke-[3px] [stroke:url(#grad)]"
                        )}
                      />

                      <span
                        className={cn(
                          active &&
                            "bg-linear-to-t  from-[#FF6702] to-[#FF8C00] bg-clip-text text-transparent"
                        )}
                      >
                        {item.title}
                      </span>

                      <svg
                        width="0"
                        height="0"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <defs>
                          <linearGradient
                            id="grad"
                            x1="0%"
                            y1="100%"
                            x2="0%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#FF6702" />
                            <stop offset="100%" stopColor="#FF8C00" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </Link>
                  </SidebarMenuButton>
                )}

                {hasChildren && (
                  <>
                    <CollapsibleTrigger asChild className="mt-1">
                      <SidebarMenuAction className="flex items-center justify-center data-[state=open]:rotate-90 transition-transform duration-200">
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                      </SidebarMenuAction>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item?.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              className="py-6 px-4 font-semibold"
                              size="md"
                              asChild
                            >
                              <Link href={subItem.url}>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                )}
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
