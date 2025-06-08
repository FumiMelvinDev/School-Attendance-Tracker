"use client";

import React, { useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginAction } from "@/actions/users";
import { Loader2 } from "lucide-react";

function LoginPage() {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      let errorMessage;
      let toastMessage;

      errorMessage = (await loginAction(email, password)).errorMessage;
      toastMessage = "Login successful! Redirecting...";

      if (!errorMessage) {
        toast.success(toastMessage, { position: "top-right" });
        router.replace("/dashboard");
      } else {
        toast.error(errorMessage);
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden px-24">
      <div>
        <p className="text-6xl text-[#212529] font-[400] leading-20">
          Attendance
        </p>
        <p className="text-6xl text-primary font-[400]">for your school</p>
        <p className="text-sm text-[#757F8E] mt-12">
          This helps schools track student attendance efficiently and securely.
          Teachers and administrators can easily record, view, and manage
          attendance records, ensuring accurate reporting and improved student
          accountability.
        </p>
      </div>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="bg-[#F0F4FB] text-center text-primary px-4 py-2 border border-primary rounded-sm">
            Teacher's login
          </CardTitle>
          <CardDescription>
            Login to your account to manage attendance records for your classes.
          </CardDescription>
        </CardHeader>
        <form action={handleSubmit}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-[#212529] font-[400]">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  disabled={isPending}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label
                    htmlFor="password"
                    className="text-[#212529] font-[400]"
                  >
                    Password
                  </Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-[#6C757D]"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  disabled={isPending}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col mt-8">
            <Button className="w-full bg-primary">
              {isPending ? <Loader2 className="animate-spin" /> : "Login"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
