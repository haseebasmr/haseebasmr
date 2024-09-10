import { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import Transition from "./Transition";

export default function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Transition>
      <div className="w-screen md:mt-24 mt-20 bg-white">
        <div className="md:mx-48 mx-5 pt-20 pb-16 ">
          <h1 className="md:text-7xl  text-4xl font-medium">
            Transforming ideas into <br /> visual masterpieces
          </h1>
          <div className="flex md:flex-row flex-col md:mt-24 md:pt-24 mt-16 pt-16 border-t-2  border-gray-200 md:space-x-8 h-screen md:space-y-0 space-y-8">
            <div className="flex-1">
              <span
                className="max-h-14 font-medium  "
                style={{
                  flex: 1,
                }}
              >
                I work with companies around the world to create customized
                visual solutions that fit their needs. With every project, I
                challenge myself to explore new creative ideas while always
                focusing on delivering the highest quality.
              </span>
              <div className="mt-10 opacity-50 ">
                <span className="  ">Perpetual Learning…</span>
              </div>
            </div>

            <div
              className=""
              style={{
                flex: 2,
                overflow: "hidden",
              }}
            >
              <Parallax speed={-15} className="h-full w-full">
                <img
                  src="/assets/images/about1.jpg"
                  alt="no image"
                  className="object-cover h-full w-full"
                />
              </Parallax>
            </div>
          </div>
        </div>
        <section className=" md:mx-24 md:my-16 ">
          <div className=" md:p-10 p-1 mx-4   ">
            <div className="block">
              <h5 className="md:text-5xl mb-7  text-3xl font-medium ">
                I&apos;m here to guide you through...
              </h5>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row   md:m-5 md:gap-7 ">
            <div className="flex-1  ">
              <div className="font-sans m-7 text-xs mx-5  text-gray-400 hidden md:block ">
                01
              </div>
              <div className="border-t-2 mx-5 p-4 "></div>
              <div className=" mx-5 ">
                <span className="text-3xl font-medium ">Photography</span>
              </div>
              <div className="mx-2 my-4 p-3 font-medium ">
                <p>
                  With 6 years of experience in photography, I provide striking
                  visual content that drives business growth and enhances
                  personal projects with creative and professional photography.
                </p>
              </div>
            </div>
            <div className="flex-1  ">
              <div className="font-sans m-7 text-xs mx-5  text-gray-400 hidden md:block ">
                02
              </div>
              <div className="border-t-2 mx-5 p-4 "></div>
              <div className=" mx-5 ">
                <span className="text-3xl font-medium ">Videography</span>
              </div>
              <div className="mx-2 my-4 p-3 font-medium ">
                <p>
                  From captivating ads to cinematic visuals, I craft dynamic
                  content that leaves a lasting impression and constantly
                  evolves with fresh ideas.
                </p>
              </div>
            </div>
            <div className="flex-1  ">
              <div className="font-sans m-7 text-xs mx-5  text-gray-400 hidden md:block ">
                03
              </div>
              <div className="border-t-2 mx-5 p-4 "></div>
              <div className=" mx-5 ">
                <span className="text-3xl font-medium ">ASMR</span>
              </div>
              <div className="mx-2 my-4 p-3 font-medium ">
                <p>
                  Experience the magic of ASMR through videos that combine rich,
                  calming sounds with compelling visuals, offering a unique and
                  deeply satisfying sensory journey.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="md:mx-48 mx-5 md:py-24">
          <div className="flex md:flex-row flex-col-reverse md:mt-24 pt-22 md:space-x-8 h-screen md:space-y-0 space-y-8">
            <div
              className="mb-5 md:mb-0 "
              style={{
                flex: 1,
                overflow: "hidden",
              }}
            >
              <Parallax speed={-15} className="h-full w-full">
                <img
                  src="/assets/images/about2.jpg"
                  alt="no image"
                  className="object-cover h-full"
                />
              </Parallax>
            </div>
            <div className="flex-1  ">
              <div className="md:mt-44 md:ml-20  ">
                <span className="  md:text-5xl  text-4xl  font-medium">
                  Achievments...
                </span>
              </div>

              <p
                className="mt-7 md:mb-0 mb-10  md:ml-20 md:mt-10 font-medium  "
                style={{
                  flex: 1,
                }}
              >
                Over six years of industry experience, global client
                collaborations, and contributions to Pakistani television shows
                have shaped my creative path. I prioritize values while
                showcasing content creation&apos;s boundless opportunities while
                adhering the principles of islam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
