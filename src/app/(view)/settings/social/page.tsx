import { PlusIcon, SmileIcon, Trash2Icon } from "lucide-react";
import React, { Suspense } from "react";
import Add from "./add";
import { cookies } from "next/headers";
import { getSocials } from "@/lib/api/admin";
import Image from "next/image";
import { base_url } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DeleteSocial from "./delete";

export default async function Page() {
  const token = (await cookies()).get("token")?.value || "";
  const data = await getSocials(token);

  return (
    <section>
      <div className="flex justify-center items-center p-12 gap-6">
        {data?.data?.data?.map((x) => (
          <div
            key={x.id}
            className="border-2 size-[200px]  border-dashed aspect-square flex flex-col justify-center items-center text-muted-foreground space-y-4 rounded-lg p-4 hover:"
          >
            <Link href={x.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={`${base_url}/storage/${x.icon}`}
                height={100}
                width={100}
                alt="icon"
                unoptimized
              />
            </Link>
            <p className="text-sm">{x.name}</p>
            <DeleteSocial id={String(x.id)} />
          </div>
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
