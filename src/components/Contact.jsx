/* eslint-disable react/no-unescaped-entities */
// Contact me page completed
import { Magnetic } from "./";
export default function Contact() {
  return (
    <div className="w-screen h-screen bg-pallet1">
      <div className="md:pt-44 md:pl-44  md:flex-row  flex flex-col-reverse pt-44  p-5">
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
            className="object-cover md:ml-10 md:h-64 md:w-64 h-24 w-24"
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
          <button className="text-white font-montserrat md:text-2xl p-2 mx-1 font-medium">
            Instagram
          </button>
        </Magnetic>
        <Magnetic>
          <button className="text-white font-montserrat md:text-2xl p-2 mx-1 font-medium">
            Facebook
          </button>
        </Magnetic>
        <Magnetic>
          <button className="text-white font-montserrat md:text-2xl p-2 mx-1 font-medium">
            Whatsapp
          </button>
        </Magnetic>
      </div>
    </div>
  );
}
