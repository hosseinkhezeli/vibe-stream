import type { Metadata } from "next";
import "../../styles/globals.css";
import { iranSansXFaNum } from "@/config/constants.local-font";

export const metadata: Metadata = {
  title: "گووش",
  description: "کلاینت وب شبیه اسپاتیفای",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranSansXFaNum.className} bg-bg antialiased`}>{children}</body>
    </html>
  );
}
