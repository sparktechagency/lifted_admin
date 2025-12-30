"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  deleteAffirmation,
  deleteAffirmationCategory,
  deleteFAQ,
  deleteSocial,
} from "@/lib/api/admin";
import { AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useCookies } from "react-cookie";
import { toast } from "sonner";

export default function DeleteSocial({ id }: { id: string }) {
  const [{ token }] = useCookies(["token"]);
  const qcl = useQueryClient();
  const navig = useRouter();
  const { mutate, isPending } = useMutation({
    mutationKey: ["delete_social"],
    mutationFn: () => {
      return deleteSocial(id, token);
    },
    onError: (err) => {
      toast.error(err.message ?? "Failed to complete this request");
    },
    onSuccess: (res) => {
      toast.success(res.message ?? "Success!");
      navig.refresh();
    },
  });
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="text-destructive!" variant={"ghost"} size={"icon"}>
          <Trash2Icon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this FAQ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the FAQ.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              onClick={() => {
                mutate();
              }}
              disabled={isPending}
            >
              {isPending ? "Deleting..." : "Delete FAQ"}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
