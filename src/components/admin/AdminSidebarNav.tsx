
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Briefcase, Users, Phone, CalendarClock, Settings } from "lucide-react";

const adminNavLinks = [
  { href: "/admin/dashboard", label: "Dashboard", icon: Home },
  { href: "/admin/hero", label: "Hero Settings", icon: Settings },
  { href: "/admin/services", label: "Services", icon: Briefcase },
  { href: "/admin/team", label: "Team Members", icon: Users },
  { href: "/admin/contact-details", label: "Contact Info", icon: Phone },
  { href: "/admin/scheduled-calls", label: "Scheduled Calls", icon: CalendarClock },
];

interface AdminSidebarNavProps {
  onLinkClick?: () => void;
}

export default function AdminSidebarNav({ onLinkClick }: AdminSidebarNavProps) {
  const pathname = usePathname();

  return (
    <>
      {adminNavLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
            pathname === link.href && "bg-muted text-primary"
          )}
        >
          <link.icon className="h-4 w-4" />
          {link.label}
        </Link>
      ))}
    </>
  );
}
