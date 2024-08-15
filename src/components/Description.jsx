import { AboutMeBtn } from "./";

export default function Description({ className }) {
  return (
    <div className={`w-screen h-auto bg-white relative ${className}`}>
      <div className="flex md:justify-center md:pt-52 pb-52 pt-10">
        <div className="flex flex-col md:flex-row max-w-5xl md:mx-20 mx-4 my-10 md:space-x-24 md:space-y-0 space-y-20">
          <div className="md:text-4xl text-2xl">
            Helping brands to stand out in the digital era. Together we will set
            the new status quo. No nonsense, always on the cutting edge.
          </div>
          <div className="md:text-lg text-sm md:w-auto w-60 relative">
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </div>
          <div className="absolute md:right-0 bottom-0 -right-12">
            <AboutMeBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
