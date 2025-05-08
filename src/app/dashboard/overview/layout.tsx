import PageContainer from '@/components/layout/page-container';
import { DollarSign, Users, CreditCard, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Define types for our dashboard stats
type StatCardProps = {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
};

// Sample dashboard data
const dashboardStats: StatCardProps[] = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
    icon: <DollarSign className="h-4 w-4 text-muted-foreground" />
  },
  {
    title: "Subscriptions",
    value: "+2350",
    change: "+180.1% from last month",
    icon: <Users className="h-4 w-4 text-muted-foreground" />
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19% from last month",
    icon: <CreditCard className="h-4 w-4 text-muted-foreground" />
  },
  {
    title: "Active Now",
    value: "+573",
    change: "+201 since last hour",
    icon: <Activity className="h-4 w-4 text-muted-foreground" />
  }
];

// StatCard component for cleaner rendering
const StatCard = ({ title, value, change, icon }: StatCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">
        {title}
      </CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">
        {change}
      </p>
    </CardContent>
  </Card>
);

export default function OverViewLayout({
  sales,
  pie_stats,
  bar_stats,
  area_stats
}: {
  sales: React.ReactNode;
  pie_stats: React.ReactNode;
  bar_stats: React.ReactNode;
  area_stats: React.ReactNode;
}) {
  return (
    <PageContainer>
      <div className="flex flex-1 flex-col space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {dashboardStats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-4">{bar_stats}</div>
          <div className="col-span-4 md:col-span-3">
            {sales}
          </div>
          <div className="col-span-4">{area_stats}</div>
          <div className="col-span-4 md:col-span-3">{pie_stats}</div>
        </div>
      </div>
    </PageContainer>
  );
}