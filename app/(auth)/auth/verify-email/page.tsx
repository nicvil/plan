"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function VerifyEmailPage() {
  const [isResending, setIsResending] = useState(false);
  const [resent, setResent] = useState(false);

  async function handleResend() {
    setIsResending(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsResending(false);
    setResent(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-md"
    >
      <Card>
        <CardHeader className="text-center space-y-2">
          <Link href="/" className="text-2xl font-bold text-primary mx-auto">
            LocalSpot
          </Link>
          <CardTitle className="text-xl">Check your email</CardTitle>
          <CardDescription>
            We&apos;ve sent a verification link to your email address
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center space-y-6 pb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Mail className="h-10 w-10 text-primary" />
            </motion.div>
          </motion.div>

          <p className="text-center text-sm text-muted-foreground max-w-xs">
            Click the link in the email to verify your account. If you
            don&apos;t see it, check your spam folder.
          </p>

          <div className="flex flex-col items-center gap-3 w-full">
            <Button
              variant="outline"
              className="w-full"
              onClick={handleResend}
              disabled={isResending || resent}
            >
              {isResending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              {resent
                ? "Verification email resent!"
                : "Resend verification email"}
            </Button>

            <Link href="/auth/signin" className="w-full">
              <Button variant="ghost" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Sign In
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
