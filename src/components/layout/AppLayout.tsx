import type { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsappIcon from '../ui/WhatsappIcon';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsappIcon />
    </div>
  );
}
