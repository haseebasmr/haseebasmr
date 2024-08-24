/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// Contact me page completed
import { Magnetic } from "./";
import React from "react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
export default function Contact() {
  const instaButton = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    window.location.href = "http://www.instagram.com/haseebasmr/"; // Replace with your desired URL
  };
  const WhattsappButton = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    window.location.href = "http://wa.me/+923235407105 "; // Replace with your desired URL
  };
  const tiktokButton = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    window.location.href =
      "https://www.tiktok.com/@haseebasmr?_t=8p8N7OnZWUB&_r=1"; // Replace with your desired URL
  };
  return (
    <div className="w-screen h-screen bg-pallet1">
      <div className="flex flex-row items-center justify-between md:px-10 w-screen pt-3 px-5 md:pt-11 ">
        <Magnetic>
          <button className=" font-montserrat  text-xl text-white">
            HaseebASMR
          </button>
        </Magnetic>

        <div className=" font-montserrat  text-xl text-white">
          <Magnetic>
            <button className="md:mt-1 mt-3">Contact</button>
            <div className="ml-9 cursor-pointer -mt-14 text-7xl ">.</div>
          </Magnetic>
        </div>
      </div>
      <div className="md:pt-16 md:pl-44  md:flex-row  flex flex-col-reverse pt-16  p-5">
        <div className="flex-3   ">
          <h1 className="text-7xl md:block hidden pt-14 mt-12 pb-6 text-white">
            Let's start a <br /> project together
          </h1>
          <h1 className="md:hidden block mr-32 text-white text-2xl pb-6 pl-8 ">
            Let's <br />
            start a <br />
            project <br />
            together
          </h1>
        </div>
        <div className="flex-1   md:-mb-0 -mb-24 pt-9  pl-36 md:pl-0 ">
          <img
            className="object-cover md:ml-10 md:h-64 md:w-64 h-28 w-28"
            style={{
              borderRadius: "50%",
            }}
            src="/assets/images/bg.jpg"
            alt="No Image!"
          />
        </div>
      </div>
      <div className="flex justify-center md:gap-8 md:mt-16">
        <Magnetic>
          <a
            href="wa.me/+923235407105"
            target="_blank"
            onClick={WhattsappButton}
          >
            <button className="text-white flex flex-col font-montserrat md:text-lg text-base p-2 mx-1 font-medium">
              <div className="flex-1 md:ml-6 ml-8  md:text-5xl text-3xl ">
                <FaWhatsapp />
              </div>
              <div className="flex-1">WhatsApp</div>
            </button>
          </a>
        </Magnetic>
        <Magnetic>
          <a href="http://www.instagram.com/haseebasmr/" onClick={instaButton}>
            <button className="text-white flex flex-col font-montserrat md:text-lg text-base p-2 mx-1 font-medium">
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
            <button className="text-white flex flex-col font-montserrat md:text-lg text-base p-2 mx-1 font-medium">
              <div className="flex-1 md:ml-2 ml-3 md:text-5xl text-3xl ">
                <FaTiktok />
              </div>
              <div className="flex-1">TikTok</div>
            </button>
          </a>
        </Magnetic>
      </div>
      <div className="text-center text-xs md:pt-28 pt-52 pb-4 text-gray-400">
        &copy; {new Date().getFullYear()} HaseebASMR. All rights reserved.
      </div>
    </div>
  );
}
