"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getUserCalories, getUserWorkout } from "@/lib/api/admin";
import { useQuery } from "@tanstack/react-query";
import { Loader2Icon, SearchIcon, SlidersIcon } from "lucide-react";
import { useState } from "react";
import { useCookies } from "react-cookie";

export default function Page() {
  const [{ token }] = useCookies(["token"]);

  // ✅ store string, not Date
  const [dateFilter, setDateFilter] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  const { data, isPending } = useQuery({
    queryKey: ["user_workout", dateFilter],
    queryFn: () => getUserWorkout(token, dateFilter),
    enabled: !!token,
  });

  return (
    <Card>
      <CardContent>
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">Workout Logs</h1>

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
            <div className="flex justify-center items-center h-24">
              <Loader2Icon className="animate-spin" />
            </div>
          ) : (
            <Table>
              <TableHeader className="bg-secondary">
                <TableRow>
                  <TableHead className="text-center">User</TableHead>
                  <TableHead className="text-center">Date</TableHead>
                  <TableHead className="text-center">Calorie Burned</TableHead>
                  <TableHead className="text-center">Duration</TableHead>
                  {/* <TableHead className="text-center">Logged At</TableHead> */}
                </TableRow>
              </TableHeader>

              <TableBody>
                {data?.data?.map((x, i) => (
                  <TableRow key={`${x.user_id}-${i}`}>
                    <TableCell className="flex gap-2 justify-center items-center">
                      {/* <Avatar>
                        <AvatarImage src="https://avatar.iran.liara.run/public" />
                        <AvatarFallback>UI</AvatarFallback>
                      </Avatar> */}
                      {x.user.name ?? "Undefined User"}
                    </TableCell>

                    <TableCell className="text-center">{dateFilter}</TableCell>
                    <TableCell className="text-center">
                      {x.total_burned}
                    </TableCell>
                    <TableCell className="text-center">
                      {x.total_duration} mins
                    </TableCell>
                    {/* <TableCell className="text-center">
                      {new Date(x.).toLocaleString()}
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
