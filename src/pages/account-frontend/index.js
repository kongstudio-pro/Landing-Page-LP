// pages/account-frontend/index.js - Simplified for Frontend Team
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { ChevronDown, ChevronRight, ChevronLeft, Menu, X } from "lucide-react";

export default function AccountDashboard() {
  // Mock user data for frontend development
  const user = {
    user: {
      name: "John Doe",
      email: "john@example.com",
      image: "/avatar.png"
    }
  };
  const router = useRouter();
  const [tab, setTab] = useState("business");
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // desktop

  const toggleMobileSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleSidebarCollapse = () => setSidebarCollapsed(!sidebarCollapsed);

  const features = {
    business: [
      {
        title: "Gambar",
        desc: "Siap memposting desain statis.",
        img: "https://via.placeholder.com/300x200?text=Gambar",
        badge: null,
        href: "#",
      },
      { title: "Video sulih suara", desc: "Video subtitle tanpa wajah.", img: "https://via.placeholder.com/300x200?text=Video", badge: "Tren", href: "#" },
      { title: "Video", desc: "Video promo pendek dan berdampak.", img: "https://via.placeholder.com/300x200?text=Video", badge: null, href: "#" },
      { title: "Kreatif Iklan", desc: "Iklan untuk bisnis Anda.", img: "https://via.placeholder.com/300x200?text=Iklan", badge: null, href: "#" },
      { title: "Karusel", desc: "Posting multi-slide.", img: "https://via.placeholder.com/300x200?text=Karusel", badge: null, href: "#" },
      { title: "Meme", desc: "Meme tren dengan AI.", img: "https://via.placeholder.com/300x200?text=Meme", badge: null, href: "#" },
      { title: "Hari Spesial", desc: "Posting untuk liburan & acara.", img: "https://via.placeholder.com/300x200?text=Holiday", badge: null, href: "#" },
      { title: "Presentasi", desc: "Buat slide presentasi.", img: "https://via.placeholder.com/300x200?text=Presentasi", badge: null, href: "#" },
      { title: "Kutipan", desc: "Posting inspirasi & motivasi.", img: "https://via.placeholder.com/300x200?text=Quote", badge: null, href: "#" },
    ],
    ecommerce: [
      { title: "Avatar e-com", desc: "Iklan & ulasan produk otomatis.", img: "https://via.placeholder.com/300x200?text=Avatar", badge: "Baru", href: "#" },
      { title: "Katalog Produk", desc: "Template katalog produk siap posting.", img: "https://via.placeholder.com/300x200?text=Katalog", badge: null, href: "#" },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Backdrop Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-50 md:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 bg-white border-r flex flex-col transition-all duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0 w-72" : "-translate-x-full w-72"}
          md:translate-x-0 md:static
          ${sidebarCollapsed ? "md:w-16" : "md:w-72"}
        `}
      >
        {/* Header Sidebar */}
        <div className="flex items-center justify-between px-3 py-2 mb-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-600" />
            {!sidebarCollapsed && <span className="font-semibold">LembarKerja</span>}
          </Link>

          {/* Tombol collapse (desktop) */}
          <button
            onClick={toggleSidebarCollapse}
            className="hidden md:inline-flex p-1 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {sidebarCollapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </button>

          {/* Tombol close (mobile) */}
          <button
            onClick={toggleMobileSidebar}
            className="md:hidden p-1 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Konten Sidebar */}
        {!sidebarCollapsed && (
          <>
            <button
              onClick={() => router.push("/editor")}
              className="mx-3 mb-3 rounded-xl bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-500"
            >
              + Buat Baru
            </button>

            <nav className="flex-1 space-y-1 px-3">
              <SidebarItem href="/account-frontend" active>
                Beranda
              </SidebarItem>
              <SidebarItem href="/account-frontend/Design">Desain Saya</SidebarItem>

              <div className="border-t border-gray-200 my-2 pt-2">
                <SidebarDropdown label="Template">
                  <SidebarDropdown label="TK">
                    <SidebarItem href="/account-frontend/library/tk/a">TK A</SidebarItem>
                    <SidebarItem href="/account-frontend/library/tk/b">TK B</SidebarItem>
                  </SidebarDropdown>
                  <SidebarDropdown label="SD">
                    <SidebarItem href="/account-frontend/library/sd/kelas-1">Kelas 1</SidebarItem>
                    <SidebarItem href="/account-frontend/library/sd/kelas-2">Kelas 2</SidebarItem>
                    <SidebarItem href="/account-frontend/library/sd/kelas-3">Kelas 3</SidebarItem>
                  </SidebarDropdown>
                </SidebarDropdown>
              </div>

              <SidebarItem href="/account-frontend/payment">Pembayaran</SidebarItem>
              <SidebarItem href="/account-frontend/billing">Tagihan</SidebarItem>
              <SidebarItem href="/account-frontend/settings">Pengaturan</SidebarItem>
            </nav>

            <div className="mt-auto rounded-xl border bg-white p-3 mx-3 mb-3">
              <div className="flex items-center gap-3">
                <img
                  src={user?.user?.image || "/avatar.png"}
                  alt="avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{user?.user?.name || "Pengguna"}</p>
                  <p className="text-xs text-gray-500 truncate">{user?.user?.email || ""}</p>
                </div>
              </div>
              <button
                onClick={() => alert("Sign out clicked - Mock function for frontend")}
                className="mt-3 w-full rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50"
              >
                Keluar
              </button>
            </div>
          </>
        )}
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <header className="h-16 bg-white border-b px-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Tombol Mobile Sidebar */}
            <button
              onClick={toggleMobileSidebar}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-lg font-semibold">Buat Posting Baru</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <input
                placeholder="Cari…"
                className="w-64 rounded-md border px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <img
              src={user?.user?.image || "/avatar.png"}
              className="w-8 h-8 rounded-full object-cover"
              alt="user"
            />
          </div>
        </header>

        <main className="p-5 space-y-6">
          {/* Hero */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <HeroCard
              title="Video Avatar"
              desc={
                <>
                  Buat video UGC untuk <a className="underline" href="#">bercerita</a> dan{" "}
                  <a className="underline" href="#">iklan</a>
                </>
              }
              img="https://via.placeholder.com/400x200?text=Hero+Avatar"
            />
            <HeroCard
              title="Avatar e-com"
              desc={
                <>
                  Auto-Generate <a className="underline" href="#">Iklan video produk</a> &{" "}
                  <a className="underline" href="#">Ulasan Produk</a> dengan AI
                </>
              }
              img="https://via.placeholder.com/400x200?text=Hero+Ecom"
              tone="blue"
            />
          </div>

          {/* Tabs */}
          <div className="border-b">
            <div className="flex gap-6 px-1">
              <TabButton active={tab === "business"} onClick={() => setTab("business")}>
                Business
              </TabButton>
              <TabButton active={tab === "ecommerce"} onClick={() => setTab("ecommerce")}>
                Ecommerce
              </TabButton>
            </div>
          </div>

          {/* Grid fitur */}
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {features[tab].map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

// No authentication required for frontend development
// export async function getServerSideProps(context) {
//   return { props: {} };
// }

/* ===== Komponen SidebarItem ===== */
function SidebarItem({ href, children, active }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm ${active ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50"
        }`}
      onClick={() => router.push(href)}
    >
      <span className="truncate">{children}</span>
      {active && <span className="w-2 h-2 rounded-full bg-blue-600" />}
    </Link>
  );
}

/* ===== Komponen SidebarDropdown ===== */
function SidebarDropdown({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-3 py-2 text-sm rounded-xl hover:bg-gray-50"
      >
        <span>{label}</span>
        {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      {open && <div className="ml-4 pl-2 border-l border-gray-200 space-y-1">{children}</div>}
    </div>
  );
}

/* ===== Komponen lain ===== */
function TabButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative py-2 text-sm ${active ? "text-blue-700" : "text-gray-500 hover:text-gray-700"
        }`}
    >
      {children}
      {active && (
        <span className="absolute left-0 -bottom-px h-[3px] w-full rounded-full bg-blue-600" />
      )}
    </button>
  );
}

function HeroCard({ title, desc, img, tone = "pink" }) {
  const toneClass =
    tone === "blue" ? "from-blue-50 to-blue-100" : "from-pink-50 to-rose-100";
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-gradient-to-r ${toneClass}`}
    >
      <div className="p-5 pr-40">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-700">{desc}</p>
        <button className="mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-500">
          Buat sekarang
        </button>
      </div>
      <img
        src={img}
        alt={title}
        className="absolute right-2 bottom-0 h-24 w-auto object-contain pointer-events-none"
      />
    </div>
  );
}

function FeatureCard({ title, desc, img, href, badge }) {
  return (
    <div className="group rounded-2xl border bg-white shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="h-40 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold">{title}</h4>
          {badge && (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] text-amber-700">
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500">{desc}</p>
        <div className="pt-2">
          <Link
            href={href}
            className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-500"
          >
            Buat sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
