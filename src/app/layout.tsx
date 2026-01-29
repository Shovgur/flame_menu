import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: "400" });

export const metadata = {
  title: "Flame Menu",
};

const myFont = localFont({
  src: "../../public/Bergamasco Regular.ttf",
  variable: "--font-flame",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className={`${inter.className} ${myFont.className} bg-[#f7f2e9] font-flame`}
      >
        {children}
      </body>
    </html>
  );
}
