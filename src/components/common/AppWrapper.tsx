import { Footer, Sidebar } from "@/components/common";
import { Outlet } from "react-router-dom";

export function AppWrapper() {
  return (
    <div className="relative max-w-[2600px] mx-auto min-h-screen">
      <Sidebar className="fixed left-0 top-0 bottom-0 w-72 bg-slate-900 p-8" />

      <div className="pl-80 py-10 pr-8 bg-slate-600 min-h-screen">
        <main className="overflow-y-auto">
          <Outlet />
        </main>

        <Footer className="p-5 text-center" />
      </div>
    </div>
  );
}