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
        className="text-pallet2 text-xl md:text-2xl font-confine tracking-widest uppercase mb-6 md:mb-10"
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
        <div className="relative flex items-center gap-2 md:gap-4" ref={ref}>
          <span className="relative">
            <div className="flex items-center justify-center">
              <div className="text-[3.5rem] md:text-8xl lg:text-9xl">
                <Counter
                  value={counterValue}
                  places={[1000000, 100000, 10000, 1000, 100, 10, 1]}
                  fontSize={fontSize}
                  padding={8}
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
                  showCommas={true}
                />
              </div>
              <span
                className="text-pallet1 font-montserrat -mt-2.5 md:mt-0 font-medium ml-1 md:ml-2"
                style={{
                  fontSize: `${fontSize * 0.8}px`,
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "baseline",
                  height: "fit-content",
                  alignSelf: "center",
                  transform:
                    window.innerWidth <= 768
                      ? "translateY(-8%)"
                      : "translateY(-5%)",
                }}
              >
                +
              </span>
            </div>
            {/* Wider rectangular shadow with rounded edges - more substantial and blurred */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[0.5rem] md:bottom-[-1rem] w-[130%] md:w-[125%] lg:w-[110%] h-[12px] md:h-[18px] rounded-xl bg-gradient-to-r from-transparent via-black/10 to-transparent blur-[4px] opacity-60"></div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[0.6rem] md:bottom-[-0.9rem] w-[100%] md:w-[105%] lg:w-[100%] h-[6px] md:h-[9px] rounded-lg bg-gradient-to-r from-transparent via-pallet1/25 to-transparent blur-[4px] opacity-70"></div>
          </span>
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-pallet2 text-2xl md:text-3xl font-confine mt-10 tracking-widest font-normal"
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
