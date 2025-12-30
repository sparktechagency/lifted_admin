import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { EditIcon, PlusIcon, Trash2Icon } from "lucide-react";
import React, { Suspense } from "react";
import Add from "./add";
import { cookies } from "next/headers";
import { getFAQs } from "@/lib/api/admin";
import EditFAQ from "./edit";
import Delete from "./delete";
import DeleteFAQ from "./delete";

export default async function Page() {
  const token = (await cookies()).get("token")?.value || "";
  const data = await getFAQs(token);

  return (
    <section className="">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold">FAQ Management</h3>
        <Suspense>
          <Add />
        </Suspense>
      </div>
      <div className="space-y-4">
        {data.data.data.map((faq) => (
          <Card key={faq.id}>
            <CardContent className="flex justify-between items-center">
              <div className="space-y-2">
                <CardTitle>{faq.question}</CardTitle>
                <CardDescription>{faq.answer}</CardDescription>
              </div>
              <div className="">
                <Suspense>
                  <EditFAQ data={faq} />
                  <DeleteFAQ id={String(faq.id)} />
                </Suspense>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
