"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  BanIcon,
  EditIcon,
  EyeIcon,
  Loader2Icon,
  PlusIcon,
  SearchIcon,
  SlidersIcon,
  TrashIcon,
} from "lucide-react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Add from "./add";
import { useQuery } from "@tanstack/react-query";
import { getAffirmationCategories } from "@/lib/api/admin";
import { useCookies } from "react-cookie";

export default function Page() {
  const [{ token }] = useCookies(["token"]);
  const [dateFilter, setDateFilter] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const { data, isPending } = useQuery({
    queryKey: ["affirmation_categories", dateFilter],
    queryFn: () => getAffirmationCategories(token, dateFilter),
  });
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 px-0 md:px-6 lg:px-0 overflow-x-hidden">
      {/* Main Grid */}
      <div className="w-full">
        {/* Traffic Card */}
        <Card className="lg:h-[400px] flex flex-col">
          <CardHeader className="flex flex-wrap justify-between items-center gap-3">
            <CardTitle className="text-2xl">Affirmation Categories</CardTitle>
            <Add />
          </CardHeader>
          <CardContent className="flex-1 space-y-6">
            <div className="flex justify-end gap-4">
              {/* <InputGroup>
              <InputGroupInput placeholder="Search passengers by name,email, or phone...." />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup> */}

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="px-8!">
                    <SlidersIcon /> Filter
                  </Button>
                </PopoverTrigger>

                <PopoverContent>
                  <Input
                    type="date"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                  />
                </PopoverContent>
              </Popover>
            </div>
            {isPending ? (
              <div className={`flex justify-center items-center h-24 mx-auto`}>
                <Loader2Icon className={`animate-spin`} />
              </div>
            ) : (
              <Table>
                <TableHeader className="bg-secondary">
                  <TableRow>
                    <TableHead className="text-center">Category Name</TableHead>
                    <TableHead className="text-center">Description</TableHead>
                    <TableHead className="text-center">
                      Total Messages
                    </TableHead>
                    <TableHead className="text-center">Created Date</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.data?.data?.map((category) => (
                    <TableRow key={category.id}>
                      <TableCell className="text-center">
                        {category.name}
                      </TableCell>
                      <TableCell className="text-center font-medium flex flex-row gap-2 justify-center items-center">
                        {category.description}
                      </TableCell>
                      <TableCell className="">
                        <div className="text-center font-medium flex flex-row gap-2 justify-center items-center">
                          <Badge>{category.affirmations_count}</Badge>
                        </div>
                      </TableCell>
                      <TableCell className="text-center ">
                        {new Date(category.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-center space-x-2">
                        <Button variant={"outline"} size={"icon"}>
                          <EditIcon />
                        </Button>
                        <Button variant={"outline"} size={"icon"}>
                          <TrashIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
