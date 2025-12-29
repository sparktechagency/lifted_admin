"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { PlusIcon } from "lucide-react";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { createSocial } from "@/lib/api/admin";
import { toast } from "sonner";
import { idk } from "@/lib/utils";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export const platformSchema = z.object({
  name: z.string().min(1, "Platform name is required"),
  link: z.string().min(1, "Platform link is required"),
  thumbnail: z.array(z.instanceof(File)).min(1, "Thumbnail is required").max(1),
});

export type PlatformFormValues = z.infer<typeof platformSchema>;
export default function Add() {
  const [{ token }] = useCookies(["token"]);
  const navig = useRouter();
  const form = useForm<PlatformFormValues>({
    resolver: zodResolver(platformSchema),
    defaultValues: {
      name: "",
      link: "",
      thumbnail: [],
    },
  });
  const { mutate } = useMutation({
    mutationKey: ["social_add"],
    mutationFn: (body: FormData) => {
      return createSocial(token, body);
    },
    onError: (err) => {
      toast.error(err.message ?? "Failed to complete this request");
    },
    onSuccess: (res: idk) => {
      toast.success(res.message ?? "Success!");
      navig.refresh();
    },
  });
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const files = watch("thumbnail");

  const onSubmit = (data: PlatformFormValues) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("link", data.link);
    if (data.thumbnail && data.thumbnail.length > 0) {
      formData.append("icon", data.thumbnail[0]);
    }
    mutate(formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="xl:w-[50dvw]" variant="special">
          <PlusIcon />
          Add New Platform
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Add New Platform</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Thumbnail */}
          <Label>Course Thumbnail</Label>
          <Dropzone
            accept={{ "image/*": [] }}
            maxFiles={1}
            src={files}
            multiple={false}
            onDrop={(files) => setValue("thumbnail", files)}
            onError={console.error}
          >
            <DropzoneEmptyState />
            <DropzoneContent />
          </Dropzone>
          {errors.thumbnail && (
            <p className="text-sm text-red-500">{errors.thumbnail.message}</p>
          )}

          {/* Name */}
          <Label>Name</Label>
          <Input placeholder="Enter Platform Name" {...register("name")} />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}

          {/* Link */}
          <Label>Platform Link/Number</Label>
          <Input placeholder="Enter Platform Link" {...register("link")} />
          {errors.link && (
            <p className="text-sm text-red-500">{errors.link.message}</p>
          )}

          <DialogFooter>
            <Button type="submit" className="w-full" variant="special">
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
