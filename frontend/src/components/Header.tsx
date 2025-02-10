"use client";

import { useRef, useLayoutEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import {
  Disclosure,
  CloseButton,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Search } from "lucide-react";

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Produk & Layanan", href: "/product-and-service" },
  { name: "Artikel", href: "/article" },
  { name: "Galeri", href: "/gallery" },
  { name: "Tentang Dallas", href: "/about" },
];

export default function Navbar() {
  const sourceRef = useRef(null);
  const targetRef = useRef(null);

  const pathname = usePathname();

  // useLayoutEffect ensures the DOM is updated before the browser paints.
  useLayoutEffect(() => {
    if (sourceRef.current && targetRef.current) {
      // Measure the source element’s height.
      const height = sourceRef.current.getBoundingClientRect().height;
      // Directly set the target element’s height via its style.
      targetRef.current.style.height = `${height}px`;
    }
  }, []); // empty dependency array so this runs only once after mount

  return (
    <header id="header">
      <Disclosure
        ref={sourceRef}
        id="navbar"
        as="nav"
        className="fixed top-0 left-0 z-100 w-full overflow-hidden lg:bg-zinc-50"
      >
        <h1 className="hidden">Delta Laras Wisata</h1>
        <div className="relative z-10 mx-auto max-w-6xl bg-zinc-50 p-4">
          <div className="relative flex items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded p-2 text-zinc-700 transition-colors hover:text-rose-500 focus:ring-2 focus:ring-rose-500 focus:outline-hidden focus:ring-inset">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center lg:justify-between">
              <div className="flex shrink-0 items-center">
                <Link
                  href="/"
                  className="flex max-w-[181px] items-center sm:max-w-[201px]"
                >
                  <Image
                    src="/images/logo-navbar.png"
                    alt="Delta Laras Wisata Logo"
                    width={181}
                    height={61}
                    placeholder="blur"
                    blurDataURL="/images/logo-navbar.png"
                    //priority={true}, commented because of a bug in Next.js. Replaced by placeholder and blurDataURL. See issue #44556
                  />
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="flex items-center gap-4 text-base uppercase">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={item.href === pathname ? "page" : undefined}
                      className={`${
                        item.href === pathname
                          ? "text-rose-500 underline decoration-3 underline-offset-15"
                          : "text-zinc-700 transition-colors hover:text-rose-500"
                      } text-md font-bold`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href="/#">
                    <Search className="size-8 rounded-full border-1 border-rose-500 p-1 text-center text-rose-500 transition-opacity hover:opacity-60" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel
          transition
          className="h-screen origin-top bg-transparent transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 lg:hidden"
        >
          <div className="absolute z-50 flex w-full flex-col gap-1 rounded-b-3xl border-b bg-zinc-50 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                href={item.href}
                aria-current={item.href === pathname ? "page" : undefined}
                className={`${
                  item.href === pathname
                    ? "bg-zinc-300 text-zinc-700"
                    : "text-zinc-700 hover:bg-zinc-400 hover:text-zinc-200"
                } "block rounded px-3 py-2 text-base font-medium`}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
          <CloseButton
            as="div"
            className="fixed z-40 h-full w-full bg-zinc-900 opacity-50"
          />
        </DisclosurePanel>
      </Disclosure>
      <div ref={targetRef}></div>
    </header>
  );
}
