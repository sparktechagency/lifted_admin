"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { PlusIcon, SmileIcon } from "lucide-react";
import React, { useState } from "react";

export default function Page() {
  const [files, setFiles] = useState<File[] | undefined>();
  const handleDrop = (files: File[]) => {
    console.log(files);
    setFiles(files);
  };
  return (
    <section>
      <div className="flex justify-center items-center p-12 gap-6">
        {Array(6)
          .fill("")
          .map((_, i: number) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={i}
              className="border-2 size-[200px] border-dashed aspect-square flex flex-col justify-center items-center text-muted-foreground space-y-4"
            >
              <SmileIcon className="rotate-45" />
              <p className="text-sm">Smile often</p>
            </div>
          ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"lg"} className="xl:w-[50dvw]" variant={"special"}>
              <PlusIcon />
              Add New Platform
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center">
                Add New Platform
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Label>Course Thumbnail</Label>
              <Dropzone
                accept={{ "image/*": [] }}
                maxFiles={1}
                // maxSize={1024 * 1024 * 10}
                // minSize={1024}
                onDrop={handleDrop}
                onError={console.error}
                src={files}
              >
                <DropzoneEmptyState />
                <DropzoneContent />
              </Dropzone>
              <Label>Name</Label>
              <Input placeholder="Enter Platform Name" />
              <Label>Platform Link/Number</Label>
              <Input placeholder="Enter Platform Link" />
            </div>
            <DialogFooter>
              <Button className="w-full" variant={"special"}>
                Add
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
