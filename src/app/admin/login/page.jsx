
import LoginForm from "@/components/admin/LoginForm";
import { COMPANY_NAME } from "@/lib/constants";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted p-4">
       <div className="mb-8 text-center">
         <Link href="/" className="inline-flex items-center gap-2 text-3xl font-bold text-primary mb-2">
            <Zap className="h-8 w-8" />
            <span>{COMPANY_NAME}</span>
          </Link>
          <p className="text-muted-foreground">Admin Panel</p>
        </div>
      <LoginForm />
    </div>
  );
}
