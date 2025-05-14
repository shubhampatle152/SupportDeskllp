import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react"; // Import all icons
import type { LucideProps } from "lucide-react"; // Import props type for icons
import Link from "next/link";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

// Define a type for icon names that are valid keys in LucideIcons
type IconName = keyof typeof LucideIcons;

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  iconName: IconName; // Use the IconName type
}

// A helper function to get the icon component
const getIcon = (name: IconName, props?: LucideProps) => {
  const IconComponent = LucideIcons[name] as React.ComponentType<LucideProps>;
  if (!IconComponent) {
    return <LucideIcons.HelpCircle {...props} />; // Default icon if not found
  }
  return <IconComponent {...props} />;
};

export default function ServiceCard({ id, title, description, iconName }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
      <CardHeader className="items-center text-center p-6 bg-primary/5">
        <div className="p-4 bg-primary text-primary-foreground rounded-full mb-4 inline-block">
          {getIcon(iconName, { className: "h-10 w-10" })}
        </div>
        <CardTitle className="text-2xl font-semibold text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-6 text-center">
        <CardDescription className="text-base text-muted-foreground mb-6">
          {description}
        </CardDescription>
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
         <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent/10 hover:text-accent-foreground">
            <Link href={`/services#${id}`}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
      </div>
    </Card>
  );
}
