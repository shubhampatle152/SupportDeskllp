
"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Loader2, Save, AlertTriangle } from "lucide-react";
import * as LucideIcons from "lucide-react";

const iconNames = Object.keys(LucideIcons).filter(key => /^[A-Z]/.test(key) && key !== 'default' && key !== 'createLucideIcon');

// Placeholder data for a service - replace with API call
const mockService = {
  id: "1",
  title: "Back-Office Support",
  description: "Efficient handling of your administrative tasks.",
  iconName: "Briefcase",
  status: "Active"
};

export default function EditServicePage() {
  const router = useRouter();
  const params = useParams();
  const serviceId = params.serviceId as string;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [iconName, setIconName] = useState("");
  const [status, setStatus] = useState("Draft");
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true); // For loading initial data
  const { toast } = useToast();

  useEffect(() => {
    if (serviceId) {
      // Simulate fetching existing service data
      setIsFetching(true);
      console.log(`Fetching service with ID: ${serviceId}`);
      setTimeout(() => {
        // In a real app, fetch from /api/admin/services/${serviceId}
        // For now, use mock data if ID matches, or show error
        if (serviceId === mockService.id) {
            setTitle(mockService.title);
            setDescription(mockService.description);
            setIconName(mockService.iconName);
            setStatus(mockService.status);
        } else {
            toast({
                title: "Service Not Found (Mock)",
                description: `Could not find service with ID ${serviceId}. This is a mock fetch.`,
                variant: "destructive"
            });
            // router.push("/admin/services"); // Optionally redirect
        }
        setIsFetching(false);
      }, 1000);
    }
  }, [serviceId, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Placeholder for API call to update
    console.log("Update Service Data:", { id: serviceId, title, description, iconName, status });
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay

    toast({
      title: "Service Updated (Mock)",
      description: `Service "${title}" has been updated. (This is a mock action)`,
    });
    router.push("/admin/services");
    setIsLoading(false);
  };

  if (isFetching) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="ml-2">Loading service details...</p>
      </div>
    );
  }
  
  // If mock service wasn't found (and not fetching anymore)
  if (!isFetching && serviceId !== mockService.id) {
    return (
         <Card className="max-w-xl mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><AlertTriangle className="h-6 w-6 text-destructive" /> Service Not Found</CardTitle>
            </CardHeader>
            <CardContent>
                <p>The service with ID "{serviceId}" could not be loaded. It might have been deleted or the ID is incorrect.</p>
            </CardContent>
            <CardFooter>
                <Button asChild variant="outline">
                    <Link href="/admin/services"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Services</Link>
                </Button>
            </CardFooter>
        </Card>
    );
  }


  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/admin/services">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to Services</span>
          </Link>
        </Button>
        <h2 className="text-3xl font-bold tracking-tight">Edit Service: {mockService.title}</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Service Details</CardTitle>
            <CardDescription>Update the information for this service.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Web Development"
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the service..."
                rows={4}
                required
                disabled={isLoading}
              />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="iconName">Icon Name (Lucide)</Label>
                 <Select onValueChange={setIconName} value={iconName} disabled={isLoading}>
                  <SelectTrigger id="iconName">
                    <SelectValue placeholder="Select an icon" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {iconNames.map((name) => (
                      <SelectItem key={name} value={name}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Choose an icon from Lucide Icons.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select onValueChange={setStatus} value={status} disabled={isLoading}>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
              Update Service
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
