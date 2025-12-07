"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import {
  CheckboxGroup,
  CheckboxGroupItem,
  CheckboxGroupItemHeader,
  CheckboxGroupItemTitle,
  CheckboxGroupItemDescription,
  CheckboxGroupIndicator,
} from "@/components/kibo-ui/choicebox";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
const options = [
  {
    id: "1",
    label: "Option 1",
    subtitle: "(the first option)",
    description: "This is the first option",
  },
  {
    id: "2",
    label: "Option 2",
    subtitle: "(the second option)",
    description: "This is the second option",
  },
];

export default function Page() {
  const [selected, setSelected] = useState<string[]>([]);
  const handleChange = (value: string, checked: boolean) => {
    setSelected((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };
  const options = [
    {
      value: "option1",
      title: "Option 1",
      description: "First option",
    },
    {
      value: "option2",
      title: "Option 2",
      description: "Second option",
    },
    {
      value: "option3",
      title: "Option 3",
      description: "Third option",
    },
  ];
  return (
    <div className="">
      <Card className="h-full w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Create Reward Rule
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="gap-6">
            <div className="space-y-2">
              <Label htmlFor="monthly-price" className="text-sm font-medium">
                Rule Name
              </Label>
              <Input placeholder="Enter event description" />
            </div>
          </div>
          <div className="gap-6">
            <div className="space-y-2">
              <Label htmlFor="monthly-price" className="text-sm font-medium">
                Description
              </Label>
              <Textarea placeholder="Enter event description" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="monthly-price" className="text-sm font-medium">
                  Trigger Type
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Draft" />
                  </SelectTrigger>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearly-price" className="text-sm font-medium">
                  Condition Details
                </Label>
                <Input id="yearly-price" className="text-base" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="monthly-price" className="text-sm font-medium">
                  Reward Type
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Draft" />
                  </SelectTrigger>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearly-price" className="text-sm font-medium">
                  Reward Value
                </Label>
                <Input id="yearly-price" className="text-base" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="status" className="text-base font-medium">
              Status
            </Label>
            <Switch id="status" />
          </div>
        </CardContent>
        <CardFooter className="gap-2 justify-end">
          <Button variant={"outline"} asChild>
            <Link href={"/settings/reward"}>Cancel</Link>
          </Button>
          <Button variant={"special"}>Save Rule</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
