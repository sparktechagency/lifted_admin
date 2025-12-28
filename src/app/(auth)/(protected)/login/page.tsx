"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginApi } from "@/lib/api/auth";
import { idk } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Page() {
  const [, setCookie] = useCookies(["token"]);
  const navig = useRouter();
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: (body: LoginForm) => {
      return loginApi(body);
    },
    onError: (err) => {
      toast.error(err.message ?? "Failed to complete this request");
    },
    onSuccess: (res) => {
      toast.success(res.message ?? "Success!");
      setCookie("token", res.data.access_token);
      navig.push("/");
    },
  });

  const onSubmit = (values: LoginForm) => {
    mutate(values);
  };

  return (
    <div className="h-full w-full px-6">
      <div className="grid place-items-center h-1/3 mb-4">
        <Image
          src="/logo-clean.png"
          height={800}
          width={1200}
          alt="logo"
          className="w-[200px]"
        />
      </div>

      <p className="text-sm text-muted-foreground text-center mb-6">
        Please enter email & password to continue
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label>Email *</Label>
                <FormControl>
                  <Input {...field} placeholder="william047@gmail.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <Label>Password *</Label>
                  <Link
                    href="/forgot"
                    className="text-sm text-amber-500/70 font-semibold hover:underline"
                  >
                    Forget Password?
                  </Link>
                </div>
                <FormControl>
                  <Input {...field} type="password" placeholder="********" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full font-bold border transition-all active:scale-95"
            variant="special"
            disabled={isPending}
          >
            {isPending ? "Logging in..." : "Login to your account"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
