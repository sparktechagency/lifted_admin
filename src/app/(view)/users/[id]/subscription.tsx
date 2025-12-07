import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { CircleAlertIcon, GiftIcon } from "lucide-react";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
export default function Subscription() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center ">
        <h2 className="text-2xl">Current Plan</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="special">
              <GiftIcon />
              Grant Free Subscription
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex justify-start items-center gap-2">
                <GiftIcon />
                Grant Complimentary Plan
              </DialogTitle>
            </DialogHeader>
            <div className="">
              <Alert className="bg-blue-100 text-blue-700" variant="default">
                <CircleAlertIcon />
                <AlertDescription className="text-blue-700">
                  This action will grant a paid subscription to the user without
                  charging any fees. This will be logged in the audit trail.
                </AlertDescription>
              </Alert>
            </div>
            <div className="">
              <h4 className="font-semibold pb-3">Select Plan Tier</h4>
              <div className="grid grid-cols-3 gap-4">
                <Button variant={"outline"}>Plus</Button>
                <Button variant={"outline"}>Premium</Button>
                <Button variant={"outline"}>Premium Plus</Button>
              </div>
              <h4 className="font-semibold py-3">Duration</h4>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1_week">1 Week</SelectItem>
                  <SelectItem value="2_week">2 Weeks</SelectItem>
                  <SelectItem value="1_month">1 Month</SelectItem>
                </SelectContent>
              </Select>
              <h4 className="font-semibold py-3">Message</h4>
              <Textarea />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant={"outline"}>Cancel</Button>
              </DialogClose>
              <Button variant={"special"}>Grant Premium Plus</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className=" p-4 border rounded-lg">
        <div className="w-full flex justify-between items-center">
          <p className="font-semibold">Premium Plus</p>
          <Status status="online" className="" variant={"secondary"}>
            <StatusIndicator />
            <StatusLabel>Active</StatusLabel>
          </Status>
        </div>
        <p className="text-sm">Renews on: June 15, 2023</p>
      </div>
      <Separator />
      <h2 className="text-2xl">Subscription History</h2>
      <div className="space-y-12">
        <div className="">
          <p className="text-lg font-semibold">Premium Plus</p>
          <p className="text-sm">March 15, 2024 - April 15, 2025</p>
        </div>
        <div className="">
          <p className="text-lg font-semibold">Premium</p>
          <p className="text-sm">March 15, 2024 - April 15, 2025</p>
        </div>
        <div className="">
          <p className="text-lg font-semibold">Plus</p>
          <p className="text-sm">March 15, 2024 - April 15, 2025</p>
        </div>
      </div>
    </div>
  );
}
