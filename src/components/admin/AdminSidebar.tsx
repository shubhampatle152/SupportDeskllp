"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogOut, Zap } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constants";
import AdminSidebarNav from "./AdminSidebarNav";
import { useState, useEffect } from "react";

export default function AdminHeader() {
  const router = useRouter();
  const [isMobileAdminMenuOpen, setIsMobileAdminMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleLogout = async () => {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 py-4">
      {hasMounted && (
        <Sheet open={isMobileAdminMenuOpen} onOpenChange={setIsMobileAdminMenuOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden" onClick={() => setIsMobileAdminMenuOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs bg-card">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/admin/dashboard"
                onClick={() => setIsMobileAdminMenuOpen(false)}
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
              >
                <Zap className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">{COMPANY_NAME} Admin</span>
              </Link>
              <AdminSidebarNav onLinkClick={() => setIsMobileAdminMenuOpen(false)} />
            </nav>
          </SheetContent>
        </Sheet>
      )}
      
      <div className="flex-1">
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      </div>

      {hasMounted && (
        <Button onClick={handleLogout} variant="outline" size="sm">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </Button>
      )}
    </header>
  );
}