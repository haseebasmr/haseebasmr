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
    <div className="bg-pallet1 h-screen w-screen flex items-center justify-center absolute top-0 left-0">
      <motion.p
        className="text-white text-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "circInOut" }}
      >
        {greetings[greetingIndex]}
      </motion.p>
    </div>
  );
}
