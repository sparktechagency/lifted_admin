import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Roboto } from "next/font/google";
import { Suspense } from "react";
import { Spinner } from "@/components/kibo-ui/spinner";
import GodProvider from "@/provider/god-provider";
import { Toaster } from "@/components/ui/sonner";
export const metadata: Metadata = {
  title: "Lifted Admin",
  description:
    "Admin dashboard for lifted application management and monitoring.",
};
const roboto = Roboto({
  variable: "--font-roboto",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${roboto.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<Spinner variant="bars" />}>
            <GodProvider>
              {children}
              <Toaster richColors />
            </GodProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
