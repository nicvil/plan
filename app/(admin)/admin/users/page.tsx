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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, MoreVertical, ShieldCheck, UserCog, Ban } from "lucide-react";

type User = {
  id: number;
  name: string;
  email: string;
  role: "USER" | "OWNER" | "ADMIN";
  joined: string;
  initials: string;
};

const users: User[] = [
  { id: 1, name: "Sarah Chen", email: "sarah.chen@example.com", role: "ADMIN", joined: "Jan 5, 2024", initials: "SC" },
  { id: 2, name: "Mark Johnson", email: "mark.j@example.com", role: "OWNER", joined: "Feb 12, 2024", initials: "MJ" },
  { id: 3, name: "Lisa Wang", email: "lisa.wang@example.com", role: "OWNER", joined: "Mar 1, 2024", initials: "LW" },
  { id: 4, name: "Tom Brown", email: "tom.b@example.com", role: "USER", joined: "Mar 18, 2024", initials: "TB" },
  { id: 5, name: "Emily Davis", email: "emily.d@example.com", role: "USER", joined: "Apr 2, 2024", initials: "ED" },
  { id: 6, name: "Alex Rivera", email: "alex.r@example.com", role: "USER", joined: "Apr 15, 2024", initials: "AR" },
];

const roleColor = (role: string) => {
  switch (role) {
    case "ADMIN": return "bg-red-100 text-red-800 border-red-300";
    case "OWNER": return "bg-blue-100 text-blue-800 border-blue-300";
    default: return "bg-gray-100 text-gray-800 border-gray-300";
  }
};

export default function ManageUsersPage() {
  const [search, setSearch] = useState("");

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Manage Users</h2>
        <p className="text-sm text-muted-foreground mt-1">
          View and manage all platform users.
        </p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Users ({filtered.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {/* Header */}
          <div className="hidden md:grid md:grid-cols-[2fr_2fr_1fr_1fr_0.5fr] gap-4 px-6 py-3 bg-muted/50 text-xs font-medium text-muted-foreground uppercase tracking-wide border-b">
            <div>Name</div>
            <div>Email</div>
            <div>Role</div>
            <div>Joined</div>
            <div className="text-right">Actions</div>
          </div>

          {filtered.map((user) => (
            <div
              key={user.id}
              className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr_1fr_0.5fr] gap-2 md:gap-4 items-center px-6 py-4 border-b last:border-0 hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs bg-amber-100 text-amber-800">
                    {user.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <span className="font-medium text-sm">{user.name}</span>
                  <span className="block md:hidden text-xs text-muted-foreground">
                    {user.email}
                  </span>
                </div>
              </div>
              <div className="hidden md:block text-sm text-muted-foreground">
                {user.email}
              </div>
              <div>
                <Badge variant="outline" className={roleColor(user.role)}>
                  {user.role}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">{user.joined}</div>
              <div className="flex justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="gap-2">
                      <ShieldCheck className="h-4 w-4 text-red-600" />
                      Set as Admin
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <UserCog className="h-4 w-4 text-blue-600" />
                      Set as Owner
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <UserCog className="h-4 w-4 text-gray-600" />
                      Set as User
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-red-600">
                      <Ban className="h-4 w-4" />
                      Ban User
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="px-6 py-12 text-center text-sm text-muted-foreground">
              No users match your search.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
