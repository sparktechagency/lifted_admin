import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon } from "lucide-react";
import React from "react";

export default function Add() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"special"}>
          <PlusIcon />
          Add New FAQ
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> Add New FAQ </DialogTitle>
        </DialogHeader>
        <div className="">
          <Input />
          <Textarea />
        </div>
      </DialogContent>
    </Dialog>
  );
}
