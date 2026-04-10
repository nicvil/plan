import Link from "next/link";
import {
  Bookmark,
  Star,
  User,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Saved Businesses", value: "12", icon: Bookmark, trend: "+3 this month" },
  { label: "Reviews Written", value: "8", icon: Star, trend: "+2 this month" },
  { label: "Profile Completion", value: "75%", icon: User, trend: "Almost there!" },
];

const recentActivity = [
  { text: "You saved Bella's Bakery", time: "2 hours ago", type: "save" },
  { text: "You reviewed Downtown Cafe", time: "1 day ago", type: "review" },
  { text: "You updated your profile", time: "2 days ago", type: "profile" },
  { text: "You saved Green Garden Restaurant", time: "3 days ago", type: "save" },
  { text: "You reviewed Sunrise Yoga Studio", time: "5 days ago", type: "review" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, John!</h1>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening with your account.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>{stat.label}</CardDescription>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3" />
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-primary/10 p-1.5">
                    {activity.type === "save" && (
                      <Bookmark className="h-3 w-3 text-primary" />
                    )}
                    {activity.type === "review" && (
                      <Star className="h-3 w-3 text-primary" />
                    )}
                    {activity.type === "profile" && (
                      <User className="h-3 w-3 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.text}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Jump right in</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild className="w-full justify-between">
              <Link href="/dashboard/reviews">
                Write a Review
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-between">
              <Link href="/businesses">
                Browse Businesses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
