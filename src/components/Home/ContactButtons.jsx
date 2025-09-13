import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

import { Magnetic } from "..";

export default function ContactButtons({ minimal = false }) {
  const instaButton = (e) => {
    e.preventDefault();
    window.open("http://www.instagram.com/haseebasmr/", "_blank");
  };
  const WhattsappButton = (e) => {
    e.preventDefault();
    window.open("http://wa.me/+923235407105", "_blank");
  };
  const tiktokButton = (e) => {
    e.preventDefault();
    window.open(
      "https://www.tiktok.com/@haseebasmr?_t=8p8N7OnZWUB&_r=1",
      "_blank"
    );
  };

  return (
    <div
      className={`flex justify-center items-end gap-3 md:gap-6 ${
        minimal
          ? "bg-transparent text-pallet2 p-0"
          : "bg-pallet4 text-gray-900 pt-5 md:pb-20 pb-10"
      }`}
    >
      <Magnetic>
        <a href="wa.me/+923235407105" target="_blank" onClick={WhattsappButton}>
          <button
            className={`group flex flex-col items-center font-montserrat ${
              minimal
                ? "text-sm md:text-base p-3 md:p-4"
                : "md:text-lg text-base p-2"
            } mx-1 font-bold transition-all duration-300 hover:scale-110 active:scale-95 bg-transparent rounded-2xl hover:text-pallet1 relative cursor-pointer`}
          >
            <div
              className={`flex-1 ${
                minimal ? "text-2xl md:text-4xl" : "md:text-5xl text-3xl"
              } mb-2 transition-all duration-300 group-hover:drop-shadow-[0_4px_12px_rgba(40,40,60,0.30)] group-hover:scale-105 text-pallet1`}
            >
              <FaWhatsapp />
            </div>
            <div
              className={`flex-1 ${
                minimal ? "text-[0.8rem] md:text-sm" : ""
              } tracking-wide font-bold text-pallet1`}
              style={{
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
              }}
            >
              WhatsApp
            </div>
          </button>
        </a>
      </Magnetic>
      <Magnetic>
        <a href="http://www.instagram.com/haseebasmr/" onClick={instaButton}>
          <button
            className={`group flex flex-col items-center font-montserrat ${
              minimal
                ? "text-sm md:text-base p-3 md:p-4"
                : "md:text-lg text-base p-2"
            } mx-1 font-bold transition-all duration-300 hover:scale-110 active:scale-95 bg-transparent rounded-2xl hover:text-pallet1 relative cursor-pointer`}
          >
            <div
              className={`flex-1 ${
                minimal ? "text-2xl md:text-4xl" : "md:text-5xl text-3xl"
              } mb-2 transition-all duration-300 group-hover:drop-shadow-[0_4px_12px_rgba(40,40,60,0.30)] group-hover:scale-105 text-pallet1`}
            >
              <FaInstagram />
            </div>
            <div
              className={`flex-1 ${
                minimal ? "text-[0.8rem] md:text-sm" : ""
              } tracking-wide font-bold text-pallet1`}
              style={{
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
              }}
            >
              Instagram
            </div>
          </button>
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href="https://www.tiktok.com/@haseebasmr?_t=8p8N7OnZWUB&_r=1"
          onClick={tiktokButton}
        >
          <button
            className={`group flex flex-col items-center font-montserrat ${
              minimal
                ? "text-sm md:text-base p-3 md:p-4"
                : "md:text-lg text-base p-2"
            } mx-1 font-bold transition-all duration-300 hover:scale-110 active:scale-95 bg-transparent rounded-2xl hover:text-pallet1 relative cursor-pointer`}
          >
            <div
              className={`flex-1 ${
                minimal ? "text-2xl md:text-4xl" : "md:text-5xl text-3xl"
              } mb-2 transition-all duration-300 group-hover:drop-shadow-[0_4px_12px_rgba(40,40,60,0.30)] group-hover:scale-105 text-pallet1`}
            >
              <FaTiktok />
            </div>
            <div
              className={`flex-1 ${
                minimal ? "text-[0.8rem] md:text-sm" : ""
              } tracking-wide font-bold text-pallet1`}
              style={{
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
              }}
            >
              TikTok
            </div>
          </button>
        </a>
      </Magnetic>
    </div>
  );
}
