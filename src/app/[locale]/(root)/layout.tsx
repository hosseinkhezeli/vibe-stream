import { CategoryList } from "@/features/category/category-list/category-list";
import { BottomNavigation, Header, Sidebar } from "@/features/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="overflow-clip min-w-screen min-h-screen flex-1 grid grid-cols-[auto_minmax(0,1fr)] pt-16 px-4 gap-4 pb-4">
        <Sidebar />
        <main className="transition-all overflow-hidden min-w-[calc(100svw-32px)] md:min-w-0 max-h-[calc(100svh-127px)] rounded-2xl  md:max-h-[calc(100svh-80px)]   ">
          <CategoryList />
          <div className="flex-1 overflow-x-hidden overflow-y-auto px-4 py-6 md:px-6 md:py-8 h-full bg-bg-elevated rounded-2xl ">
            {children}
          </div>
        </main>
      </div>
      <BottomNavigation />
    </>
  );
}
