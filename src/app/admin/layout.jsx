
import AdminHeader from '@/components/admin/AdminHeader';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { COMPANY_NAME } from '@/lib/constants';

export const metadata = {
  title: `Admin Panel - ${COMPANY_NAME}`,
  description: `Admin panel for ${COMPANY_NAME}.`,
};

export default function AdminLayout({
  children,
}) {
  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar />
      <div className="flex flex-1 flex-col">
        <AdminHeader />
        <main className="flex-1 p-6 bg-muted/40">
          {children}
        </main>
      </div>
    </div>
  );
}
