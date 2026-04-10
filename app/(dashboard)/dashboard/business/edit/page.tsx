"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { businessSchema } from "@/lib/validations";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type BusinessFormData = z.infer<typeof businessSchema>;

const categories = [
  { id: "1", name: "Restaurant" },
  { id: "2", name: "Cafe" },
  { id: "3", name: "Food & Drink" },
  { id: "4", name: "Health & Wellness" },
  { id: "5", name: "Services" },
  { id: "6", name: "Retail" },
  { id: "7", name: "Entertainment" },
];

export default function EditBusinessPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BusinessFormData>({
    resolver: zodResolver(businessSchema),
    defaultValues: {
      name: "Bella's Bakery",
      description:
        "A charming artisan bakery specializing in handcrafted breads, pastries, and cakes. We use locally sourced ingredients and traditional baking methods.",
      shortDescription: "Artisan breads and pastries baked fresh daily.",
      address: "123 Main Street",
      city: "Springfield",
      state: "IL",
      country: "US",
      zipCode: "62701",
      phone: "(555) 123-4567",
      email: "hello@bellasbakery.com",
      website: "https://bellasbakery.com",
      categoryId: "3",
    },
  });

  const onSubmit = async (data: BusinessFormData) => {
    setIsLoading(true);
    // Simulate save
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Edit Business</h1>
        <p className="text-muted-foreground">
          Update your business listing information.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>
              Core details about your business.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Business Name</Label>
              <Input id="name" {...register("name")} />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                rows={4}
                {...register("description")}
              />
              {errors.description && (
                <p className="text-sm text-destructive">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="shortDescription">Short Description</Label>
              <Input
                id="shortDescription"
                {...register("shortDescription")}
              />
              {errors.shortDescription && (
                <p className="text-sm text-destructive">
                  {errors.shortDescription.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="categoryId">Category</Label>
              <Select
                defaultValue="3"
                onValueChange={(value) => setValue("categoryId", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.categoryId && (
                <p className="text-sm text-destructive">
                  {errors.categoryId.message}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Contact & Location */}
        <Card>
          <CardHeader>
            <CardTitle>Contact & Location</CardTitle>
            <CardDescription>
              How customers can reach and find you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" {...register("address")} />
              {errors.address && (
                <p className="text-sm text-destructive">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" {...register("city")} />
                {errors.city && (
                  <p className="text-sm text-destructive">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" {...register("state")} />
                {errors.state && (
                  <p className="text-sm text-destructive">
                    {errors.state.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input id="zipCode" {...register("zipCode")} />
                {errors.zipCode && (
                  <p className="text-sm text-destructive">
                    {errors.zipCode.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" {...register("country")} />
                {errors.country && (
                  <p className="text-sm text-destructive">
                    {errors.country.message}
                  </p>
                )}
              </div>
            </div>

            <Separator />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" {...register("phone")} />
                {errors.phone && (
                  <p className="text-sm text-destructive">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input id="website" {...register("website")} />
              {errors.website && (
                <p className="text-sm text-destructive">
                  {errors.website.message}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card>
          <CardHeader>
            <CardTitle>Social Media</CardTitle>
            <CardDescription>
              Connect your social media profiles.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="facebook">Facebook URL</Label>
              <Input
                id="facebook"
                placeholder="https://facebook.com/yourbusiness"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instagram">Instagram URL</Label>
              <Input
                id="instagram"
                placeholder="https://instagram.com/yourbusiness"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="twitter">Twitter URL</Label>
              <Input
                id="twitter"
                placeholder="https://twitter.com/yourbusiness"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
