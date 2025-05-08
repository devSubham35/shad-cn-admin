"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

type BreadcrumbItem = {
  title: string;
  link: string;
};

// Predefined breadcrumb mappings for known routes
const routeMapping: Record<string, BreadcrumbItem[]> = {
  "/dashboard/overview": [
    { title: "Dashboard", link: "/dashboard/overview" },
    { title: "Overview", link: "/dashboard/overview" },
  ],
  "/dashboard/employee": [
    { title: "Dashboard", link: "/dashboard/overview" },
    { title: "Employee", link: "/dashboard/employee" },
  ]
};

export function useBreadcrumbs() {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    // Use predefined mapping if available
    if (routeMapping[pathname]) {
      return routeMapping[pathname];
    }

    // Generate breadcrumbs dynamically if not found in routeMapping
    const segments = pathname.split("/").filter(Boolean);
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join("/")}`;
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize first letter
        link: path,
      };
    });
  }, [pathname]);

  return breadcrumbs;
}
