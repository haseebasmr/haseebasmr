import { CountUp } from "../";
import { motion } from "framer-motion";

export default function Views() {
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
        <span className="text-pallet2 text-xl md:text-3xl font-confine mb-2">
          Over
        </span>
        <div className="flex items-end gap-2 md:gap-4">
          <CountUp
            to={9200000}
            from={10000}
            direction="up"
            delay={0.2}
            duration={1.2}
            className="font-vanguard text-pallet1 drop-shadow-lg text-[3.5rem] md:text-8xl lg:text-9xl text-center"
            separator=","
          />
          <span className="font-vanguard text-pallet2 text-3xl md:text-6xl align-super ml-1">
            +
          </span>
        </div>
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-[-1.5rem] w-32 md:w-56 h-2 rounded-full bg-gradient-to-r from-pallet2/40 via-pallet1/60 to-pallet2/40 blur-md opacity-80"
          initial={{ scaleX: 0.7, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-pallet2 text-base md:text-lg font-confine mt-8 tracking-widest"
      >
        and counting
      </motion.span>
    </section>
  );
}
