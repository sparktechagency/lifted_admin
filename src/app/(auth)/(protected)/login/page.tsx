import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
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
        <h1 className="font-bold text-center text-3xl">Welcome back!</h1>
        <p className="text-lg text-center">
          Please enter email & password to continue
        </p>
      </div>

      <div className="w-full space-y-5">
        <div className="space-y-2">
          <Label>Email *</Label>
          <Input
            className="bg-background text-foreground"
            placeholder="william047@gmail.com"
          />
        </div>

        <div className="space-y-2">
          <Label>Password *</Label>
          <Input
            className="bg-background text-foreground"
            placeholder="********"
          />
        </div>

        <div className="w-full flex justify-between items-center pt-1">
          <div className="text-sm flex items-center gap-2">
            <Checkbox className="bg-background" />
            Remember password?
          </div>

          <Button
            type="button"
            asChild
            variant={"link"}
            className="text-sm text-[#AC48FF] font-semibold underline-offset-2 hover:underline"
          >
            <Link href={"/forgot"}>Forget Password?</Link>
          </Button>
        </div>

        <Button
          className="w-full text-background! font-bold border cursor-pointer hover:bg-background/10 transition-all active:scale-95 mt-2"
          variant={"ghost"}
          asChild
        >
          <Link href={"/"}>Log In</Link>
        </Button>
      </div>
    </div>
  );
}
