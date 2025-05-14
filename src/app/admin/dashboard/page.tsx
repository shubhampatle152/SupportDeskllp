
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Phone, CalendarClock, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";

const adminSections = [
  { title: "Hero Settings", description: "Manage homepage hero content.", href: "/admin/hero", icon: Settings },
  { title: "Services", description: "Manage offered services.", href: "/admin/services", icon: Briefcase },
  { title: "Team Members", description: "Manage team member profiles.", href: "/admin/team", icon: Users },
  { title: "Contact Info", description: "Update company contact details.", href: "/admin/contact-details", icon: Phone },
  { title: "Scheduled Calls", description: "View and manage scheduled calls.", href: "/admin/scheduled-calls", icon: CalendarClock },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Welcome to the Admin Dashboard</h2>
      <p className="text-muted-foreground">
        From here, you can manage various aspects of the {process.env.NEXT_PUBLIC_COMPANY_NAME || "SupportDeskllp"} website.
      </p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {adminSections.map((section) => (
          <Card key={section.href} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <section.icon className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">{section.title}</CardTitle>
              </div>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow" />
            <CardContent>
               <Button asChild variant="outline" className="w-full">
                <Link href={section.href}>
                  Manage {section.title} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
       <Card>
        <CardHeader>
          <CardTitle>Important Note on Security</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-destructive">
            This admin panel currently uses placeholder authentication. 
            For production use, you MUST integrate a secure authentication solution like NextAuth.js.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
