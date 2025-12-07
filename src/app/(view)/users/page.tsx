import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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

export default function Page() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">All Users</h1>
      <p className="">Search and manage users accounts</p>
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
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Subscription</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Verification</TableHead>
            <TableHead className="text-center">Registration</TableHead>
            <TableHead className="text-center">Actions</TableHead>
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
            <TableCell className="text-center">example@gmail.com</TableCell>
            <TableCell className="text-center">TINDER PLUS</TableCell>
            <TableCell className="text-center ">
              <Status status="online" className="mx-auto">
                <StatusIndicator />
                <StatusLabel>Active</StatusLabel>
              </Status>
            </TableCell>
            <TableCell className="text-center ">
              <Status status="online" className="mx-auto">
                <StatusIndicator />
                <StatusLabel>Verified</StatusLabel>
              </Status>
            </TableCell>
            <TableCell className="text-center">Jan 12, 2023</TableCell>
            <TableCell className="text-center space-x-2">
              <Button
                variant={"outline"}
                size={"icon"}
                className="cursor-pointer"
                asChild
              >
                <Link href={"/users/id"}>
                  <EyeIcon />
                </Link>
              </Button>
              <Button variant={"outline"} size={"icon"}>
                <BanIcon />
              </Button>
              <Button variant={"outline"} size={"icon"}>
                <EditIcon />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
