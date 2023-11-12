import { GeistSans } from "geist/font/sans";

import { cn } from "~/lib/utils";

import "~/styles/globals.css";

export const metadata = {
  title: "Flexion Coding Challenge",
  description: "My submission for the Flexion coding challenge",
  creator: "Justin Henry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(GeistSans.className)}>
      <body>
        <main className="flex min-h-screen flex-col items-center gap-12 bg-gradient-to-b from-teal-950/50 to-transparent px-4 py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
