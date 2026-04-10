import Link from "next/link";
import {
  Check,
  X,
  CreditCard,
  Download,
  Crown,
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
import { Separator } from "@/components/ui/separator";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    current: true,
    features: [
      { text: "Basic business listing", included: true },
      { text: "Up to 5 photos", included: true },
      { text: "Review management", included: true },
      { text: "Advanced analytics", included: false },
      { text: "Priority placement", included: false },
      { text: "Remove competitor ads", included: false },
      { text: "Dedicated support", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    current: false,
    popular: true,
    features: [
      { text: "Enhanced business listing", included: true },
      { text: "Up to 50 photos", included: true },
      { text: "Review management", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Priority placement", included: true },
      { text: "Remove competitor ads", included: true },
      { text: "Dedicated support", included: false },
    ],
  },
  {
    name: "Premium",
    price: "$79",
    period: "/month",
    current: false,
    features: [
      { text: "Premium business listing", included: true },
      { text: "Unlimited photos", included: true },
      { text: "Review management", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Priority placement", included: true },
      { text: "Remove competitor ads", included: true },
      { text: "Dedicated support", included: true },
    ],
  },
];

const invoices = [
  { date: "Jan 1, 2024", amount: "$0.00", status: "Paid", id: "INV-001" },
  { date: "Dec 1, 2023", amount: "$0.00", status: "Paid", id: "INV-002" },
  { date: "Nov 1, 2023", amount: "$0.00", status: "Paid", id: "INV-003" },
  { date: "Oct 1, 2023", amount: "$29.00", status: "Paid", id: "INV-004" },
  { date: "Sep 1, 2023", amount: "$29.00", status: "Refunded", id: "INV-005" },
];

export default function BillingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Billing & Plans</h1>
        <p className="text-muted-foreground">
          Manage your subscription and billing details.
        </p>
      </div>

      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Current Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">Free Plan</span>
                <Badge>Active</Badge>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                $0.00 / month · Renews on Feb 1, 2024
              </p>
            </div>
            <Button variant="outline">Change Plan</Button>
          </div>
        </CardContent>
      </Card>

      {/* Plan Comparison */}
      <div>
        <h2 className="mb-4 text-xl font-semibold">Compare Plans</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.popular ? "border-primary shadow-md" : ""
              }
            >
              <CardHeader>
                {plan.popular && (
                  <Badge className="mb-2 w-fit">
                    <Crown className="mr-1 h-3 w-3" />
                    Most Popular
                  </Badge>
                )}
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-center gap-2 text-sm"
                    >
                      {feature.included ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span
                        className={
                          feature.included ? "" : "text-muted-foreground"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Separator className="my-4" />
                {plan.current ? (
                  <Button variant="outline" className="w-full" disabled>
                    Current Plan
                  </Button>
                ) : (
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.popular ? "Upgrade to Pro" : `Choose ${plan.name}`}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Invoice History */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice History</CardTitle>
          <CardDescription>Your past invoices and payments.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 font-medium">Invoice</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id} className="border-b last:border-0">
                    <td className="py-3 font-medium">{inv.id}</td>
                    <td className="py-3 text-muted-foreground">{inv.date}</td>
                    <td className="py-3">{inv.amount}</td>
                    <td className="py-3">
                      <Badge
                        variant={
                          inv.status === "Paid" ? "secondary" : "outline"
                        }
                      >
                        {inv.status}
                      </Badge>
                    </td>
                    <td className="py-3 text-right">
                      <Button variant="ghost" size="sm">
                        <Download className="mr-1 h-3 w-3" />
                        Download
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
