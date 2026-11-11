"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const ROLE_TEXTS = [
  "DevOps Engineer",
  "Site Reliability Engineer",
  "Cloud Engineer",
  "DevSecOps Engineer",
];

export default function Banner(): React.JSX.Element {
  const texts = ROLE_TEXTS;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        const timeout = setTimeout(() => {
          setIsDeleting(false);
          setTypingSpeed(100); // Reset typing speed
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 0);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center ">
          {/* Right side - Photo */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div className="relative top-10">
              {/* Mobile: Hello text positioned on top of image */}
              <div className="lg:hidden  -top-150 z-10">
                <div className="relative inline-block ">
                  <Image
                    src="/assets/arrow.png"
                    alt="Arrow pointer"
                    width={80}
                    height={80}
                    className="absolute top-5 rotate-z-280"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="relative">
                    <p className="text-white text-lg whitespace-nowrap">
                      Hello! I Am{" "}
                      <span className="text-purple-400">Hasan Jamal</span>
                    </p>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
                </div>
              </div>

              {/* Glow behind the photo */}
              <div
                className="absolute inset-0 m-auto w-[280px] h-[280px] rounded-full bg-purple-600/40 blur-3xl"
                aria-hidden="true"
              ></div>

              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-2 border-purple-500/40 shadow-2xl shadow-purple-900/50">
                <Image
                  src="/assets/hasan-headshot.jpg"
                  alt="Hasan Jamal - DevOps Engineer"
                  fill
                  sizes="320px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Status pill */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-auto lg:right-2 lg:translate-x-0 flex items-center gap-2 bg-[#1a0f2e] border border-purple-500/30 rounded-full px-4 py-1.5 shadow-lg whitespace-nowrap">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-white/80">Production: Stable</span>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Desktop: Hello text in original position */}
            <div className="hidden lg:inline-block relative">
              <Image
                src="/assets/arrow.png"
                alt="Arrow pointer"
                width={100}
                height={100}
                className="absolute "
                style={{ left: "-100px", top: "-50px", width: "auto", height: "auto" }}
              />
              <div style={{ bottom: 40, position: "relative" }}>
                <p className="text-white text-lg">
                  Hello! I Am{" "}
                  <span className="text-purple-400">Hasan Jamal</span>
                </p>
              </div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
            </div>
            <div className="">
              <p className="text-2xl"> An Engineer who </p>
              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
                Judges a system
                <br /> by its{" "}
                <span className="relative inline-block">
                  <Image src="/assets/circle.png" alt="Circle" width={230} height={200} className="absolute mt-2 -left-3" />
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    uptime
                  </span>
                </span>
                ...
              </h1>
              <p className="text-md text-white/80">
                Because if it falls over at 3AM, nothing else matters.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3 pt-15 text-center lg:text-left">
          <p className="text-5xl text-white font-bold">
            I&apos;m a {displayedText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>Currently, I&apos;m a DevOps Engineer at</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span className="text-blue-400 font-semibold">TEO International,</span>
            </span>
          </p>
          <p className="text-lg text-white/80 max-w-2xl mt-15 mx-auto lg:mx-0">
            DevOps Engineer with 3.5+ years hardening multi-cloud platforms
            across AWS and Azure. I build GitOps pipelines, run Kubernetes at
            scale, and bring a DevSecOps mindset to everything I ship —
            because fast means nothing if it isn&apos;t secure, observable,
            and built to survive production.
          </p>
        </div>
      </div>
    </section>
  );
}
