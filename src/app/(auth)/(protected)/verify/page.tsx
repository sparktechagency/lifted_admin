import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full text-background px-6">
      <div className="grid place-items-center h-1/3 mb-4">
        <Image
          src={"/logo.webp"}
          height={800}
          width={1200}
          alt="logo"
          className="w-[200px]"
        />
      </div>

      <div className="space-y-1 mb-6">
        <h1 className="font-bold text-center text-3xl">OTP Verification</h1>
        <p className="text-lg text-center">
          We have sent a verification code to william***@gmail.com
        </p>
      </div>

      <div className="w-full space-y-5">
        <div className="space-y-2 flex justify-center">
          <InputOTP maxLength={6}>
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
            <InputOTPGroup>
              <InputOTPSlot
                className="bg-background text-foreground"
                index={4}
              />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot
                className="bg-background text-foreground"
                index={5}
              />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button
          className="w-full text-background! font-bold border cursor-pointer hover:bg-background/10 transition-all active:scale-95 mt-8"
          variant={"ghost"}
          asChild
        >
          <Link href={"/new-pass"}>Verify</Link>
        </Button>
        <div className="text-sm text-end">
          Didn’t received code?{" "}
          <Button
            className="text-green-700 font-semibold underline-offset-2 hover:underline p-0"
            variant={"link"}
          >
            Resend
          </Button>
        </div>
      </div>
    </div>
  );
}
