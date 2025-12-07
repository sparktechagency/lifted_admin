import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Interaction() {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl">Reports by User</h2>
      <Card className="border-l-2! border-0 rounded-none border-purple-500 gap-2">
        <CardHeader>
          <CardDescription>May 10, 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl">
            Reported User: Sarah Miller
          </CardTitle>
        </CardContent>
        <CardFooter>
          <CardDescription>Reason: Inappropriate message</CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
