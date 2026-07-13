"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type TabKey = "all" | "soft" | "tea" | "hookah" | "kitchen" | "beer";

interface MenuImage {
  src: string;
  alt: string;
}

const tabs: { key: TabKey; label: string }[] = [
  { key: "all", label: "Все" },
  { key: "hookah", label: "Кальяны" },
  { key: "soft", label: "Безалкогольные напитки" },
  { key: "tea", label: "Чай и кофе" },
  { key: "kitchen", label: "Кухня" },
  { key: "beer", label: "Пиво" },
];

const desktopMenus: MenuImage[] = [
  { src: "/menu1.png", alt: "Основное меню" },
  { src: "/menu3.png", alt: "Кухня" },
  { src: "/tabs_image/еда.png", alt: "Еда" },
  { src: "/tabs_image/beer.png", alt: "Пиво" },
];

const mobileMenus: Record<Exclude<TabKey, "all">, MenuImage[]> = {
  hookah: [{ src: "/tabs_image/кальяны.png", alt: "Кальяны" }],
  soft: [{ src: "/tabs_image/ба.png", alt: "Безалкогольные напитки" }],
  tea: [{ src: "/tabs_image/кофе.png", alt: "Чай и кофе" }],
  kitchen: [
    { src: "/menu3.png", alt: "Кухня" },
    { src: "/tabs_image/еда.png", alt: "Еда" },
  ],
  beer: [{ src: "/tabs_image/beer.png", alt: "Пиво" }],
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const imagesToShow: MenuImage[] = isMobile
    ? activeTab === "all"
      ? Object.values(mobileMenus).flat()
      : mobileMenus[activeTab as Exclude<TabKey, "all">] || []
    : desktopMenus;

  return (
    <main className="min-h-screen bg-[#f7f2e9] flex flex-col items-center py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 mb-8"
      >
        <Image
          src="/logo.png"
          alt="Логотип Flame"
          width={60}
          height={60}
          className="rounded-full"
        />
        <h1 className="text-3xl md:text-6xl font-bold tracking-widest ">
          FLAME BY LUI
        </h1>
      </motion.div>

      {isMobile && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab.key}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeTab === tab.key
                  ? "bg-black text-white"
                  : "bg-white text-black shadow"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      )}

      <div className="grid md:flex gap-8 max-w-6xl w-full">
        <AnimatePresence mode="wait">
          {imagesToShow.map((menu, index) => (
            <motion.div
              key={menu.src}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className=" rounded-2xl overflow-hidden "
            >
              <Image
                src={menu.src}
                alt={menu.alt}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}
