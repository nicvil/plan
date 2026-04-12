"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  MoreVertical,
  CheckCircle,
  Star,
  Ban,
  Trash2,
  Check,
  X,
} from "lucide-react";

type Business = {
  id: number;
  name: string;
  owner: string;
  plan: "Free" | "Basic" | "Premium";
  status: "Active" | "Pending" | "Deactivated";
  verified: boolean;
};

const businesses: Business[] = [
  { id: 1, name: "Coastal Coffee Roasters", owner: "Jane Smith", plan: "Premium", status: "Active", verified: true },
  { id: 2, name: "Downtown Deli", owner: "Mark Johnson", plan: "Basic", status: "Active", verified: true },
  { id: 3, name: "Apex Fitness Studio", owner: "Lisa Wang", plan: "Premium", status: "Active", verified: false },
  { id: 4, name: "Green Valley Landscaping", owner: "Tom Brown", plan: "Free", status: "Pending", verified: false },
  { id: 5, name: "Pixel Perfect Design", owner: "Sarah Chen", plan: "Basic", status: "Active", verified: true },
  { id: 6, name: "Sunset Auto Repair", owner: "Mike Davis", plan: "Free", status: "Deactivated", verified: false },
];

const planColor = (plan: string) => {
  switch (plan) {
    case "Premium": return "bg-amber-100 text-amber-800 border-amber-300";
    case "Basic": return "bg-blue-100 text-blue-800 border-blue-300";
    default: return "bg-gray-100 text-gray-800 border-gray-300";
  }
};

const statusColor = (status: string) => {
  switch (status) {
    case "Active": return "bg-green-100 text-green-800 border-green-300";
    case "Pending": return "bg-yellow-100 text-yellow-800 border-yellow-300";
    case "Deactivated": return "bg-red-100 text-red-800 border-red-300";
    default: return "";
  }
};

export default function ManageBusinessesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = businesses.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.owner.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || b.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Manage Businesses</h2>
        <p className="text-sm text-muted-foreground mt-1">
          View and manage all registered businesses.
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search businesses or owners..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="deactivated">Deactivated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            Businesses ({filtered.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {/* Header row - hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-[2fr_1.5fr_1fr_1fr_0.8fr_0.5fr] gap-4 px-6 py-3 bg-muted/50 text-xs font-medium text-muted-foreground uppercase tracking-wide border-b">
            <div>Name</div>
            <div>Owner</div>
            <div>Plan</div>
            <div>Status</div>
            <div>Verified</div>
            <div className="text-right">Actions</div>
          </div>

          {filtered.map((biz) => (
            <div
              key={biz.id}
              className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1fr_1fr_0.8fr_0.5fr] gap-2 md:gap-4 items-center px-6 py-4 border-b last:border-0 hover:bg-muted/30 transition-colors"
            >
              <div>
                <span className="font-medium text-sm">{biz.name}</span>
                <span className="block md:hidden text-xs text-muted-foreground mt-0.5">
                  Owner: {biz.owner}
                </span>
              </div>
              <div className="hidden md:block text-sm text-muted-foreground">
                {biz.owner}
              </div>
              <div>
                <Badge variant="outline" className={planColor(biz.plan)}>
                  {biz.plan}
                </Badge>
              </div>
              <div>
                <Badge variant="outline" className={statusColor(biz.status)}>
                  {biz.status}
                </Badge>
              </div>
              <div className="flex items-center gap-1 text-sm">
                {biz.verified ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <X className="h-4 w-4 text-red-400" />
                )}
                <span className="md:hidden text-xs text-muted-foreground">
                  {biz.verified ? "Verified" : "Unverified"}
                </span>
              </div>
              <div className="flex justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Verify
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <Star className="h-4 w-4 text-amber-500" />
                      Feature
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <Ban className="h-4 w-4 text-orange-500" />
                      Deactivate
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-red-600">
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="px-6 py-12 text-center text-sm text-muted-foreground">
              No businesses match your filters.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
