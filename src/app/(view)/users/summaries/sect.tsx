import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Sect({ data }: { data: any }) {
  return (
    <div className="w-full grid lg:grid-cols-4 gap-6 mt-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Calories Logged</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">{data?.total_calories_consumed}</h2>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Calories Burned</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">{data?.total_calories_burned}</h2>
        </CardContent>
        {/* <CardFooter>
          <span className="text-blue-6000 pr-2">+12% </span> from last month
        </CardFooter> */}
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Workouts Completed</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">{data?.total_workouts_completed}</h2>
        </CardContent>
        {/* <CardFooter>
          <span className="text-blue-600 pr-2">+12% </span> from last month
        </CardFooter> */}
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Drink Water (Glass)</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl">{data?.total_water_consumed_ml}</h2>
        </CardContent>
        {/* <CardFooter>
          <span className="text-blue-600 pr-2">+12% </span> from last month
        </CardFooter> */}
      </Card>
    </div>
  );
}
