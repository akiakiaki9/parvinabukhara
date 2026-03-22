import { Geist, Geist_Mono } from "next/font/google";
import './styles/globals.css'
import { CartProvider } from "./context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Parvina Restaurant | Элитный ресторан в Бухаре с фонтаном",
  description: "Parvina - элитный ресторан в Бухаре. 30-метровый фонтан, живая музыка, банкетный зал. Лучшее место для проведения мероприятий и романтических ужинов в Бухаре.",
  alternates: {
    canonical: 'https://parvinabukhara.uz',
  },
  openGraph: {
    title: "Parvina Restaurant | Элитный ресторан в Бухаре",
    description: "Изысканный ресторан в центре Бухары. Уникальная атмосфера с фонтаном и живой музыкой. Бронирование столиков и банкетов.",
    url: "https://parvinabukhara.uz",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Parvina Restaurant Бухара",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
};