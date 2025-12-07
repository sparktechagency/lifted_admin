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
        <h1 className="font-bold text-center text-3xl">Forgot password</h1>
        <p className="text-lg text-center">
          We will sent a verification code to william***@gmail.com
        </p>
      </div>

      <div className="w-full space-y-5">
        <div className="space-y-2">
          <Label>Submit your mail *</Label>
          <Input
            className="bg-background text-foreground"
            placeholder="william047@gmail.com"
          />
        </div>

        <Button
          className="w-full text-background! font-bold border cursor-pointer hover:bg-background/10 transition-all active:scale-95 mt-2"
          variant={"ghost"}
          asChild
        >
          <Link href={"/verify"}>Submit</Link>
        </Button>
      </div>
    </div>
  );
}
