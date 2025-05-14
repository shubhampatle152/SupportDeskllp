import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { LOGO_CLIENTS } from "@/lib/constants";

export default function LogoCarousel() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-secondary-foreground mb-2">Trusted by Businesses Like Yours</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          We're proud to partner with innovative startups and established enterprises to help them achieve their goals.
        </p>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-6 p-4">
            {LOGO_CLIENTS.map((client) => (
              <Card key={client.id} className="overflow-hidden shrink-0 w-[180px] h-[90px] flex items-center justify-center hover:shadow-lg transition-shadow duration-300 bg-card">
                <CardContent className="p-0">
                  <Image
                    src={client.logoUrl}
                    alt={client.name}
                    width={150}
                    height={60}
                    className="object-contain"
                    data-ai-hint={client['data-ai-hint']}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
