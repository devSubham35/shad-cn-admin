'use client'
import React from 'react'

import { ChevronRight, LogsIcon } from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/constants/NavData';

import { Icons } from '../ui/icons';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, 
SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarRail } from '../ui/sidebar';

const AppSidebar = () => {

    const pathname = usePathname()

    return (
        <Sidebar collapsible='icon'>
            <SidebarHeader>
                <div className='flex gap-2 py-2 text-sidebar-accent-foreground'>
                    <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                        <LogsIcon className='size-4' />
                    </div>
                    <div className='grid flex-1 text-left text-sm leading-tight'>
                        <span className='truncate font-semibold'>Amplify</span>
                        <span className='truncate text-xs'>Premium</span>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className='overflow-x-hidden'>
                <SidebarGroup>
                    <SidebarGroupLabel>Overview</SidebarGroupLabel>
                    <SidebarMenu>
                        {navItems.map((item) => {
                            const Icon = item.icon ? Icons[item.icon] : Icons.logo;
                            return item?.items && item?.items?.length > 0 ? (
                                <Collapsible
                                    key={item.title}
                                    asChild
                                    defaultOpen={item.isActive}
                                    className='group/collapsible'
                                >
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton
                                                tooltip={item.title}
                                                isActive={pathname === item.url}
                                            >
                                                {item.icon && <Icon />}
                                                <span>{item.title}</span>
                                                <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.items?.map((subItem) => (
                                                    <SidebarMenuSubItem key={subItem.title}>
                                                        <SidebarMenuSubButton
                                                            asChild
                                                            isActive={pathname === subItem.url}
                                                        >
                                                            <Link href={subItem.url}>
                                                                <span>{subItem.title}</span>
                                                            </Link>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ) : (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        tooltip={item.title}
                                        isActive={pathname === item.url}
                                    >
                                        <Link href={item.url}>
                                            <Icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            );
                        })}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}

export default AppSidebar