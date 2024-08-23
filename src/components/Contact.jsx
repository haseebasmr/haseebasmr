/* eslint-disable react/no-unescaped-entities */
// Contact me page
import { Magnetic } from "./";
export default function Contact() {
  return (
    <div className="w-screen h-screen bg-pallet1">
      <div className="pt-44 pl-44 flex  ">
        <div className="flex-3">
          <h1 className="text-7xl mt-12 text-white">
            Let's start a <br /> project together
          </h1>
        </div>
        <div className="flex-1">
          <img
            className="object-cover ml-10 h-64 w-64 "
            style={{
              borderRadius: "50%",
            }}
            src="/assets/images/bg.jpg"
            alt="No Image!"
          />
        </div>
      </div>
      <div className="flex justify-center gap-8 mt-16">
        <Magnetic>
          <button className="text-white font-montserrat text-2xl p-2 mx-1 font-medium">
            Instagram
          </button>
        </Magnetic>
        <Magnetic>
          <button className="text-white font-montserrat text-2xl p-2 mx-1 font-medium">
            Facebook
          </button>
        </Magnetic>
        <Magnetic>
          <button className="text-white font-montserrat text-2xl p-2 mx-1 font-medium">
            Whatsapp
          </button>
        </Magnetic>
      </div>
    </div>
  );
}
