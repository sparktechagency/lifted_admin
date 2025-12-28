import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-dvh w-dvw overflow-hidden grid place-items-center">
      <div className="w-full max-w-xl h-3/4 rounded-lg p-4 md:border relative">
        <Suspense>{children}</Suspense>
      </div>
    </main>
  );
}
