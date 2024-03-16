import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WhatsApp from "../components/whatsapp";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "D-pastel | Decoración de Interiores",
  description: "Irene Arias - Diseñadora especializada en decoración de interiores. Shop 24/7 con envíos a todo el país. Ventas al por mayor y menor. Contacto: infod.pastel@gmail.com. ¡Explora nuestro catálogo online y realiza tu pedido!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <WhatsApp />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
