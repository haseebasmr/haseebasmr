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
                ? "text-xs md:text-sm p-2 md:p-3"
                : "md:text-lg text-base p-2"
            } mx-1 font-medium transition-all duration-300 hover:scale-110 active:scale-95 bg-transparent rounded-2xl hover:bg-pallet1/5 hover:text-pallet1 relative`}
          >
            <div
              className={`flex-1 ${
                minimal ? "text-2xl md:text-4xl" : "md:text-5xl text-3xl"
              } mb-2 transition-all duration-300 group-hover:drop-shadow-[0_4px_12px_rgba(40,40,60,0.20)]`}
            >
              <FaWhatsapp />
            </div>
            <div
              className={`flex-1 ${
                minimal ? "text-[0.75rem] md:text-sm" : ""
              } tracking-wide`}
            >
              WhatsApp
            </div>
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-pallet1/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>
        </a>
      </Magnetic>
      <Magnetic>
        <a href="http://www.instagram.com/haseebasmr/" onClick={instaButton}>
          <button
            className={`group flex flex-col items-center font-montserrat ${
              minimal
                ? "text-xs md:text-sm p-2 md:p-3"
                : "md:text-lg text-base p-2"
            } mx-1 font-medium transition-all duration-300 hover:scale-110 active:scale-95 bg-transparent rounded-2xl hover:bg-pallet1/5 hover:text-pallet1 relative`}
          >
            <div
              className={`flex-1 ${
                minimal ? "text-2xl md:text-4xl" : "md:text-5xl text-3xl"
              } mb-2 transition-all duration-300 group-hover:drop-shadow-[0_4px_12px_rgba(40,40,60,0.20)]`}
            >
              <FaInstagram />
            </div>
            <div
              className={`flex-1 ${
                minimal ? "text-[0.75rem] md:text-sm" : ""
              } tracking-wide`}
            >
              Instagram
            </div>
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-pallet1/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
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
                ? "text-xs md:text-sm p-2 md:p-3"
                : "md:text-lg text-base p-2"
            } mx-1 font-medium transition-all duration-300 hover:scale-110 active:scale-95 bg-transparent rounded-2xl hover:bg-pallet1/5 hover:text-pallet1 relative`}
          >
            <div
              className={`flex-1 ${
                minimal ? "text-2xl md:text-4xl" : "md:text-5xl text-3xl"
              } mb-2 transition-all duration-300 group-hover:drop-shadow-[0_4px_12px_rgba(40,40,60,0.20)]`}
            >
              <FaTiktok />
            </div>
            <div
              className={`flex-1 ${
                minimal ? "text-[0.75rem] md:text-sm" : ""
              } tracking-wide`}
            >
              TikTok
            </div>
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-pallet1/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>
        </a>
      </Magnetic>
    </div>
  );
}
