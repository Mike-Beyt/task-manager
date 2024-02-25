import Link from "next/link";
import type { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main>
      <div className="w-60 h-[100vh] bg-slate-300 flex flex-col ">
        <div className="p-6 flex flex-col justify-center items-center ">
          <p>mike</p>
          <p>beyt</p>
        </div>
        <nav className=" bg-slate-600 text-slate-300 flex flex-col  justify-evenly p-2 h-full  px-4  ">
          <Link className="w-full bg-red-300" href="/tasks">
            Tasks
          </Link>
          <Link className="w-full bg-red-300" href="/profile">
            Profile
          </Link>
          <Link className="w-full bg-red-300" href="/logout">
            Logout
          </Link>
        </nav>
      </div>

      {children}
    </main>
  );
}
