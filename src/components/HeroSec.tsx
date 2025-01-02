import React from "react";
import { Roboto, Playfair_Display } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function HeroSec() {
  return (
    <div
      className={`min-h-screen w-full text-white flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-20 ${roboto.className} py-10`}
    >
      <div className="text-center lg:text-left max-w-4xl opacity-0 animate-fadeIn">
        <p className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold tracking-wider uppercase mb-8">
          Welcome.
        </p>
        <h1
          className={`text-3xl md:text-4xl font-semibold leading-tight mb-4 bg-white text-[#0A001B] inline-block p-2 ${playfair.className}`}
        >
          Hi, I&apos;m Muhammad Sarim.
        </h1>
        <p className="text-lg md:text-2xl mb-6 opacity-80">
          A passionate front-end developer based in Shahdadpur, Sindh, Pakistan.
        </p>
        <p className="text-md md:text-lg leading-relaxed mb-8 opacity-80">
          I have worked on a wide range of front-end projects, from Portfolio
          Websites to eCommerce platforms, with a focus on creating clean,
          well-crafted interfaces that not only look great but also provide a
          seamless user experience.
        </p>
      </div>
      <div className="opacity-0 animate-fadeIn">
        <Image
          src="/hero.jpg"
          alt="Hero Section Image"
          width={1000}
          height={1000}
          className="rounded-full shadow-2xl shadow-[#1A033A] transform hover:scale-105 transition-transform duration-300 w-[300px] sm:w-[400px] md:w-[400px] lg:w-[900px] h-auto"
        />
      </div>
    </div>
  );
}

export default HeroSec;
