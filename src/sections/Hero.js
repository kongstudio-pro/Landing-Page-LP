"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility((v) => !v);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      {/* NAV */}
      <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 md:gap-2" aria-label="LembarPintar home">
            <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] shrink-0">
              <Image
                src="/images/logo.png"
                alt="Logo LembarPinter"
                fill
                sizes="200px"
                className="object-cover object-center !max-w-none"
                priority
              />
            </div>
            {/* Brand text */}
            <span className="leading-none -ml-1 mt-4">
              <span className="block text-[22px] md:text-[28px] font-extrabold tracking-tight text-slate-900 dark:text-white">
                Lembar
                <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Pintar</span>
              </span>
            </span>
          </Link>
          <button
            className="md:hidden mt-4"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {showMenu ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
          <div
            className={[
              "items-center md:relative md:flex md:space-x-3 md:bg-transparent md:shadow-none mt-4 md:mt-4",
              showMenu
                ? "absolute left-6 right-6 top-20 z-50 flex flex-col space-y-3 rounded-xl bg-white/90 p-5 shadow-xl backdrop-blur md:static md:flex-row md:space-y-0 md:bg-transparent md:p-0 md:shadow-none"
                : "hidden md:flex",
            ].join(" ")}
          >
            <nav className="flex w-full flex-col text-center md:w-auto md:flex-row md:space-x-3">
              <a className="rounded px-5 py-2 hover:bg-gray-100 flex items-center justify-center">
                Kasus Penggunaan
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a className="rounded px-5 py-2 hover:bg-gray-100 flex items-center justify-center">
                Template
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a className="rounded px-5 py-2 hover:bg-gray-100">Fitur</a>
              <a className="rounded px-5 py-2 hover:bg-gray-100">Harga</a>
              <a className="rounded px-5 py-2 hover:bg-gray-100">Tutorial</a>
            </nav>
            <div className="flex space-x-3">
              <a href="/auth/login" className="rounded border border-blue-600 px-5 py-2 text-blue-600 hover:bg-blue-50">
                Masuk
              </a>
              <a href="/auth/register" className="rounded bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-2 text-white hover:from-purple-600 hover:to-pink-600">
                Coba Gratis
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* HERO CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.06 },
              },
            }}
            className="text-left"
          >
            {/* Headline */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
            >
              <span className="block">Temukan Cara Baru</span>
              <motion.span
                className="block bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 200%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                Mengajar, Belajar & Berkreasi
              </motion.span>
              <span className="block">di Era Digital</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              className="mt-6 text-lg sm:text-xl leading-8 text-slate-600"
            >
              LembarPintar membantu guru, pelajar, dan kreator menyusun ide dengan cepat
              melalui ribuan template interaktif yang siap pakai.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                href="/signup"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-3 text-base font-semibold text-white shadow hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Mulai Gratis Sekarang
              </motion.a>
              <motion.a
                href="/demo"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Lihat Contoh Template
              </motion.a>
            </motion.div>

            {/* Rating Section */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex text-yellow-400">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">3k+ reviews</p>
                <p className="text-xs text-gray-500">Coba Gratis! Tanpa kartu kredit.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Template Profesional</h3>
                <p className="text-slate-600">Ribuan template siap pakai untuk berbagai kebutuhan edukasi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;