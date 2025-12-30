"use client";

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
import { EditIcon, PlusIcon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { createFAQ, updateFAQ } from "@/lib/api/admin";
import { toast } from "sonner";
import { idk } from "@/lib/utils";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

/* ---------------- schema ---------------- */

const faqSchema = z.object({
  question: z.string().min(5, "Question must be at least 5 characters"),
  answer: z.string().min(10, "Answer must be at least 10 characters"),
});

type FaqFormValues = z.infer<typeof faqSchema>;

/* ---------------- component ---------------- */

export default function EditFAQ({ data }: { data: any }) {
  const [{ token }] = useCookies(["token"]);
  const navig = useRouter();
  const form = useForm<FaqFormValues>({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      question: data.question,
      answer: data.answer,
    },
  });
  const { mutate, isPending } = useMutation({
    mutationKey: ["edit_faq"],
    mutationFn: (dataset: FaqFormValues) => {
      return updateFAQ(data.id, token, dataset.question, dataset.answer);
    },
    onError: (err) => {
      toast.error(err.message ?? "Failed to complete this request");
    },
    onSuccess: (res: idk) => {
      toast.success(res.message ?? "Success!");
      navig.refresh();
    },
  });

  const onSubmit = (values: FaqFormValues) => {
    console.log(values);
    mutate(values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <EditIcon />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit FAQ</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Question */}
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the question" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Answer */}
            <FormField
              control={form.control}
              name="answer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Answer</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write the answer"
                      className="resize-none"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant={"special"}
              className="w-full"
              disabled={form.formState.isSubmitting || isPending}
            >
              {isPending ? "Editing..." : "Update FAQ"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
