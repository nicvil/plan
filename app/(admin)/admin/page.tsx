import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Store,
  Users,
  DollarSign,
  Star,
  Plus,
  UserCog,
  BarChart3,
  Activity,
} from "lucide-react";

const stats = [
  {
    title: "Total Businesses",
    value: "156",
    icon: Store,
    change: "+12 this month",
    color: "text-blue-600 bg-blue-100",
  },
  {
    title: "Total Users",
    value: "2,847",
    icon: Users,
    change: "+89 this month",
    color: "text-green-600 bg-green-100",
  },
  {
    title: "Monthly Revenue",
    value: "$12,450",
    icon: DollarSign,
    change: "+8.2% vs last month",
    color: "text-amber-600 bg-amber-100",
  },
  {
    title: "Total Reviews",
    value: "1,203",
    icon: Star,
    change: "+34 this month",
    color: "text-purple-600 bg-purple-100",
  },
];

const recentActivity = [
  {
    message: "New business registered: 'Coastal Coffee Roasters'",
    time: "5 minutes ago",
    type: "business",
  },
  {
    message: "New user signed up: Sarah Chen",
    time: "12 minutes ago",
    type: "user",
  },
  {
    message: "Review flagged for moderation on 'Downtown Deli'",
    time: "28 minutes ago",
    type: "review",
  },
  {
    message: "Payment received: $49/mo from 'Apex Fitness Studio'",
    time: "1 hour ago",
    type: "payment",
  },
  {
    message: "Business verified: 'Green Valley Landscaping'",
    time: "2 hours ago",
    type: "verified",
  },
];

const badgeVariant = (type: string) => {
  switch (type) {
    case "business":
      return "default" as const;
    case "user":
      return "secondary" as const;
    case "review":
      return "destructive" as const;
    case "payment":
      return "outline" as const;
    default:
      return "default" as const;
  }
};

export default function AdminOverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Welcome back. Here&apos;s what&apos;s happening today.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-md ${stat.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-amber-600" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest platform events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-4 border-b last:border-0 pb-3 last:pb-0"
                >
                  <div className="space-y-1 min-w-0">
                    <p className="text-sm leading-snug">{item.message}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                  <Badge variant={badgeVariant(item.type)} className="shrink-0">
                    {item.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common admin tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start gap-2" variant="outline">
              <Plus className="h-4 w-4" />
              Add Business
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <UserCog className="h-4 w-4" />
              Manage Users
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <BarChart3 className="h-4 w-4" />
              View Reports
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
