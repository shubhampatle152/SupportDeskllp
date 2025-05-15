"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Edit, Trash2, HelpCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { useToast } from "@/hooks/use-toast";


const getIcon = (name, props) => {
  if (!name) return <HelpCircle {...props} className="h-5 w-5 text-muted-foreground" />;
  const IconComponent = LucideIcons[name];
  if (!IconComponent) {
    // Fallback for invalid icon names
    return <HelpCircle {...props} className="h-5 w-5 text-muted-foreground" />;
  }
  return <IconComponent {...props} className="h-5 w-5" />;
};

export default function AdminServicesPage() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchServices = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/admin/services");
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
        toast({
          title: "Error",
          description: "Could not fetch services. " + error.message,
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchServices();
  }, [toast]);

  const handleDeleteService = async (serviceId, serviceTitle) => {
    if (!confirm(`Are you sure you want to delete the service "${serviceTitle}"? This action cannot be undone.`)) {
      return;
    }
    try {
      const response = await fetch(`/api/admin/services/${serviceId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete service');
      }
      setServices(prevServices => prevServices.filter(s => s._id !== serviceId));
      toast({
        title: "Service Deleted",
        description: `Service "${serviceTitle}" has been deleted.`,
      });
    } catch (error) {
      console.error("Error deleting service:", error);
      toast({
        title: "Delete Failed",
        description: error.message || "Could not delete the service.",
        variant: "destructive",
      });
    }
  };


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
          {isLoading ? (
             <div className="flex items-center justify-center h-24">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="ml-2">Loading services...</p>
              </div>
          ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden sm:table-cell w-[60px]">Icon</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Description</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.length === 0 && !isLoading && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center h-24">
                    No services found. <Link href="/admin/services/new" className="text-primary hover:underline">Add one now</Link>.
                  </TableCell>
                </TableRow>
              )}
              {services.map((service) => (
                <TableRow key={service._id}>
                  <TableCell className="hidden sm:table-cell">
                    {getIcon(service.iconName)}
                  </TableCell>
                  <TableCell className="font-medium">{service.title}</TableCell>
                  <TableCell className="hidden md:table-cell max-w-xs truncate">{service.description}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge variant={service.status === "Active" ? "default" : "secondary"}>
                      {service.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" asChild className="mr-2">
                      <Link href={`/admin/services/edit/${service._id}`}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDeleteService(service._id, service.title)}>
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}