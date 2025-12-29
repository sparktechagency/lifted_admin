"use client";
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

// import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createAffirmation, getAffirmationCategories } from "@/lib/api/admin";
import { toast } from "sonner";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Add() {
  const [{ token }] = useCookies(["token"]);
  const [selectedCat, setSelectedCat] = useState<string | undefined>();
  const [text, setText] = useState("");
  const navig = useRouter();
  const { data, isPending } = useQuery({
    queryKey: ["affirmation_categories"],
    queryFn: () => getAffirmationCategories(token),
  });
  const { mutate } = useMutation({
    mutationKey: ["add_aff"],
    mutationFn: () => {
      return createAffirmation(text, token, selectedCat);
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"special"}>
          <PlusIcon />
          Add Messages
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Affirmation Message</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* <Dropzone
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
                  </Dropzone> */}
          <div className="grid grid-cols-1 gap-2">
            <div className="space-y-3">
              <Label>Category</Label>
              <Select
                onValueChange={(value) => setSelectedCat(value)}
                value={selectedCat}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {data?.data.data.map((category) => (
                    <SelectItem key={category.id} value={String(category.id)}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* <div className="space-y-3">
                      <Label>Tone</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Tone" />
                        </SelectTrigger>
                      </Select>
                    </div> */}
          </div>
          <Label>Message Text</Label>
          <Textarea value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>
          <Button
            variant={"special"}
            onClick={() => {
              mutate();
            }}
            disabled={isPending}
          >
            {isPending ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
