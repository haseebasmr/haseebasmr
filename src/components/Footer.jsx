import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { GetInTouchBtn, Magnetic } from "./"; // Adjust the import path as needed

export default function Footer() {
  const controls = useAnimation();
  const footerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0 });
    } else {
      controls.start({ x: "-100%" });
    }
  }, [inView, controls]);

  return (
    <footer className="bg-pallet1 text-white md:pt-44 pt-24">
      <div className="md:mx-72 mx-5">
        <div className="block mb-4">
          <img
            src="/assets/images/smallPic.jpg"
            alt="Small Pic"
            className="md:w-24 md:h-24 w-12 h-12 rounded-full md:mr-12 mr-5 inline-block"
          />
          <div className="md:text-8xl text-5xl inline-block align-top font-medium">
            Let&apos;s work
          </div>
        </div>
        <div className="md:text-8xl text-5xl block font-medium">together</div>
        <div
          ref={footerRef}
          className="w-full mt-32 border-t-2 border-gray-500"
        ></div>
        <motion.div
          animate={controls}
          initial={{ x: "-100vw" }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <GetInTouchBtn className="mt-24" />
        </motion.div>
        <div className="flex justify-center -mt-20">
          <Magnetic>
            <button className="text-white font-montserrat text-lg p-2 mx-1 font-medium">
              Instagram
            </button>
          </Magnetic>
          <Magnetic>
            <button className="text-white font-montserrat text-lg p-2 mx-1 font-medium">
              Facebook
            </button>
          </Magnetic>
          <Magnetic>
            <button className="text-white font-montserrat text-lg p-2 mx-1 font-medium">
              Whatsapp
            </button>
          </Magnetic>
        </div>
        <div className="text-center pt-12 pb-4">
          &copy; {new Date().getFullYear()} HaseebASMR. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
