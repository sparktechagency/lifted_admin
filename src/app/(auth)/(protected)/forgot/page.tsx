"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forgotApi } from "@/lib/api/auth";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const [email, setEmail] = useState("");
  const navig = useRouter();
  const { mutate, isPending } = useMutation({
    mutationKey: ["forgot"],
    mutationFn: () => {
      return forgotApi({ email });
    },
    onError: (err) => {
      toast.error(err.message ?? "Failed to complete this request");
    },
    onSuccess: (res) => {
      toast.success(res.message ?? "Success!");
      navig.push(`/verify?email=${encodeURIComponent(email)}`);
    },
  });
  return (
    <div className="h-min w-full px-6">
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
        <h1 className="font-bold text-center text-3xl">Forgot password</h1>
      </div>

      <div className="w-full space-y-5">
        <div className="space-y-2">
          <Label>Submit your mail *</Label>
          <Input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-background text-foreground"
            placeholder="email@email.com"
          />
        </div>

        <Button
          className="w-full mt-2"
          variant={"special"}
          onClick={() => mutate()}
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </div>
  );
}
