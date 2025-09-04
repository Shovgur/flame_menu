"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const menus = [
  { src: "/menu1.png", alt: "Основное меню" },
  { src: "/menu2.png", alt: "Барное меню" },
  { src: "/menu3.png", alt: "Кальяны и напитки" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f2e9] flex flex-col items-center py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 mb-12"
      >
        <Image
          src="/logo.png"
          alt="Логотип Flame"
          width={60}
          height={60}
          className="rounded-full"
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-widest">
          FLAME BY LUI
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">
        {menus.map((menu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="shadow-lg rounded-2xl overflow-hidden bg-white"
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
      </div>
    </main>
  );
}
