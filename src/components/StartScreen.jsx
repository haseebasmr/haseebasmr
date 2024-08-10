import { useEffect } from "react";
import { useState } from "react";

export default function StartScreen() {
  const greetings = [
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
  ];
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, [greetingIndex, greetings.length]);

  return (
    <div className="bg-pallet1 h-screen w-screen flex items-center justify-center">
      <p className="text-white text-4xl">{greetings[greetingIndex]}</p>
    </div>
  );
}
