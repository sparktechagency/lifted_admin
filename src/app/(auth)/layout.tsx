import { Suspense } from "react";
import Stars from "../../components/stars";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-dvh w-dvw overflow-hidden grid place-items-center">
      <div className="w-full max-w-xl h-3/4 bg-linear-to-tr from-[#05C3DD] to-[#B14EFFaa] rounded-lg p-4 shadow-md shadow-foreground/30 relative">
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        {children}
      </div>
    </main>
  );
}
