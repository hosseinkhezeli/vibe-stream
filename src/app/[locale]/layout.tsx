// app/layout.tsx
import type { Metadata } from "next";
import "../../styles/globals.css";
import { Sidebar } from "@/features/navigation/sidebar/sidebar";
import { PlayerBar } from "@/features/player";
import { iranSansXFaNum } from "@/config/constants.local-font";

export const metadata: Metadata = {
  title: "گووش",
  description: "کلاینت وب شبیه اسپاتیفای",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranSansXFaNum.className} bg-paper antialiased`}>
        <div className="min-h-screen flex flex-col">
          {/* Sidebar + main content */}
          <div className="flex-1 grid grid-cols-[auto_minmax(0,1fr)]">
            <Sidebar />

            <main className="bg-bg-elevated overflow-hidden">
              <div className="h-full flex flex-col">
                {/* Sticky top bar (can be upgraded later) */}
                <header className="sticky top-0 z-10 bg-bg-elevated/80 backdrop-blur border-b border-white/5">
                  <div className="px-4 py-3 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted">
                        خانه
                      </span>
                    </div>
                    {/* Placeholder for future actions (profile, language, etc.) */}
                    <div className="flex items-center gap-3 text-xs text-muted">
                      <span>حساب کاربری</span>
                    </div>
                  </div>
                </header>

                {/* Scrollable page content */}
                <div className="flex-1 overflow-y-auto px-4 pb-8 pt-4">
                  {children}
                </div>
              </div>
            </main>
          </div>

          {/* Global player bar */}
          <PlayerBar />
        </div>
      </body>
    </html>
  );
}
