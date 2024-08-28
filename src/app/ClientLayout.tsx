"use client"
import { usePathname } from 'next/navigation';
import MenuNav from '@/components/MenuNav';
import Footer from '@/components/Footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Lista de rutas donde no se quiere mostrar el MenuNav ni el Footer
  const noLayoutRoutes = ['/agenda'];

  const isNoLayoutRoute = noLayoutRoutes.includes(pathname);

  return (
    <>
      {!isNoLayoutRoute && <MenuNav />}
      {children}
      {!isNoLayoutRoute && <Footer />}
    </>
  );
}
