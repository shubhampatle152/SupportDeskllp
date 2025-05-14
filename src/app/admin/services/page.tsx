
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

// Placeholder data - replace with API call
const mockServices = [
  { id: "1", title: "Back-Office Support", description: "Efficient handling of your administrative tasks.", iconName: "Briefcase", status: "Active" },
  { id: "2", title: "Digital Marketing", description: "Boost your online presence and reach.", iconName: "Megaphone", status: "Active" },
  { id: "3", title: "Web Development", description: "Custom websites and web applications.", iconName: "Codepen", status: "Draft" },
];

export default function AdminServicesPage() {
  // In a real app, you'd fetch services from your API here
  const services = mockServices;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Manage Services</h2>
          <p className="text-muted-foreground">
            Add, edit, or remove services offered by your company.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/services/new">
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Service
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Services List</CardTitle>
          <CardDescription>A list of all current services.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Description</TableHead>
                <TableHead className="hidden sm:table-cell">Icon</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center h-24">
                    No services found. <Link href="/admin/services/new" className="text-primary hover:underline">Add one now</Link>.
                  </TableCell>
                </TableRow>
              )}
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.title}</TableCell>
                  <TableCell className="hidden md:table-cell max-w-xs truncate">{service.description}</TableCell>
                  <TableCell className="hidden sm:table-cell">{service.iconName}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge variant={service.status === "Active" ? "default" : "secondary"}>
                      {service.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" asChild className="mr-2">
                      <Link href={`/admin/services/edit/${service.id}`}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                      {/* Add onClick handler for delete action */}
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
       <Card>
        <CardHeader>
            <CardTitle className="text-lg">Note:</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-muted-foreground">
            This page uses placeholder data. Functionality for adding, editing, and deleting services
            needs to be connected to backend API routes. Icons are currently shown as names; you'll need to map these to actual Lucide icon components.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
