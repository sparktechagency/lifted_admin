import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Sect({ data }: { data?: any }) {
  return (
    <div className="w-full grid lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">{data?.total_users ?? "N/A"}</h2>
        </CardContent>
        {/* <CardFooter className="text-xs lg:text-base">
          <span className="text-green-600 pr-2">+12% </span> from last month
        </CardFooter> */}
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Active Users</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">{data?.active_users ?? "N/A"}</h2>
        </CardContent>
        {/* <CardFooter>
          <span className="text-blue-6000 pr-2">+12% </span> from last month
        </CardFooter> */}
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Workouts Logged Today</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">{data?.workouts_last_30_days ?? "N/A"}</h2>
        </CardContent>
        {/* <CardFooter>
          <span className="text-blue-600 pr-2">+12% </span> from last month
        </CardFooter> */}
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Meals Last 30 Days </CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">{data?.meals_last_30_days ?? "N/A"}</h2>
        </CardContent>
        {/* <CardFooter>
          <span className="text-blue-600 pr-2">+12% </span> from last month
        </CardFooter> */}
      </Card>
    </div>
  );
}
