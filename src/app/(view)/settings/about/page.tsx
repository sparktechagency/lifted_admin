"use client";
import React, { useEffect, useState } from "react";
import { Editor } from "primereact/editor";
import { EditorTextChangeEvent } from "primereact/editor";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { howl, idk } from "@/lib/utils";
import { toast } from "sonner";
import { getPage, updatePage } from "@/lib/api/admin";
import { useCookies } from "react-cookie";

export default function Page() {
  const [text, setText] = useState<string>("");
  const [{ token }] = useCookies(["token"]);
  const { data, isPending: loading } = useQuery({
    queryKey: ["about_page"],
    queryFn: () => {
      return getPage("about", token);
    },
  });
  const { mutate, isPending } = useMutation({
    mutationKey: ["update_about"],
    mutationFn: () => {
      return updatePage("about", text, token);
    },
    onError: (err) => {
      toast.error(err.message ?? "Failed to complete this request");
    },
    onSuccess: (res: idk) => {
      toast.success(res.message ?? "Success!");
    },
  });
  useEffect(() => {
    if (!loading && data?.data?.value) {
      setText(data.data.value);
    }
  }, [loading, data]);
  return (
    <div className="!pb-12 !pr-6 !space-y-6">
      <h2 className="text-3xl font-bold">About Us</h2>
      <Editor
        value={text || ""}
        onTextChange={(e: EditorTextChangeEvent) => setText(e.htmlValue ?? "")}
        style={{ height: "320px" }}
      />
      <Button variant={"special"} disabled={isPending} onClick={() => mutate()}>
        {isPending ? "Saving..." : "Confirm Update"}
      </Button>
    </div>
  );
}
