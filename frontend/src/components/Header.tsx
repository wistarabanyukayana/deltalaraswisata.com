"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import navbarLogo from "@/assets/img/navbarLogo.png";
import path from "path";

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/service" },
  { name: "Artikel", href: "/article" },
  { name: "Galeri", href: "/gallery" },
  { name: "Tentang Dallas", href: "/about" },
];

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <Disclosure as="nav" className="rounded-b-xl bg-gray-100 md:rounded-none">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
              <div className="relative flex h-20 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-red-600 hover:text-white focus:text-red-600 focus:ring-2 focus:ring-red-600 focus:outline-hidden focus:ring-inset">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block size-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block size-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                  <div className="flex shrink-0 items-center">
                    <Image
                      alt="Delta Laras Wisata"
                      src={navbarLogo}
                      className="h-13 w-auto"
                      priority
                    />
                  </div>
                  <div className="hidden md:ml-6 md:flex md:w-full md:items-center md:justify-end">
                    <div className="flex items-center justify-center gap-0 text-center">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          aria-current={
                            item.href === pathname ? "page" : undefined
                          }
                          className={classNames(
                            item.href === pathname
                              ? "text-red-600 underline decoration-3 underline-offset-15"
                              : "text-gray-800 transition-colors hover:text-red-600",
                            "rounded-md p-2 font-semibold text-nowrap uppercase"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                      <MagnifyingGlassCircleIcon className="size-10 font-light text-red-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <DisclosurePanel
              transition
              className="origin-top rounded-b-xl transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 md:hidden"
            >
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    href={item.href}
                    aria-current={item.href === pathname ? "page" : undefined}
                    className={classNames(
                      item.href === pathname
                        ? "bg-red-200 text-red-600"
                        : "text-gray-800 hover:bg-red-200 hover:text-red-600",
                      "relative block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.href === pathname && (
                      <div className="absolute top-0 bottom-0 left-0 w-1 rounded-l-xl bg-red-600" />
                    )}

                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
