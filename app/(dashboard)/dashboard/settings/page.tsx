"use client";

import { useState } from "react";
import { Camera, AlertTriangle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  const [name, setName] = useState("John Doe");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [reviewReplies, setReviewReplies] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences.
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Photo Upload */}
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-muted-foreground/25 bg-muted">
                  <Camera className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <Button variant="outline" size="sm">
                    Upload Photo
                  </Button>
                  <p className="mt-1 text-xs text-muted-foreground">
                    JPG, PNG or GIF. Max 2MB.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value="john@example.com"
                    disabled
                  />
                  <p className="text-xs text-muted-foreground">
                    Contact support to change your email.
                  </p>
                </div>
              </div>

              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose what notifications you receive.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive email updates about your activity.
                  </p>
                </div>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Review Replies</p>
                  <p className="text-sm text-muted-foreground">
                    Get notified when someone replies to your review.
                  </p>
                </div>
                <Switch
                  checked={reviewReplies}
                  onCheckedChange={setReviewReplies}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Marketing Emails</p>
                  <p className="text-sm text-muted-foreground">
                    Receive tips, updates, and promotions.
                  </p>
                </div>
                <Switch
                  checked={marketingEmails}
                  onCheckedChange={setMarketingEmails}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Account Tab */}
        <TabsContent value="account">
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
              <CardDescription>
                Irreversible account actions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium">Delete Account</p>
                  <p className="text-sm text-muted-foreground">
                    Permanently delete your account and all associated data.
                  </p>
                </div>
                <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="destructive">Delete Account</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-destructive" />
                        Delete Account
                      </DialogTitle>
                      <DialogDescription>
                        This will permanently delete your account, reviews, saved
                        businesses, and all associated data. This action cannot
                        be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setDeleteDialogOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button variant="destructive">
                        Yes, Delete My Account
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
