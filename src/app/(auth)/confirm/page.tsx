import { Button } from "@/components/ui/button";

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
        <h1 className="font-bold text-center text-3xl">Create new password</h1>
        <p className="text-center mt-8 mb-16">
          Your password has been updated, please change your password regularly
          to avoid this happening.
        </p>
      </div>

      <Button
        className="w-full text-background! font-bold border cursor-pointer hover:bg-background/10 transition-all active:scale-95 mt-2"
        variant={"ghost"}
        asChild
      >
        <Link href={"/"}>Done</Link>
      </Button>
    </div>
  );
}
