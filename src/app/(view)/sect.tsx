import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Sect() {
  return (
    <div className="w-full grid lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">12,847</h2>
        </CardContent>
        <CardFooter className="text-xs lg:text-base">
          <span className="text-green-600 pr-2">+12% </span> from last month
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Workouts Logged Today</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">247</h2>
        </CardContent>
        {/* <CardFooter>
          <span className="text-blue-600 pr-2">+12% </span> from last month
        </CardFooter> */}
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Calorie Entries Today</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">890</h2>
        </CardContent>
        {/* <CardFooter>
          <span className="text-blue-600 pr-2">+12% </span> from last month
        </CardFooter> */}
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Affirmation Delivered</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">12,847</h2>
        </CardContent>
        {/* <CardFooter>
          <span className="text-blue-6000 pr-2">+12% </span> from last month
        </CardFooter> */}
      </Card>
    </div>
  );
}
