import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

export default function StartScreen() {
  const greetings = [
    "Hello", // English
    "Hello", // English
    "Hello", // English
    "Hello", // English
    "Hello", // English
    "Hello", // English
    "Hello", // English
    "Hola", // Spanish
    "Bonjour", // French
    "Hallo", // German
    "Ciao", // Italian
    "こんにちは", // Japanese
    "안녕하세요", // Korean
    "你好", // Chinese
    "Привет", // Russian
    "مرحبا", // Arabic
    "مرحبا", // Arabic
    "مرحبا", // Arabic
    "مرحبا", // Arabic
    "مرحبا", // Arabic
    "مرحبا", // Arabic
  ];
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (greetingIndex !== greetings.length - 1) {
        setGreetingIndex((prev) => (prev + 1) % greetings.length);
      }
    }, 150);

    document.body.classList.add("overflow-hidden");
    document.body.classList.add("overflow-x-hidden");

    return () => {
      clearInterval(interval);
      document.body.classList.remove("overflow-hidden");
    };
  }, [greetingIndex, greetings.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <div className="bg-pallet1 h-screen w-screen flex items-center justify-center absolute z-50">
        <motion.p
          className="text-white md:text-6xl text-3xl text-center m-0 p-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "circInOut" }}
          style={{
            position: "fixed",
            top: "45%",
            left: "50%",
            transform: "translate(-50%)",
            color: "white",
            zIndex: "50",
          }}
        >
          {greetings[greetingIndex]}
        </motion.p>
        <div className="absolute lg:-bottom-40 -bottom-20 w-screen">
          <svg
            width="100%"
            viewBox="0 0 711 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M711 80C386.772 172.366 101.905 118.486 0 80V0H711V80Z"
              fill="#27374D"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
