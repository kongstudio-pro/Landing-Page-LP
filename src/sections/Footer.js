import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Kiri: Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logoLP.png"
                alt="Logo"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="text-xl font-bold text-slate-900">Lembar Pintar</span>
            </div>
            <p className="mt-4 max-w-xs text-center text-sm text-slate-500 md:text-left">
              Platform desain edukasi modern untuk guru, siswa, dan kreator.
            </p>
          </div>

          {/* Tengah: Navigasi */}
          <div className="flex flex-col items-center md:items-center">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">Navigasi</h3>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
              <Link href="/about" className="hover:text-blue-600 transition-colors duration-200">
                Tentang
              </Link>
              <Link href="/showcase" className="hover:text-blue-600 transition-colors duration-200">
                Showcase
              </Link>
              <Link href="/community" className="hover:text-blue-600 transition-colors duration-200">
                Komunitas
              </Link>
              <Link href="/privacy" className="hover:text-blue-600 transition-colors duration-200">
                Privasi
              </Link>
              <Link href="/terms" className="hover:text-blue-600 transition-colors duration-200">
                Syarat
              </Link>
            </nav>
          </div>

          {/* Kanan: Sosial */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">Ikuti Kami</h3>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="p-2 rounded-full bg-black hover:bg-gray-800 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.104C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0z" /></svg>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="p-2 rounded-full bg-black hover:bg-gray-800 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0016.616 3c-2.717 0-4.92 2.206-4.92 4.917 0 .386.044.762.127 1.124C7.728 8.77 4.1 6.797 1.671 3.149c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.418A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" /></svg>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-2 rounded-full bg-black hover:bg-gray-800 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16.5 7.5h.01"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="p-2 rounded-full bg-black hover:bg-gray-800 transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.112C19.671 3.5 12 3.5 12 3.5s-7.671 0-9.386.574a2.994 2.994 0 00-2.112 2.112C0 7.901 0 12 0 12s0 4.099.502 5.814a2.994 2.994 0 002.112 2.112C4.329 20.5 12 20.5 12 20.5s7.671 0 9.386-.574a2.994 2.994 0 002.112-2.112C24 16.099 24 12 24 12s0-4.099-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z" /></svg>
              </Link>
            </div>

            {/* Email Subscription (Optional) */}
            <div className="mt-6 w-full max-w-xs hidden md:block">
              <p className="text-xs text-slate-500 mb-2 text-right">Berlangganan newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Lembar Pintar. Semua hak cipta dilindungi.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-blue-600">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-blue-600">
              Syarat & Ketentuan
            </Link>
            <Link href="/contact" className="text-xs text-slate-500 hover:text-blue-600">
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;