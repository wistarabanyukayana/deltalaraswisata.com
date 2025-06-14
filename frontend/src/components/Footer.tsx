import Link from "next/link";

import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer id="footer">
      <div
        id="footer-top"
        className="flex w-full items-center justify-center bg-zinc-800 px-[12px] py-[25px] text-zinc-50"
      >
        <div className="flex w-5xl flex-col justify-around gap-7 sm:flex-row">
          <div className="mb-[35px] flex hidden flex-col sm:mb-0">
            <h3 className="font-merriweather-sans mb-[25px] text-start text-xl font-semibold text-nowrap lg:mb-[35px] lg:text-3xl">
              Delta Laras Wisata
            </h3>
            <p className="mb-[25px] text-justify text-sm text-zinc-200 lg:text-base">
              PT. Delta Laras Wisata berupaya untuk selalu meningkatkan kualitas
              pelayanan dengan menghadirkan berbagai fasilitas dan program yang
              sesuai dengan kebutuhan jamaah. Kami berharap dapat terus menjadi
              bagian dari perjalanan spiritual Anda dan bersama-sama meraih
              ridha Allah SWT.
            </p>
            <div className="flex items-center gap-4 text-zinc-400 sm:justify-start">
              <a
                href="https://www.facebook.com/DALLASTOURTRAVEL"
                className="transition-opacity hover:opacity-80"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/officialdallastourtravel"
                className="transition-opacity hover:opacity-80"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@dallastourtravel"
                className="transition-opacity hover:opacity-80"
                aria-label="YouTube"
              >
                <SiTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex w-fit flex-col sm:mb-0">
            <h3 className="font-merriweather-sans mb-[10px] text-start text-base font-semibold text-nowrap lg:mb-[35px] lg:text-3xl">
              Hubungi Kami
            </h3>
            <p className="flex flex-col items-start justify-around gap-2 text-justify text-sm text-zinc-200 lg:text-base">
              <a
                className="flex flex-row items-center gap-2 transition-opacity hover:opacity-80"
                href="https://wa.me/6288222122250"
              >
                <SiWhatsapp className="inline-block h-5 w-5" /> 088222122250
              </a>

              <a
                className="flex flex-row items-center gap-2 transition-opacity hover:opacity-80"
                href="tel:88222122250"
              >
                <PhoneIcon className="inline-block h-5 w-5" /> 088222122250
              </a>
              <a
                className="flex flex-row items-center gap-2 transition-opacity hover:opacity-80"
                href="mailto:business@dallastourtravel.com"
              >
                <EnvelopeIcon className="inline-block h-5 w-5" />{" "}
                business@dallastourtravel.com
              </a>
              <a
                className="transition-opacity hover:opacity-80"
                href="https://g.co/kgs/gaJF2zi"
              >
                <MapPinIcon className="inline-block h-5 w-5" /> Jl. Raya
                Kalibata No.25, RT.11/RW.5, Cawang, Kec. Kramat jati, Kota
                Jakarta Timur, Daerah Khusus Ibukota Jakarta 13630
              </a>
            </p>
          </div>
          <div className="flex hidden flex-col">
            <h3 className="font-merriweather-sans mb-[25px] text-start text-xl font-semibold lg:mb-[35px] lg:text-3xl">
              Navigasi
            </h3>
            <p className="flex flex-col gap-1 text-start text-sm text-nowrap text-zinc-200 uppercase lg:text-base">
              <Link href="/">Beranda</Link>
              <Link href="/product-and-service">Produk dan Layanan</Link>
              <Link href="/article">Artikel</Link>
              <Link href="/gallery">Galeri</Link>
              <Link href="/about">Tentang Dallas</Link>
            </p>
          </div>
        </div>
      </div>
      <div
        id="footer-bottom"
        className="flex w-full items-center justify-center bg-zinc-950 px-[12px] py-[30px] text-zinc-200"
      >
        <div className="flex w-5xl flex-col items-center justify-center gap-2 text-center text-sm sm:flex-row sm:justify-between lg:text-base">
          <p>
            &copy; {new Date().getFullYear()} PT. Delta Laras Wisata. Semua Hak
            Cipta Dilindungi.
          </p>
          <p>Syarat & Ketentuan</p>
        </div>
      </div>
    </footer>
  );
}
