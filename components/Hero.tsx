"use client";
import { hero } from "@/lib/assets";
import Image from "next/image";
import HeroText from "./HeroText";
import { useGSAP } from "@gsap/react";

import { animateWithGsap } from "@/utils/animation";

export default function Hero() {
  useGSAP(() => {
    animateWithGsap(".heroText", "section", { x: 450 });
    animateWithGsap(".heroText2", "section", { x: -30 });
  });
  return (
    <section className="w-full relative z-0">
      <div>
        <Image
          src={hero}
          width={1920}
          alt="Orange sneaker"
          className="relative"
        />
        <HeroText
          text="Unleash Your Inner Champion"
          className="heroText translate-x-[25%] text-orange-600 top-52 left-40 text-6xl  w-[32rem] text-right "
        />
        <HeroText
          text="Chase Greatness"
          className="heroText2 text-white italic top-96 right-64 text-5xl w-20"
        />
      </div>
    </section>
  );
}
