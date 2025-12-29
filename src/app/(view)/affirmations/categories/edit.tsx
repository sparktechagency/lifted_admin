"use client";
import React, { useState } from "react";
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
import { EditIcon, PlusIcon } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createAffirmationCategory,
  updateAffirmationCategory,
} from "@/lib/api/admin";
import { toast } from "sonner";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export default function Edit({
  data,
}: {
  data: { id: string; name: string; description: string };
}) {
  const [{ token }] = useCookies(["token"]);
  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);
  const qcl = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["update_cat"],
    mutationFn: ({
      name,
      description,
    }: {
      name: string;
      description: string;
    }) => {
      return updateAffirmationCategory(
        { id: data.id, name, description },
        token
      );
    },
    onError: (err) => {
      toast.error(err.message ?? "Failed to complete this request");
    },
    onSuccess: (res) => {
      toast.success(res.message ?? "Success!");
      qcl.invalidateQueries({ queryKey: ["affirmation_categories"] });
    },
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <EditIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Label>Name</Label>
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Label>Description</Label>
          <Textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>
          <Button
            variant={"special"}
            disabled={isPending || name.length === 0}
            onClick={() => {
              mutate({ name, description });
            }}
          >
            {isPending ? "Adding..." : "Update Category"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
