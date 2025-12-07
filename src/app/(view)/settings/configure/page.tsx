import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  BellRingIcon,
  CalculatorIcon,
  CloudUploadIcon,
  DatabaseIcon,
  RefreshCcwIcon,
} from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">System Configuration</h3>
        <Button variant={"special"}>Save all changes</Button>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <Card>
          <CardHeader className="flex items-center gap-4">
            <div className="rounded-full p-4 bg-sky-200 w-fit text-sky-700">
              <CalculatorIcon />
            </div>
            <CardTitle className="text-xl">TDEE Calculation Formula</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CardDescription>
              Choose the metabolic formula used to calculate user daily calorie
              targets.
            </CardDescription>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Harris-Benedict" />
              </SelectTrigger>
            </Select>
            <div className="p-4 text-sm bg-secondary rounded-lg text-muted-foreground">
              Note: Mifflin-St Jeor is generally considered more accurate for
              modern lifestyles.
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-4">
            <div className="rounded-full p-4 bg-purple-200 w-fit text-purple-700">
              <BellRingIcon />
            </div>
            <CardTitle className="text-xl">Notification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="flex items-center border-0!">
              <div className="w-full flex-1">
                <AlertTitle>Daily Push Notification</AlertTitle>
                <AlertDescription>
                  Enable global sending of affirmations
                </AlertDescription>
              </div>
              <Switch />
            </Alert>
            <Alert className="flex items-center border-0!">
              <div className="w-full flex-1">
                <AlertTitle>Random Schedulling Engine</AlertTitle>
                <AlertDescription>
                  Send at random times (9am - 6pm)
                </AlertDescription>
              </div>
              <Switch />
            </Alert>
            <div className="p-4 bg-secondary rounded-lg text-muted-foreground text-xl font-semibold text-center">
              09:00 AM
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-4">
            <div className="rounded-full p-4 bg-green-200 w-fit text-green-700">
              <DatabaseIcon />
            </div>
            <CardTitle className="text-xl">Data Processing & Logs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardHeader className="text-center!">
                  <CardDescription>Calories</CardDescription>
                  <CardTitle className="text-xl">85k</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center!">
                  <CardDescription>Workouts</CardDescription>
                  <CardTitle className="text-xl">85k</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center!">
                  <CardDescription>Sync</CardDescription>
                  <CardTitle className="text-xl text-green-500">OK</CardTitle>
                </CardHeader>
              </Card>
            </div>
            <Button className="w-full bg-orange-100! text-orange-600 border border-orange-600/50">
              <RefreshCcwIcon />
              Force Recalculate Daily Summaries
            </Button>
            <Button className="w-full bg-orange-100! text-orange-600 border border-orange-600/50">
              <RefreshCcwIcon />
              Force Recalculate Monthly Summaries
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-4">
            <div className="rounded-full p-4 bg-zinc-200 w-fit text-zinc-700">
              <CloudUploadIcon />
            </div>
            <CardTitle className="text-xl">Data Retention & Backup</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Label>Log Retention Period</Label>
            <div className="">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="12 Months (Recommended)" />
                </SelectTrigger>
              </Select>
            </div>

            <Alert className="flex items-center border-0!">
              <div className="w-full flex-1">
                <AlertTitle>Auto Backup (Weekly)</AlertTitle>
                <AlertDescription>
                  Last backup: Oct 20, 03:00 AM
                </AlertDescription>
              </div>
              <Switch />
            </Alert>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
