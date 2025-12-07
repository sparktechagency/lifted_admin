import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Trail() {
  return (
    <div className="p-4 space-y-6">
      <Card className="border-l-2! border-0 rounded-none border-purple-500 gap-2">
        <CardHeader>
          <CardDescription>May 10, 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl">Admin: Jennifer Smith</CardTitle>
        </CardContent>
        <CardFooter>
          <CardDescription>
            Action: Viewed user profile • IP: 192.168.1.105
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
