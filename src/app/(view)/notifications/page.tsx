"use client";
import { getAllNotifications } from "@/lib/api/auth";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useCookies } from "react-cookie";

export default function Page() {
  const [{ token }] = useCookies(["token"]);
  const { data, isPending } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => {
      return getAllNotifications(token);
    },
  });
  return (
    <section>
      <h1 className="text-3xl font-semibold">Notifications</h1>
    </section>
  );
}
