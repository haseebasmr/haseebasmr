/* eslint-disable no-unused-vars */
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { GetInTouchBtn, Magnetic } from "./"; // Adjust the import path as needed

import React from "react";

export default function Footer() {
  const instaButton = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    window.open("http://www.instagram.com/haseebasmr/", "_blank"); // Open in new tab
  };
  const youtubeButton = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    window.open("https://youtube.com/@haseeb_asmr?feature=shared", "_blank"); // Open in new tab
  };
  const tiktokButton = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    window.open(
      "https://www.tiktok.com/@haseebasmr?_t=8p8N7OnZWUB&_r=1",
      "_blank"
    ); // Open in new tab
  };

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

    const currentFooterRef = footerRef.current;

    return () => {
      if (currentFooterRef) {
        observer.unobserve(currentFooterRef);
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
    <footer className="bg-pallet5 text-white md:pt-44 pt-24">
      <div className="lg:mx-72 mx-5">
        <div className="block mb-4">
          <img
            src="/assets/images/smallhome.jpg"
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
            <a
              href="http://www.instagram.com/haseebasmr/"
              onClick={instaButton}
            >
              <button className="text-white flex flex-col font-montserrat md:text-lg text-base p-2 mx-1 font-medium">
                <div className="flex-1">Instagram</div>
              </button>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://youtube.com/@haseeb_asmr?feature=shared"
              onClick={youtubeButton}
            >
              <button className="text-white flex flex-col font-montserrat md:text-lg text-base p-2 mx-1 font-medium">
                <div className="flex-1">YouTube</div>
              </button>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://www.tiktok.com/@haseebasmr?_t=8p8N7OnZWUB&_r=1"
              onClick={tiktokButton}
            >
              <button className="text-white flex flex-col font-montserrat md:text-lg text-base p-2 mx-1 font-medium">
                <div className="flex-1  ">TikTok</div>
              </button>
            </a>
          </Magnetic>
        </div>
        <div className="text-center text-xs pt-12 pb-4 text-gray-400">
          &copy; {new Date().getFullYear()} HaseebASMR. All rights reserved.
          <div>
            Creators:
            <a
              className="ml-1 mr-1"
              href="https://www.linkedin.com/in/sanaullah-turab-9791aa257/"
              target="_blank"
            >
              Sanaullah Turab
            </a>
            &
            <a
              className="ml-1 mr-1"
              href="https://www.linkedin.com/in/asadullah-turab-6946b2236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              Asadullah Turab.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
