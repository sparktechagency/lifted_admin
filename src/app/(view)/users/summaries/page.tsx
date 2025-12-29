import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";
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
import {
  BanIcon,
  EditIcon,
  EyeIcon,
  SearchIcon,
  SlidersIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sect from "./sect";
import { cookies } from "next/headers";
import { getUserSummary } from "@/lib/api/admin";
export default async function Page() {
  const token = (await cookies()).get("token")?.value || "";
  const data = getUserSummary(token);
  return (
    <Card>
      <CardContent>
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">Summaries</h1>
          <Tabs defaultValue="1">
            <TabsList>
              <TabsTrigger value="1">Daily Summary</TabsTrigger>
              <TabsTrigger value="2">Monthly Summary</TabsTrigger>
            </TabsList>
            <TabsContent value="2">
              <Sect />
            </TabsContent>
          </Tabs>
          <div className="flex gap-4">
            <InputGroup>
              <InputGroupInput placeholder="Search passengers by name,email, or phone...." />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
            <Button variant={"outline"} className="px-8!">
              <SlidersIcon /> Filter
            </Button>
          </div>
          <Table>
            <TableHeader className="bg-secondary">
              <TableRow>
                <TableHead className="text-center">User</TableHead>
                <TableHead className="text-center">Date</TableHead>
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
              <TableRow>
                <TableCell className="text-center font-medium flex flex-row gap-2 justify-center items-center">
                  <Avatar>
                    <AvatarImage src={"https://avatar.iran.liara.run/public"} />
                    <AvatarFallback>UI</AvatarFallback>
                  </Avatar>
                  John Doe
                </TableCell>
                <TableCell className="text-center">Jan 12, 2023</TableCell>
                <TableCell className="text-center">345</TableCell>
                <TableCell className="text-center">345</TableCell>
                <TableCell className="text-center">455</TableCell>
                <TableCell className="text-center">5</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
