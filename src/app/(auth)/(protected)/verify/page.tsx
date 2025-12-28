"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { verifyOtpApi } from "@/lib/api/auth";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "sonner";

export default function Home() {
  const email = useSearchParams().get("email") || "";
  const [otp, setOtp] = useState("");
  const [, setCookie] = useCookies(["reset_token"]);
  const navig = useRouter();
  const { mutate, isPending } = useMutation({
    mutationKey: ["verify_otp"],
    mutationFn: () => {
      return verifyOtpApi({ email, otp });
    },
    onError: (err) => {
      toast.error(err.message ?? "Failed to complete this request");
    },
    onSuccess: (res) => {
      toast.success(res.message ?? "Success!");
      setCookie("reset_token", res.data.reset_token);
      navig.push(`new-pass?email=${email}`);
    },
  });
  if (!email) {
    return redirect("/forgot");
  }
  return (
    <div className="h-full w-full px-6">
      <div className="grid place-items-center h-1/3 mb-4">
        <Image
          src={"/logo-clean.png"}
          height={800}
          width={1200}
          alt="logo"
          className="w-[200px]"
        />
      </div>

      <div className="space-y-1 mb-6">
        <h1 className="font-bold text-center text-3xl">OTP Verification</h1>
      </div>

      <div className="w-full space-y-5">
        <div className="space-y-2 flex justify-center">
          <InputOTP maxLength={6} value={otp} onChange={(e) => setOtp(e)}>
            <InputOTPGroup>
              <InputOTPSlot
                className="bg-background text-foreground"
                index={0}
              />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot
                className="bg-background text-foreground"
                index={1}
              />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot
                className="bg-background text-foreground"
                index={2}
              />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot
                className="bg-background text-foreground"
                index={3}
              />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button
          className="w-full transition-all active:scale-95 mt-8"
          variant={"special"}
          onClick={() => mutate()}
          disabled={otp.length < 4 || isPending}
        >
          {isPending ? "Verifying..." : "Verify OTP"}
        </Button>
        {/* <div className="text-sm text-end">
          Didn’t received code?{" "}
          <Button
            className="text-amber-700 font-semibold underline-offset-2 hover:underline p-0"
            variant={"link"}
          >
            Resend
          </Button>
        </div> */}
      </div>
    </div>
  );
}
