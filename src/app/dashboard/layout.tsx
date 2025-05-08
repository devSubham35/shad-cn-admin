import React from 'react'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import Header from '@/components/layout/Header'
import CustomNavbar from '@/components/layout/CustomNavbar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <CustomNavbar />
            <SidebarInset>
                <Header />
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}

export default DashboardLayout