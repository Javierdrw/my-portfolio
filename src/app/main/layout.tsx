// src/app/(main)/layout.tsx
import Header from '@/components/common/Header'; // Tendrás que crear este componente
import Footer from '@/components/common/Footer'; // Tendrás que crear este componente

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pt-[64px]"> {/* Ajusta este padding si tu header es fijo */}
        {children}
      </div>
      <Footer />
    </>
  );
}