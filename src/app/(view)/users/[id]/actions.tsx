import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TriangleAlertIcon } from "lucide-react";

import React from "react";

export default function Actions() {
  return (
    <div className="space-y-4 pt-4">
      <Label className="text-lg">Account Status</Label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="suspended">Suspended</SelectItem>
          <SelectItem value="deactivated">Deactivated</SelectItem>
        </SelectContent>
      </Select>
      <Label className="text-lg">Send Warning</Label>
      <Card>
        <CardContent className="flex items-center gap-2 font-semibold justify-center text-muted-foreground">
          <TriangleAlertIcon />
          <h4>Send Warning Message</h4>
        </CardContent>
      </Card>
      <Label className="text-lg">Send Warning</Label>
      <Card>
        <CardContent className="flex items-center gap-2 font-semibold justify-center text-muted-foreground">
          <TriangleAlertIcon />
          <h4>Edit User Content</h4>
        </CardContent>
      </Card>
      <div className="space-x-4">
        <Button
          variant={"outline"}
          className="bg-gradient-to-t text-background! cursor-pointer active:scale-95 from-[#05C3DD] to-[#B14EFFaa]"
        >
          Save Changes
        </Button>
        <Button variant={"outline"}>Cancel</Button>
      </div>
    </div>
  );
}
