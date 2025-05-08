import { Icons } from "@/components/ui/icons";

export interface NavItem {
    title: string;
    url: string;
    disabled?: boolean;
    external?: boolean;
    shortcut?: [string, string];
    icon?: keyof typeof Icons;
    label?: string;
    description?: string;
    isActive?: boolean;
    items?: NavItem[];
  }


export const navItems: NavItem[] = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'dashboard',
      isActive: false,
      items: []
    },
    {
      title: 'Product',
      url: '/dashboard/product',
      icon: 'product',
      isActive: false,
      items: []
    },
    {
      title: 'Account',
      url: '#',
      icon: 'billing',
      isActive: true,
  
      items: [
        {
          title: 'Profile',
          url: '/dashboard/profile',
          icon: 'userPen',
        },
        {
          title: 'Login',
          shortcut: ['l', 'l'],
          url: '/',
          icon: 'login'
        }
      ]
    },
    {
      title: 'Kanban',
      url: '/dashboard/kanban',
      icon: 'kanban',
      isActive: false,
      items: []
    }
  ];

  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////

  export const NavMenuItems = [
    {
      title: "Overview",
      items: [
        { title: "Dashboard", icon: "dashboard", url: "/dashboard/overview", items: [] },
        { title: "Employee", icon: "employee", url: "/dashboard/employee", items: [] }
      ]
    }
  ];
  