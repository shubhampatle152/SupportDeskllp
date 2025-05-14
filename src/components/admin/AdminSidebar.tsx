
import Link from "next/link";
import { Zap } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constants";
import AdminSidebarNav from "./AdminSidebarNav";

export default function AdminSidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold text-primary">
            <Zap className="h-6 w-6" />
            <span>{COMPANY_NAME} Admin</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <AdminSidebarNav />
          </nav>
        </div>
      </div>
    </div>
  );
}
