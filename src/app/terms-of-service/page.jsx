
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPANY_NAME } from "@/lib/constants";
import { useState, useEffect } from "react";

export default function TermsOfServicePage() {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <Card className="max-w-3xl mx-auto bg-card shadow-lg animate-fadeInUp opacity-0">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground">
          <p>Last updated: {lastUpdated || "Loading..."}</p>

          <h2 className="text-xl font-semibold text-foreground">1. Agreement to Terms</h2>
          <p>By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We may update these terms from time to time, and your continued use of our services constitutes acceptance of those changes.</p>

          <h2 className="text-xl font-semibold text-foreground">2. Description of Service</h2>
          <p>{COMPANY_NAME} provides virtual assistant services, including but not limited to administrative support, customer service, technical assistance, and marketing services. The specific services provided will be outlined in a separate agreement or scope of work.</p>

          <h2 className="text-xl font-semibold text-foreground">3. User Responsibilities</h2>
          <p>You are responsible for providing accurate and complete information necessary for us to perform the services. You agree to use our services for lawful purposes only and not to engage in any activity that could harm {COMPANY_NAME}, its employees, or its other clients.</p>

          <h2 className="text-xl font-semibold text-foreground">4. Payment Terms</h2>
          <p>Fees for our services will be as set out in your service agreement. Payments are due as specified in the invoice. Late payments may incur interest charges or suspension of services.</p>

          <h2 className="text-xl font-semibold text-foreground">5. Confidentiality</h2>
          <p>We will maintain the confidentiality of your proprietary information. Similarly, you agree to keep confidential any proprietary information of {COMPANY_NAME} that you may be exposed to.</p>

          <h2 className="text-xl font-semibold text-foreground">6. Intellectual Property</h2>
          <p>Any work product created by {COMPANY_NAME} specifically for you as part of the services will be your property upon full payment. We retain ownership of our pre-existing materials, tools, and methodologies.</p>

          <h2 className="text-xl font-semibold text-foreground">7. Limitation of Liability</h2>
          <p>{COMPANY_NAME} will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the services; (b) any conduct or content of any third party on the services.</p>
          <p>Our total liability to you for any claim arising out of or relating to these Terms or our services, regardless of the form of the action, is limited to the amount you paid us for the services in the 3 months prior to the event giving rise to the liability.</p>
          
          <h2 className="text-xl font-semibold text-foreground">8. Termination</h2>
          <p>Either party may terminate the service agreement with written notice as specified in the agreement. Upon termination, you will be responsible for payment for all services performed up to the termination date.</p>

          <h2 className="text-xl font-semibold text-foreground">9. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles.</p>

          <h2 className="text-xl font-semibold text-foreground">10. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. We will provide notice of any significant changes. Your continued use of our services after such changes constitutes your acceptance of the new terms.</p>

          <h2 className="text-xl font-semibold text-foreground">11. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at legal@supportdeskllp.com or by post to:</p>
          <p>
            {COMPANY_NAME}<br />
            Attn: Legal Department<br />
            123 Innovation Drive<br />
            Tech City, TX 75001, USA
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
