"use client";
import { iconedNavLinks, navLinks } from "@/lib/data";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { logo } from "@/lib/assets";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Navbar() {
  useGSAP(() => {
    gsap.to("header", {
      y: -100,
      duration: 0.5,
      ease: "power4.out",
      delay: 5,
      scrollTrigger: {
        trigger: "header",
        start: "top top",
        end: "bottom top",
        scrub: true,
        toggleActions: "play none reverse none",
      },
    });
  });

  return (
    <header className="fixed w-full py-6 justify-between z-50 shadow-md">
      <nav className="flex w-full screen-max-width items-center">
        <Link
          href={navLinks[0].url}
          className="font-bold font-montserrat relative"
        >
          {navLinks[0].title}
          <Image
            className="absolute -top-1 right-0 z-[-1] w-full"
            src={logo}
            alt="Logo"
          />
        </Link>
        <div className="flex flex-1 justify-center">
          {navLinks.slice(1, 4).map((link) => (
            <Link key={link.id} href={link.url}>
              <div className="px-5 text-sm cursor-pointer text-gray-600 hover:text-black transition-all">
                {link.title}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-1 justify-center items-center">
          <SearchBar />
          {iconedNavLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <div className="px-5 text-md cursor-pointer text-red-600 hover:text-black transition-all">
                {link.icon}
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
