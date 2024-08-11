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

    return () => {
      clearInterval(interval);
    };
  }, [greetingIndex, greetings.length]);

  return (
    <div className="relative">
      <div className="bg-pallet1 h-screen w-screen flex items-center justify-center absolute">
        <motion.p
          className="text-white text-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "circInOut" }}
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
