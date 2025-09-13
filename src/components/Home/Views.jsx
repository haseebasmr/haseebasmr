import { CountUp } from "../";
import { motion } from "framer-motion";
import ContactButtons from "./ContactButtons";

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
        <span className="text-pallet2 text-xl md:text-3xl font-montserrat font-bold mb-4">
          Over
        </span>
        <div className="relative flex items-end gap-2 md:gap-4">
          <span className="relative">
            <span className="font-montserrat font-black text-pallet1 text-[3.5rem] md:text-8xl lg:text-9xl text-center flex items-end drop-shadow-[0_15px_35px_rgba(0,0,0,0.25)]">
              <CountUp
                to={9200000}
                from={10000}
                direction="up"
                delay={0.2}
                duration={1.2}
                className="inline"
                separator=","
              />
              <span className="text-pallet2 text-3xl md:text-6xl align-super ml-1 mb-2 md:mb-4">
                +
              </span>
            </span>
            {/* Balanced floating shadow - consistent across all devices */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-1.8rem] w-[140%] md:w-[110%] h-6 md:h-8 rounded-full bg-gradient-to-r from-transparent via-black/12 to-transparent blur-2xl opacity-50"></div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-1.3rem] w-[130%] md:w-[100%] h-4 md:h-6 rounded-full bg-gradient-to-r from-pallet2/25 via-pallet1/35 to-pallet2/25 blur-xl opacity-60"></div>
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
