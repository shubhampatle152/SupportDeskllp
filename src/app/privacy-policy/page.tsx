import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPANY_NAME } from "@/lib/constants";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <Card className="max-w-3xl mx-auto bg-card shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
          <p>Welcome to {COMPANY_NAME}. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.</p>

          <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.</p>
          <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: names; phone numbers; email addresses; mailing addresses; job titles; contact preferences; billing addresses; and other similar information.</p>

          <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
          <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>

          <h2 className="text-xl font-semibold text-foreground">4. Will Your Information Be Shared With Anyone?</h2>
          <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
          
          <h2 className="text-xl font-semibold text-foreground">5. How Long Do We Keep Your Information?</h2>
          <p>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.</p>

          <h2 className="text-xl font-semibold text-foreground">6. How Do We Keep Your Information Safe?</h2>
          <p>We aim to protect your personal information through a system of organizational and technical security measures.</p>
          
          <h2 className="text-xl font-semibold text-foreground">7. Do We Collect Information From Minors?</h2>
          <p>We do not knowingly solicit data from or market to children under 18 years of age.</p>

          <h2 className="text-xl font-semibold text-foreground">8. What Are Your Privacy Rights?</h2>
          <p>In some regions (like the European Economic Area), you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</p>
          
          <h2 className="text-xl font-semibold text-foreground">9. Controls for Do-Not-Track Features</h2>
          <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.</p>

          <h2 className="text-xl font-semibold text-foreground">10. Do We Make Updates to This Policy?</h2>
          <p>Yes, we will update this policy as necessary to stay compliant with relevant laws.</p>

          <h2 className="text-xl font-semibold text-foreground">11. How Can You Contact Us About This Policy?</h2>
          <p>If you have questions or comments about this policy, you may email us at privacy@supportdeskllp.com or by post to:</p>
          <p>
            {COMPANY_NAME}<br />
            Attn: Privacy Officer<br />
            123 Innovation Drive<br />
            Tech City, TX 75001, USA
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
