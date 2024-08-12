import { AboutMeBtn } from "./";

export default function Description() {
  return (
    <div className="w-screen h-auto bg-white">
      <div className="flex justify-center py-52">
        <div className="flex max-w-5xl mx-20 my-10 space-x-24">
          <div className="text-4xl">
            Helping brands to stand out in the digital era. Together we will set
            the new status quo. No nonsense, always on the cutting edge.
          </div>
          <div className="text-lg relative">
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
            <div className="absolute -bottom-72 lg:left-5 -left-28">
              <AboutMeBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
