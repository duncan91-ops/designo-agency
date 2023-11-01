import "../globals.scss";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Header, AlternateFooter } from "@/components";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Designo Agency",
  description: "Designo Digital Experience Company Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header />
        {children}
        <AlternateFooter />
      </body>
    </html>
  );
}
