import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], weight: "700" });
const inter = Inter({ subsets: ["latin", "cyrillic"], weight: "400" });

export const metadata = {
  title: "Flame Menu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-[#f7f2e9]`}>
        {children}
      </body>
    </html>
  );
}
