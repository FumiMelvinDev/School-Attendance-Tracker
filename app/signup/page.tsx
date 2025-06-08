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
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signupAction } from "@/actions/users";
import { Loader2 } from "lucide-react";

function SignupPage() {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const display_name = formData.get("display_name") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      let errrorMessage;
      let toastMessage;

      errrorMessage = (await signupAction(display_name, email, password))
        .errorMessage;
      toastMessage = "Signup successful! Check your email for verification.";

      if (!errrorMessage) {
        toast.success(toastMessage, { position: "top-right" });
        router.replace("/login");
      } else {
        toast.error(errrorMessage);
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
            Teacher's signup
          </CardTitle>
          <CardDescription>
            Signup to your account to manage attendance records for your
            classes.
          </CardDescription>
        </CardHeader>
        <form action={handleSubmit}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label
                  htmlFor="display_name"
                  className="text-[#212529] font-[400]"
                >
                  Name
                </Label>
                <Input
                  id="display_name"
                  type="text"
                  name="display_name"
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
              {isPending ? <Loader2 className="animate-spin" /> : "Signup"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default SignupPage;
