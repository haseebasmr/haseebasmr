import { Counter } from "../";
import { motion, useInView } from "framer-motion";
import ContactButtons from "./ContactButtons";
import { useEffect, useState, useRef } from "react";

export default function Views() {
  const [counterValue, setCounterValue] = useState(10000);
  const [fontSize, setFontSize] = useState(56);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    const updateFontSize = () => {
      if (window.innerWidth >= 1024) {
        setFontSize(128);
      } else if (window.innerWidth >= 768) {
        setFontSize(96);
      } else {
        setFontSize(56);
      }
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  useEffect(() => {
    if (isInView) {
      const startValue = 10000;
      const endValue = 9200000;
      const duration = 1200; // 1.2 seconds
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        const currentValue = Math.floor(
          startValue + (endValue - startValue) * easedProgress
        );
        setCounterValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      // Small delay before starting
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, 200);
    }
  }, [isInView]);

  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-transparent select-none relative overflow-hidden py-16">
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-pallet2 text-base md:text-lg font-confine tracking-widest uppercase mb-6 md:mb-10"
      >
        Total Views
      </motion.span>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex flex-col items-center justify-center"
      >
        <span className="text-pallet2 text-xl md:text-3xl font-montserrat font-bold mb-4">
          Over
        </span>
        <div className="relative flex items-center gap-2 md:gap-4" ref={ref}>
          <span className="relative">
            <div className="flex items-center">
              <div className="text-[3.5rem] md:text-8xl lg:text-9xl">
                <Counter
                  value={counterValue}
                  places={[1000000, 100000, 10000, 1000, 100, 10, 1]}
                  fontSize={fontSize}
                  padding={0}
                  gap={fontSize >= 96 ? 6 : 2}
                  textColor="#27374D"
                  fontWeight={900}
                  containerStyle={{
                    filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.25))",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                  gradientHeight={0}
                  topGradientStyle={{ display: "none" }}
                  bottomGradientStyle={{ display: "none" }}
                />
              </div>
              <span className="text-pallet1 text-3xl md:text-6xl font-montserrat font-black ml-2">
                +
              </span>
            </div>
            {/* Enhanced floating shadow beneath the number */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-2rem] w-[120%] md:w-[110%] h-8 md:h-12 rounded-full bg-gradient-to-r from-transparent via-black/20 to-transparent blur-3xl opacity-60"></div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-1.5rem] w-[110%] md:w-[100%] h-6 md:h-8 rounded-full bg-gradient-to-r from-pallet2/30 via-pallet1/40 to-pallet2/30 blur-2xl opacity-70"></div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-1rem] w-[100%] md:w-[90%] h-4 md:h-6 rounded-full bg-gradient-to-r from-pallet2/40 via-pallet1/50 to-pallet2/40 blur-xl opacity-80"></div>
          </span>
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-pallet2 text-base md:text-lg font-confine mt-8 tracking-widest font-normal"
      >
        and counting
      </motion.span>

      {/* Contact Buttons - minimal, elegant, matching the section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center w-full"
      >
        <div className="flex flex-row gap-6 md:gap-8 px-4 md:px-0">
          <ContactButtons minimal={true} />
        </div>
      </motion.div>
    </section>
  );
}
