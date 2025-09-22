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
                src="/images/logo.png"
                alt="Logo"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="text-xl font-bold text-slate-900">LembarKerja</span>
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
                className="p-2 rounded-full bg-slate-100 hover:bg-blue-100 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="p-2 rounded-full bg-slate-100 hover:bg-blue-100 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Image src="/icons/twitter.svg" alt="Twitter" width={20} height={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-2 rounded-full bg-slate-100 hover:bg-blue-100 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="p-2 rounded-full bg-slate-100 hover:bg-blue-100 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Image src="/icons/youtube.svg" alt="YouTube" width={20} height={20} />
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
            &copy; {new Date().getFullYear()} LembarKerja. Semua hak cipta dilindungi.
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