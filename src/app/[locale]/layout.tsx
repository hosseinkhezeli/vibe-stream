import type { Metadata } from "next";
import "../../styles/globals.css";
import { iranSansXFaNum } from "@/config/constants.local-font";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata: Metadata = {
  title: "گووش",
  description: "کلاینت وب شبیه اسپاتیفای",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranSansXFaNum.className} bg-bg antialiased`}>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
