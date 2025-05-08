"use client";

import React from "react";

import { ChevronRight, LogOut } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavMenuItems } from "@/constants/NavData";

import { Icons } from "../ui/icons";
import { Separator } from "../ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, 
    SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarRail } from "../ui/sidebar";


const CustomNavbar = () => {
    
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      {/* Sidebar Header */}
      <SidebarHeader>
        <div className="flex gap-2 py-2 text-sidebar-accent-foreground">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Icons.logo className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Amplify</span>
            <span className="truncate text-xs">Premium</span>
          </div>
        </div>
      </SidebarHeader>

      <Separator orientation="horizontal" className="w-full" />

      {/* Sidebar Content */}
      <SidebarContent>
        {NavMenuItems.map((item, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel className="text-sm font-normal">{item.title}</SidebarGroupLabel>
            <SidebarMenu>
              {item.items.map((subItem, subIndex) => {
                const Icon = subItem.icon ? Icons[subItem.icon] || Icons.logo : Icons.logo;

                return subItem.items.length > 0 ? (
                  <Collapsible key={subIndex} asChild className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={subItem.title} isActive={pathname.startsWith(subItem.url)}>
                          {subItem.icon && <Icon className="size-4" />}
                          <span className="text-sm">{subItem.title}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-6">
                        <SidebarMenuSub>
                          {subItem.items.map((nestedItem, nestedIndex) => {
                            const NestedIcon = nestedItem.icon ? Icons[nestedItem.icon] || Icons.logo : Icons.logo;

                            return (
                              <SidebarMenuItem key={nestedIndex}>
                                <Link href={nestedItem.url}>
                                  <SidebarMenuButton tooltip={nestedItem.title} isActive={pathname.startsWith(nestedItem.url)}>
                                    {nestedItem.icon && <NestedIcon className="size-4" />}
                                    <span className="text-sm">{nestedItem.title}</span>
                                  </SidebarMenuButton>
                                </Link>
                              </SidebarMenuItem>
                            );
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={subIndex}>
                    <Link href={subItem.url}>
                      <SidebarMenuButton tooltip={subItem.title} isActive={pathname.startsWith(subItem.url)}>
                        {subItem.icon && <Icon className="size-4" />}
                        <span className="text-md">{subItem.title}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter>
        <Link href="/logout">
          <SidebarMenuButton>
            <LogOut className="size-4" />
            <span className="text-md">Logout</span>
          </SidebarMenuButton>
        </Link>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
};

export default CustomNavbar;
