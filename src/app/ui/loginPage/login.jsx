"use client";
import React, { useState, useEffect } from "react";
import LoginForm from "./login-form";
import Image from "next/image";

const screenshots = [
  "/screenshot1.png",
  "/screenshot2.png",
  "/screenshot3.png",
  "/screenshot4.png",
];

export default function LoginPage() {
  const [screenshotIndex, setScreenshotIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScreenshotIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-row justify-center pt-12">
      <div className="md:block hidden relative overflow-hidden md:-mt-3 -ml-8">
        <Image
          src="/home-phones.png"
          alt="home-phones"
          width={460}
          height={460}
        />
        <Image
          className={`absolute top-6 left-[155px] ${
            screenshotIndex === 0 || screenshotIndex === 1
              ? "animate-fade-in-2s"
              : "hidden"
          }`}
          src={screenshots[0]}
          alt="screenshot-0"
          width={250}
          height={460}
        />
        <Image
          className={`absolute top-6 left-[155px] ${
            screenshotIndex === 1 || screenshotIndex === 2
              ? "animate-fade-in-2s"
              : "hidden"
          }`}
          src={screenshots[1]}
          alt="screenshot-1"
          width={250}
          height={460}
        />
        <Image
          className={`absolute top-6 left-[155px] ${
            screenshotIndex === 2 || screenshotIndex === 3
              ? "animate-fade-in-2s"
              : "hidden"
          }`}
          src={screenshots[2]}
          alt="screenshot-2"
          width={250}
          height={460}
        />
        <Image
          className={`absolute top-6 left-[155px] ${
            screenshotIndex === 3 ? "animate-fade-in-2s" : "hidden"
          }`}
          src={screenshots[3]}
          alt="screenshot-3"
          width={250}
          height={460}
        />
      </div>
      <LoginForm />
    </div>
  );
}
