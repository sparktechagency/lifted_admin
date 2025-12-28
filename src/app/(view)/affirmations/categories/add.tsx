import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function Add() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"special"}>
          <PlusIcon />
          Add Reason
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Label>Name</Label>
          <Input />
          <Label>Description</Label>
          <Textarea />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>
          <Button variant={"special"}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
