"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
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
        <h1 className="font-bold text-center text-3xl">Create new password</h1>
      </div>

      <div className="w-full space-y-5">
        <div className="space-y-2">
          <Label>New Password</Label>
          <InputGroup className="bg-background text-foreground">
            <InputGroupInput
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
            />
            <InputGroupButton
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((s) => !s)}
            >
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </InputGroupButton>
          </InputGroup>
        </div>

        <div className="space-y-2">
          <Label>Confirm Password</Label>
          <InputGroup className="bg-background text-foreground">
            <InputGroupInput
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
            />
            <InputGroupButton
              aria-label={
                showConfirm ? "Hide confirm password" : "Show confirm password"
              }
              onClick={() => setShowConfirm((s) => !s)}
            >
              {showConfirm ? <EyeIcon /> : <EyeOffIcon />}
            </InputGroupButton>
          </InputGroup>
        </div>

        <Button
          className="w-full text-background! font-bold border cursor-pointer hover:bg-background/10 transition-all active:scale-95 mt-2"
          variant={"ghost"}
          asChild
        >
          <Link href={"/confirm"}>Done</Link>
        </Button>
      </div>
    </div>
  );
}
