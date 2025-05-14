import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TEAM_MEMBERS, COMPANY_NAME } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About {COMPANY_NAME}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a passionate team dedicated to providing top-notch virtual assistance, helping businesses like yours thrive in a dynamic world. Our mission is to empower you to focus on your core objectives by taking care of the essential, time-consuming tasks.
            </p>
          </div>

          <Card className="mb-12 md:mb-16 bg-card shadow-lg">
            <CardContent className="p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Our Mission & Vision</h2>
                <p className="text-muted-foreground mb-4">
                  Our mission is to deliver exceptional virtual support services that drive efficiency, productivity, and growth for our clients. We envision a world where businesses of all sizes can leverage expert assistance to achieve their full potential.
                </p>
                <p className="text-muted-foreground">
                  We believe in building strong partnerships based on trust, reliability, and a deep understanding of your unique needs. Our commitment to excellence ensures that you receive personalized solutions that make a real impact.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden aspect-video">
                <Image 
                  src="https://placehold.co/600x400.png" 
                  alt="Our Team Collaborating" 
                  width={600} 
                  height={400} 
                  className="object-cover w-full h-full"
                  data-ai-hint="team collaboration" 
                />
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Core Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The driving force behind our success is our dedicated and experienced team of professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <Card key={member.id} className="text-center hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member.photoUrl}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                    data-ai-hint={member['data-ai-hint']}
                  />
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-semibold text-primary">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
