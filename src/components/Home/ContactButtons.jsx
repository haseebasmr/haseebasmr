import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

import { Magnetic } from "..";

export default function ContactButtons() {
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
      "_blank",
    );
  };

  return (
    <div className="flex justify-center md:gap-8 bg-pallet4 text-pallet2 pt-5">
      <Magnetic>
        <a href="wa.me/+923235407105" target="_blank" onClick={WhattsappButton}>
          <button className="flex flex-col font-montserrat md:text-lg text-base p-2 mx-1 font-medium">
            <div className="flex-1 md:ml-6 ml-8  md:text-5xl text-3xl ">
              <FaWhatsapp />
            </div>
            <div className="flex-1">WhatsApp</div>
          </button>
        </a>
      </Magnetic>
      <Magnetic>
        <a href="http://www.instagram.com/haseebasmr/" onClick={instaButton}>
          <button className="flex flex-col font-montserrat md:text-lg text-base p-2 mx-1 font-medium">
            <div className="flex-1 md:ml-5 ml-6 md:text-5xl text-3xl ">
              <FaInstagram />
            </div>
            <div className="flex-1">Instagram</div>
          </button>
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href="https://www.tiktok.com/@haseebasmr?_t=8p8N7OnZWUB&_r=1"
          onClick={tiktokButton}
        >
          <button className="flex flex-col font-montserrat md:text-lg text-base p-2 mx-1 font-medium">
            <div className="flex-1 md:ml-2 ml-3 md:text-5xl text-3xl ">
              <FaTiktok />
            </div>
            <div className="flex-1">TikTok</div>
          </button>
        </a>
      </Magnetic>
    </div>
  );
}
