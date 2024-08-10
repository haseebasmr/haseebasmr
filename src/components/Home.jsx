import { useEffect, useState } from "react";
import StartScreen from "./StartScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return loading ? (
    <StartScreen />
  ) : (
    <div className="bg-pallet2 h-screen w-screen flex items-center justify-center">
      <p className="text-white text-4xl">Home</p>
    </div>
  );
}
