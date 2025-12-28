import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = (await cookies()).get("token")?.value;
  if (token) {
    return redirect("/");
  }
  return <Suspense>{children}</Suspense>;
}
