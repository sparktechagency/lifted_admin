import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Sect from "./sect";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 px-0 md:px-6 lg:px-0 overflow-x-hidden">
      <Sect />
      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-6 w-full">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Recent Activity Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">User</TableHead>
                  <TableHead className="text-center">Activity</TableHead>
                  <TableHead className="text-center">Detail</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center font-medium flex flex-row gap-2 justify-center items-center">
                    <Avatar>
                      <AvatarImage
                        src={"https://avatar.iran.liara.run/public"}
                      />
                      <AvatarFallback>UI</AvatarFallback>
                    </Avatar>
                    John Doe
                  </TableCell>
                  <TableCell>
                    <div className="text-center font-medium flex flex-row gap-2 justify-center items-center">
                      <Badge className="bg-amber-200 text-amber-600">
                        Custom Affirmation
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center font-medium flex flex-row gap-2 justify-center items-center">
                      Added : I am Improving Daily
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
