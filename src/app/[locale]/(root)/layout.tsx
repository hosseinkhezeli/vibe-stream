import { iranSansXFaNum } from "@/config/constants.local-font";
import { BottomNavigation, Header, Sidebar } from "@/features/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-screen flex-1 grid grid-cols-[auto_minmax(0,1fr)] pt-16 px-4 gap-4 pb-4">
        <Sidebar />
        <main className="overflow-hidden max-h-[calc(100svh-80px)]  bg-bg-elevated rounded-2xl">
          <div className="flex-1 overflow-x-hidden overflow-y-auto px-6 py-8 h-full">
            {children}
          </div>
        </main>
      </div>
      <BottomNavigation />
    </>
  );
}
