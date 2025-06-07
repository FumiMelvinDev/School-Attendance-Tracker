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

function SignupPage() {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    console.log("handle submit");
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
            Teacher's signup
          </CardTitle>
          <CardDescription>
            Signup to your account to manage attendance records for your
            classes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="surname" className="text-[#212529] font-[400]">
                  Surname
                </Label>
                <Input
                  id="surname"
                  type="surname"
                  required
                  disabled={isPending}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="initials" className="text-[#212529] font-[400]">
                  Initials
                </Label>
                <Input
                  id="initials"
                  type="initials"
                  required
                  disabled={isPending}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-[#212529] font-[400]">
                  Email
                </Label>
                <Input
                  id="email"
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
                  type="password"
                  required
                  disabled={isPending}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full bg-primary">
            Signup
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignupPage;
