import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const animateWithGsap = (
  target: string,
  targetTrigger: string,
  animationProps: any
) => {
  gsap.to(target, {
    ...animationProps,
    duration: 1.5,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
      trigger: targetTrigger,
      start: "top top",
      end: "8% top",
      scrub: 1,
    },
  });
};
