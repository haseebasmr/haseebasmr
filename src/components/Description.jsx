/* eslint-disable react/prop-types */
import { AboutMeBtn } from "./";

export default function Description({ className }) {
  return (
    <div className={`w-screen h-auto bg-pallet4 relative ${className}`}>
      <div className="flex md:justify-center md:pt-52 pb-52 pt-10">
        <div className="flex flex-col md:flex-row max-w-5xl md:mx-20 mx-4 my-10 md:space-x-24 md:space-y-0 space-y-20">
          <div className="md:text-4xl text-2xl">
            Innovating visual excellence with every project, pushing boundaries
            and setting trends.
          </div>
          <div className="md:text-lg text-sm md:w-auto md:pt-2 w-60 relative">
            My blend of creative vision and technical expertise sets me apart in
            crafting unforgettable visual stories.
          </div>
          <div className="absolute md:right-0 bottom-0 -right-12">
            <AboutMeBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
