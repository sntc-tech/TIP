import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.scss";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TIP '24 | IIT Mandi",
  description: "Some description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
