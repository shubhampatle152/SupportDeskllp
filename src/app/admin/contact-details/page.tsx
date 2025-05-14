
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import { COMPANY_NAME, WHATSAPP_PHONE_NUMBER, SOCIAL_LINKS } from "@/lib/constants"; // Using existing constants

export default function AdminContactDetailsPage() {
  // In a real app, these would be fetched and updated via an API
  const mockContactData = {
    companyName: COMPANY_NAME,
    email: `support@${COMPANY_NAME.toLowerCase()}.com`,
    phone: "+1 (800) 555-1234", // From contact page
    whatsappNumber: WHATSAPP_PHONE_NUMBER,
    addressLine1: "123 Innovation Drive",
    addressCityTech: "Tech City, TX 75001, USA",
    socialTwitter: SOCIAL_LINKS.twitter,
    socialLinkedIn: SOCIAL_LINKS.linkedin,
    socialFacebook: SOCIAL_LINKS.facebook,
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Manage Contact Details</h2>
        <p className="text-muted-foreground">
          Update your company's publicly displayed contact information.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Company Contact Information</CardTitle>
          <CardDescription>
            This information is used across the website, including the contact page and footer.
          </CardDescription>
        </CardHeader>
        <form onSubmit={(e) => { e.preventDefault(); alert("Save functionality not implemented yet."); }}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" defaultValue={mockContactData.companyName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Support Email</Label>
                <Input id="contactEmail" type="email" defaultValue={mockContactData.email} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="space-y-2">
                <Label htmlFor="contactPhone">Phone Number</Label>
                <Input id="contactPhone" type="tel" defaultValue={mockContactData.phone} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsappNumber">WhatsApp Number (no +)</Label>
                <Input id="whatsappNumber" defaultValue={mockContactData.whatsappNumber} />
              </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="addressLine1">Address</Label>
                <Input id="addressLine1" defaultValue={mockContactData.addressLine1} placeholder="Street Address"/>
                 <Input id="addressCityTech" defaultValue={mockContactData.addressCityTech} placeholder="City, State ZIP, Country"/>
            </div>
            
            <h3 className="text-lg font-medium pt-4 border-t mt-4">Social Media Links</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="socialTwitter">Twitter URL</Label>
                    <Input id="socialTwitter" defaultValue={mockContactData.socialTwitter} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="socialLinkedIn">LinkedIn URL</Label>
                    <Input id="socialLinkedIn" defaultValue={mockContactData.socialLinkedIn} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="socialFacebook">Facebook URL</Label>
                    <Input id="socialFacebook" defaultValue={mockContactData.socialFacebook} />
                </div>
            </div>

          </CardContent>
          <CardContent className="border-t pt-6">
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" /> Save Contact Details
            </Button>
          </CardContent>
        </form>
      </Card>
       <Card>
        <CardHeader>
            <CardTitle className="text-lg">Note:</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-muted-foreground">
            This page uses placeholder data derived from `src/lib/constants.ts` and hardcoded values. 
            Updating these fields here will not yet persist changes. This functionality needs to be connected to a backend API to update the constants or a database.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
