import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { EditIcon, SearchIcon, SlidersIcon, TrashIcon } from "lucide-react";
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

import { Suspense } from "react";
import Add from "./add";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { getAffirmations } from "@/lib/api/admin";
import { useCookies } from "react-cookie";
import { cookies } from "next/headers";
import Edit from "./edit";
import Delete from "./delete";

export default async function Page() {
  const token = (await cookies()).get("token")?.value || "";
  const { data } = await getAffirmations(token);
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 px-0 md:px-6 lg:px-0 overflow-x-hidden">
      {/* Main Grid */}
      <div className="w-full">
        {/* Traffic Card */}
        <Card className="lg:h-[400px] flex flex-col">
          <CardHeader className="flex flex-wrap justify-between items-center gap-3">
            <CardTitle className="text-2xl">Affirmation Messages</CardTitle>
            <Suspense>
              <Add />
            </Suspense>
          </CardHeader>
          <CardContent className="flex-1 space-y-6">
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
                  <TableHead className="text-center">Message Text</TableHead>
                  <TableHead className="text-center">Category</TableHead>
                  {/* <TableHead className="text-center">Tone</TableHead> */}
                  <TableHead className="text-center">Created Date</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.data?.map((message) => (
                  <TableRow key={message.id}>
                    <TableCell className="text-center">
                      {message.text}
                    </TableCell>
                    <TableCell className="text-center font-medium flex flex-row gap-2 justify-center items-center">
                      <div className="text-center font-medium flex flex-row gap-2 justify-center items-center">
                        {message?.category ? (
                          <Badge>{message?.category?.name}</Badge>
                        ) : (
                          "N/A"
                        )}
                      </div>
                    </TableCell>
                    {/* <TableCell className="">
                      <div className="text-center font-medium flex flex-row gap-2 justify-center items-center">
                        Direct
                      </div>
                    </TableCell> */}
                    <TableCell className="text-center ">
                      {new Date(message.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-center space-x-2">
                      <Suspense>
                        <Edit
                          id={String(message.id)}
                          dataset={{
                            text: message.text,
                            category_id: message.category_id,
                          }}
                        />
                        <Delete id={String(message.id)} />
                      </Suspense>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
