"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2Icon, SearchIcon, SlidersIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sect from "./sect";

import { getUserSummary } from "@/lib/api/admin";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
export default function Page() {
  const [{ token }] = useCookies(["token"]);
  const [type, setType] = useState<"daily" | "monthly">("daily");
  const { data, isPending } = useQuery({
    queryKey: ["user-summary", type],
    queryFn: () => getUserSummary(token, type),
  });
  if (isPending) {
    return (
      <div className={`flex justify-center items-center h-24 mx-auto`}>
        <Loader2Icon className={`animate-spin`} />
      </div>
    );
  }
  return (
    <Card>
      <CardContent>
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">Summaries</h1>
          <Tabs
            onValueChange={(val) => {
              if (val === "1") {
                setType("daily");
              } else {
                setType("monthly");
              }
            }}
            defaultValue="1"
          >
            <TabsList>
              <TabsTrigger value="1">Daily Summary</TabsTrigger>
              <TabsTrigger value="2">Monthly Summary</TabsTrigger>
            </TabsList>
            <TabsContent value="2">
              <Sect data={data?.summary} />
            </TabsContent>
          </Tabs>
          {/* <div className="flex gap-4">
            <InputGroup>
              <InputGroupInput placeholder="Search passengers by name,email, or phone...." />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
            <Button variant={"outline"} className="px-8!">
              <SlidersIcon /> Filter
            </Button>
          </div> */}
          <Table>
            <TableHeader className="bg-secondary">
              <TableRow>
                <TableHead className="text-center">User</TableHead>
                <TableHead className="text-center">Last login</TableHead>
                <TableHead className="text-center">
                  Total Cunsumed Calories
                </TableHead>
                <TableHead className="text-center">Workout Notes</TableHead>
                <TableHead className="text-center">Burn Calories</TableHead>
                <TableHead className="text-center">
                  Drink Water (Glass)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data.map((summary, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <TableRow key={i}>
                  <TableCell className="text-center font-medium flex flex-row gap-2 justify-center items-center">
                    <Avatar>
                      <AvatarImage
                        src={
                          summary.user.avatar ??
                          "https://avatar.iran.liara.run/public"
                        }
                      />
                      <AvatarFallback>UI</AvatarFallback>
                    </Avatar>
                    {summary?.user?.name}
                  </TableCell>
                  <TableCell className="text-center">
                    {summary?.user?.last_login}
                  </TableCell>
                  <TableCell className="text-center">
                    {summary?.stats?.calories_consumed}
                  </TableCell>
                  <TableCell className="text-center">
                    {summary?.stats?.workouts_completed}
                  </TableCell>
                  <TableCell className="text-center">
                    {summary?.stats?.calories_burned}
                  </TableCell>
                  <TableCell className="text-center">
                    {summary?.stats?.water_glasses}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
