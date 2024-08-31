/* eslint-disable no-unused-vars */
// Contact me page completed
import { Magnetic, Transition } from "./";
import React from "react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();
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
    <Transition>
      <div className="w-screen h-screen bg-pallet1">
        <div className="flex flex-row items-center justify-between md:px-10 w-screen pt-3 px-5 md:pt-11 ">
          <Magnetic>
            <button
              className=" font-montserrat  text-xl text-white"
              onClick={() => navigate("/")}
            >
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
        <div className="md:pt-16 md:pl-44 justify-center items-center md:flex-row  flex flex-col pt-48   p-5">
          <div className="md:flex-3   flex-1  ">
            <h1 className="text-7xl md:block hidden pt-14 mt-12 pb-6 text-white">
              Let&apos;s start a <br /> project together
            </h1>
            <h1 className="md:hidden  block  text-white text-2xl ">
              Let&apos;s start a project together
            </h1>
          </div>
          <div className="flex-1  pt-4 md:pt-9  ">
            <img
              className="object-cover md:ml-10  md:h-64 md:w-64 h-32 w-32"
              style={{
                borderRadius: "50%",
              }}
              src="/assets/images/bg.jpg"
              alt="No Image!"
            />
          </div>
        </div>
        <div className="flex -ml-6 justify-center md:gap-8 md:mt-16">
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
            <a
              href="http://www.instagram.com/haseebasmr/"
              onClick={instaButton}
            >
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
        <div className="text-center text-xs  fixed bottom-0 w-screen md:pt-28 pt-56 pb-4 text-gray-400">
          &copy; {new Date().getFullYear()} HaseebASMR. All rights reserved.
        </div>
      </div>
    </Transition>
  );
}
