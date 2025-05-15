
"use client";

import HeroForm from "@/components/admin/HeroForm";

export default function AdminHeroPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Manage Hero Section</h2>
        <p className="text-muted-foreground">
          Update the main title, subtitle, and images for the homepage hero section.
        </p>
      </div>
      <HeroForm />
    </div>
  );
}
