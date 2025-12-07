import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  EditIcon,
  EyeIcon,
  PlusIcon,
  SearchIcon,
  SlidersIcon,
  Trash2Icon,
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
import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 px-0 md:px-6 lg:px-0 overflow-x-hidden">
      {/* Main Grid */}
      <div className="w-full">
        {/* Traffic Card */}
        <Card className="">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-2xl">Reward Systems</CardTitle>
            <Button className="w-fit" variant={"special"} asChild>
              <Link href={"/settings/reward/create"}>
                <PlusIcon />
                Create New Rule
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="flex-1 space-y-6">
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
                  <TableHead className="text-center">Rule Name</TableHead>
                  <TableHead className="text-center">Reward Type</TableHead>
                  <TableHead className="text-center">
                    Trigger Condition
                  </TableHead>
                  <TableHead className="text-center">Reward Value</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">
                    7 day login streak Bonus
                  </TableCell>
                  <TableCell className="text-center ">Gift a Boost</TableCell>
                  <TableCell className="text-center ">
                    User logs in 7 consecutive days
                  </TableCell>
                  <TableCell className="text-center ">1 Boost</TableCell>
                  <TableCell className="text-center flex justify-center items-center">
                    <Status status="online">
                      <StatusIndicator />
                      <StatusLabel>Active</StatusLabel>
                    </Status>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className=" flex gap-2 justify-center">
                      <Button variant="outline" size={"icon"}>
                        <EditIcon />
                      </Button>
                      <Button variant="outline" size={"icon"}>
                        <Trash2Icon />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
