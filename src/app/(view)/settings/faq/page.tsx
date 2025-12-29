import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { EditIcon, PlusIcon, Trash2Icon } from "lucide-react";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <section className="">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold">FAQ Management</h3>
        <Suspense>
          <Button variant={"special"}>
            <PlusIcon />
            Add New FAQ
          </Button>
        </Suspense>
      </div>
      <Card>
        <CardContent className="flex justify-between items-center">
          <div className="space-y-2">
            <CardTitle>What is this? </CardTitle>
            <CardDescription>Sent to all users - 2 hours ago</CardDescription>
          </div>
          <div className="">
            <Button size={"icon"} variant={"ghost"}>
              <EditIcon />
            </Button>
            <Button size={"icon"} variant={"ghost"}>
              <Trash2Icon />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
