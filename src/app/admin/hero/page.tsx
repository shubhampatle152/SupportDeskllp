
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";

export default function AdminHeroPage() {
  // In a real app, you'd fetch and manage hero data via state and API calls
  const mockHeroData = {
    title: "Virtual Assistants for Startups and Enterprises",
    subtitle: "Elevate your productivity with our expert virtual assistance services. Focus on what you do best, we'll handle the rest.",
    primaryImage: "https://placehold.co/1200x600.png", // Placeholder
    secondaryImage: "https://placehold.co/600x400.png", // Placeholder
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Manage Hero Section</h2>
        <p className="text-muted-foreground">
          Update the main title, subtitle, and images for the homepage hero section.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Hero Content</CardTitle>
          <CardDescription>
            Set the text and images that appear prominently on your homepage.
          </CardDescription>
        </CardHeader>
        <form onSubmit={(e) => { e.preventDefault(); alert("Save functionality not implemented yet."); }}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="heroTitle">Main Title</Label>
              <Input id="heroTitle" defaultValue={mockHeroData.title} placeholder="Enter main hero title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="heroSubtitle">Subtitle</Label>
              <Textarea id="heroSubtitle" defaultValue={mockHeroData.subtitle} placeholder="Enter hero subtitle" rows={3} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                <Label htmlFor="heroPrimaryImage">Primary Image URL</Label>
                <Input id="heroPrimaryImage" defaultValue={mockHeroData.primaryImage} placeholder="https://example.com/image.png" />
                <p className="text-xs text-muted-foreground">Main large image for the hero section.</p>
                </div>
                <div className="space-y-2">
                <Label htmlFor="heroSecondaryImage">Secondary Image URL (Optional)</Label>
                <Input id="heroSecondaryImage" defaultValue={mockHeroData.secondaryImage} placeholder="https://example.com/small-image.png" />
                 <p className="text-xs text-muted-foreground">A smaller supporting image, if applicable.</p>
                </div>
            </div>
             <div className="space-y-2">
              <Label>Current Primary Image Preview</Label>
              <img src={mockHeroData.primaryImage} alt="Primary Hero Preview" data-ai-hint="website hero banner" className="rounded-md border object-cover aspect-[2/1]" />
            </div>

          </CardContent>
          <CardContent className="border-t pt-6">
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" /> Save Hero Settings
            </Button>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
