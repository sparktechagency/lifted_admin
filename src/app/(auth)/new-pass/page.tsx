"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { changePasswordApi } from "@/lib/api/auth";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { useCookies } from "react-cookie";

/* ---------------- ZOD SCHEMA ---------------- */

const passwordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type PasswordForm = z.infer<typeof passwordSchema>;

/* ---------------- COMPONENT ---------------- */

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navig = useRouter();
  const email = useSearchParams().get("email") || "";
  const [{ reset_token }, , removeCookie] = useCookies(["reset_token"]);
  if (!reset_token) {
    toast.error("Reset token is missing. Please try again.");
    navig.push("/forgot");
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PasswordForm>({
    resolver: zodResolver(passwordSchema),
    mode: "onChange",
  });

  const { mutate } = useMutation({
    mutationKey: ["new_pass"],
    mutationFn: ({
      email,
      reset_token,
      password,
      password_confirmation,
    }: {
      email: string;
      reset_token: string;
      password: string;
      password_confirmation: string;
    }) => {
      return changePasswordApi({
        email,
        reset_token,
        password,
        password_confirmation,
      });
    },
    onError: (err) => {
      toast.error(err.message ?? "Failed to complete this request");
    },
    onSuccess: (res) => {
      toast.success(res.message ?? "Success!");
      removeCookie("reset_token");
      // Redirect to login
      navig.push("/login");
    },
  });

  const onSubmit = (data: PasswordForm) => {
    mutate({
      email,
      reset_token,
      password: data.password,
      password_confirmation: data.confirmPassword,
    });
  };
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
        <h1 className="font-bold text-center text-3xl">Create new password</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
        {/* New Password */}
        <div className="space-y-2">
          <Label>New Password</Label>
          <InputGroup className="bg-background text-foreground">
            <InputGroupInput
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              {...register("password")}
            />
            <InputGroupButton
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((s) => !s)}
            >
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </InputGroupButton>
          </InputGroup>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label>Confirm Password</Label>
          <InputGroup className="bg-background text-foreground">
            <InputGroupInput
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              {...register("confirmPassword")}
            />
            <InputGroupButton
              type="button"
              aria-label={
                showConfirm ? "Hide confirm password" : "Show confirm password"
              }
              onClick={() => setShowConfirm((s) => !s)}
            >
              {showConfirm ? <EyeIcon /> : <EyeOffIcon />}
            </InputGroupButton>
          </InputGroup>
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={!isValid}
          className="w-full transition-all active:scale-95 mt-2 disabled:opacity-50"
        >
          Done
        </Button>
      </form>
    </div>
  );
}
