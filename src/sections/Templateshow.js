"use client";

import Image from "next/image";

/** ——— data bisa kamu ganti sesuai asetmu ——— */
const ROWS = [
  {
    dir: "left",   // kiri
    duration: 60,  // diperlambat sedikit untuk lebih smooth
    items: [
      { src: "/templates/reels-1.jpg", alt: "Reels 1" },
      { src: "/templates/calendar-1.png", alt: "Calendar 1" },
      { src: "/templates/assistant-1.jpg", alt: "Assistant 1" },
      { src: "/templates/carousel-1.jpg", alt: "Carousel 1" },
      { src: "/templates/reels-2.jpg", alt: "Reels 2" },
      { src: "/templates/calendar-2.png", alt: "Calendar 2" },
    ],
  },
  {
    dir: "right",  // kanan
    duration: 60,
    items: [
      { src: "/templates/assistant-2.jpg", alt: "Assistant 2" },
      { src: "/templates/carousel-2.jpg", alt: "Carousel 2" },
      { src: "/templates/reels-3.jpg", alt: "Reels 3" },
      { src: "/templates/calendar-3.png", alt: "Calendar 3" },
      { src: "/templates/assistant-3.jpg", alt: "Assistant 3" },
      { src: "/templates/carousel-3.jpg", alt: "Carousel 3" },
    ],
  },
];

export default function TemplateShowcase() {
  return (
    <section className="relative w-full py-16 sm:py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
          Buat Iklan, Video, atau Poster untuk sekolah dalam hitungan menit
        </h2>
      </div>

      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-500 -z-10" />

        <div className="w-full py-8 md:py-12">
          <div className="w-full grid gap-10">
            {ROWS.map((row, i) => (
              <MarqueeRow
                key={i}
                items={row.items}
                direction={row.dir}
                duration={row.duration}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({ items, direction = "left", duration = 40 }) {
  // Gunakan 3 set item untuk memastikan kontinuitas
  const tripled = [...items, ...items, ...items];

  return (
    <div className="group relative overflow-hidden">
      {/* Gradient edges untuk transisi halus */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-blue-600 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-blue-600 to-transparent z-10" />

      {/* Container marquee */}
      <div
        className={`flex ${direction === "left"
          ? "animate-infinite-scroll-left"
          : "animate-infinite-scroll-right"}`}
        style={{
          animationDuration: `${duration}s`,
          width: `${items.length * 320 * 3}px` // Lebar dinamis berdasarkan jumlah item
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = 'running';
        }}
      >
        {tripled.map((it, idx) => (
          <Card key={`${it.src}-${idx}`} src={it.src} alt={it.alt} />
        ))}
      </div>
    </div>
  );
}

function Card({ src, alt }) {
  return (
    <div className="mx-3 shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-black/5 shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="h-[160px] w-[280px] md:h-[200px] md:w-[320px] relative">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 280px, 320px"
          onError={(e) => {
            // Fallback jika gambar error
            e.target.style.display = 'none';
          }}
        />
        {/* Fallback UI jika gambar tidak load */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
          <span className="text-slate-700 font-medium text-lg">{alt}</span>
        </div>
      </div>
    </div>
  );
}