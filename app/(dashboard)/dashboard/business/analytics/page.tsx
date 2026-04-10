import {
  Eye,
  Phone,
  Globe,
  MapPin,
  TrendingUp,
  BarChart3,
  Users,
  Clock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const barData = [
  { day: "Mon", value: 65 },
  { day: "Tue", value: 80 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 90 },
  { day: "Fri", value: 100 },
  { day: "Sat", value: 75 },
  { day: "Sun", value: 55 },
];

const summaryStats = [
  { label: "Total Views", value: "1,234", icon: Eye },
  { label: "Unique Visitors", value: "856", icon: Users },
  { label: "Avg. Time on Page", value: "2m 34s", icon: Clock },
];

const clickBreakdown = [
  { label: "Phone Clicks", value: 89, icon: Phone },
  { label: "Website Clicks", value: 156, icon: Globe },
  { label: "Direction Clicks", value: 67, icon: MapPin },
];

const topDays = [
  { date: "Friday, Jan 19", views: 198 },
  { date: "Thursday, Jan 18", views: 176 },
  { date: "Saturday, Jan 13", views: 164 },
  { date: "Tuesday, Jan 16", views: 152 },
  { date: "Friday, Jan 12", views: 141 },
];

export default function AnalyticsPage() {
  const maxValue = Math.max(...barData.map((d) => d.value));

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">
            Track your business performance.
          </p>
        </div>
        <Badge variant="outline" className="w-fit">
          Last 30 days
        </Badge>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {summaryStats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>{stat.label}</CardDescription>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Views Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Views Over Time
          </CardTitle>
          <CardDescription>Daily page views this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between gap-2" style={{ height: 200 }}>
            {barData.map((bar) => (
              <div key={bar.day} className="flex flex-1 flex-col items-center gap-1">
                <span className="text-xs font-medium text-muted-foreground">
                  {bar.value}
                </span>
                <div
                  className="w-full rounded-t-md bg-primary transition-all"
                  style={{ height: `${(bar.value / maxValue) * 160}px` }}
                />
                <span className="text-xs text-muted-foreground">{bar.day}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Click Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Click Breakdown</CardTitle>
            <CardDescription>How visitors interact with your listing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              {clickBreakdown.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center rounded-lg border p-4 text-center"
                >
                  <item.icon className="h-6 w-6 text-primary" />
                  <span className="mt-2 text-2xl font-bold">{item.value}</span>
                  <span className="text-xs text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Days */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Top Performing Days
            </CardTitle>
            <CardDescription>Days with the most views</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topDays.map((day, i) => (
                <div
                  key={day.date}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-sm">{day.date}</span>
                  </div>
                  <Badge variant="secondary">{day.views} views</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
