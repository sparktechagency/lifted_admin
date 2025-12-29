import { PlusIcon, SmileIcon } from "lucide-react";
import React, { Suspense } from "react";
import Add from "./add";
import { cookies } from "next/headers";
import { getSocials } from "@/lib/api/admin";
import Image from "next/image";
import { base_url } from "@/lib/utils";
import Link from "next/link";

export default async function Page() {
  const token = (await cookies()).get("token")?.value || "";
  const data = await getSocials(token);
  console.log(data.data);

  return (
    <section>
      <div className="flex justify-center items-center p-12 gap-6">
        {data.data.data.map((x) => (
          <Link
            key={x.id}
            href={x.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border-2 size-[200px] hover:bg-secondary border-dashed aspect-square flex flex-col justify-center items-center text-muted-foreground space-y-4 rounded-lg p-4 hover:">
              <Image
                src={`${base_url}/storage/${x.icon}`}
                height={100}
                width={100}
                alt="icon"
                unoptimized
              />
              <p className="text-sm">{x.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <Suspense>
          <Add />
        </Suspense>
      </div>
    </section>
  );
}
