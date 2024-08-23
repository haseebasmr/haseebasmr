import { Parallax } from "react-scroll-parallax";

/* eslint-disable react/no-unescaped-entities */
export default function AboutMe() {
  return (
    <div className="w-screen bg-white">
      <div className="md:mx-48 mx-5 pt-20 pb-16 ">
        <h1 className="md:text-7xl  text-4xl font-medium">
          Helping brands thrive <br /> in the digital world
        </h1>
        <div className="flex md:flex-row flex-col md:mt-24 md:pt-24 mt-16 pt-16 border-t-2  border-gray-200 md:space-x-8 h-screen md:space-y-0 space-y-8">
          <div className="flex-1">
            <span
              className="max-h-14 font-medium  "
              style={{
                flex: 1,
              }}
            >
              I help companies from all over the world with tailor-made
              solutions. With each project, I push my work to new horizons,
              always putting quality first.
            </span>
            <div className="mt-10 opacity-50 ">
              <span className="  ">Always Exploring</span>
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
                src="/assets/images/backgroundPic.jpg"
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
              I can help you with...
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
              <span className="text-3xl font-medium ">Design</span>
            </div>
            <div className="mx-2 my-4 p-3 font-medium ">
              <p>
                With a solid track record in designing websites, I deliver
                strong and user-friendly digital designs. (Since 2024 only in
                combination with development)
              </p>
            </div>
          </div>
          <div className="flex-1  ">
            <div className="font-sans m-7 text-xs mx-5  text-gray-400 hidden md:block ">
              02
            </div>
            <div className="border-t-2 mx-5 p-4 "></div>
            <div className=" mx-5 ">
              <span className="text-3xl font-medium ">Development</span>
            </div>
            <div className="mx-2 my-4 p-3 font-medium ">
              <p>
                I build scalable websites from scratch that fit seamlessly with
                design. My focus is on micro animations, transitions and
                interaction. Build with Kirby CMS or Webflow.
              </p>
            </div>
          </div>
          <div className="flex-1  ">
            <div className="font-sans m-7 text-xs mx-5  text-gray-400 hidden md:block ">
              03
            </div>
            <div className="border-t-2 mx-5 p-4 "></div>
            <div className=" mx-5 ">
              <span className="text-3xl font-medium ">The full package</span>
            </div>
            <div className="mx-2 my-4 p-3 font-medium ">
              <p>
                A complete website from concept to implementation, that's what
                makes me stand out. My great sense for design and my development
                skills enable me to create kick-ass projects.
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
            <Parallax speed={-10} className="h-full w-full">
              <img
                src="/assets/images/backgroundPic.jpg"
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
              I am a proud member of the Awwwards International Jury, where I
              judge the best websites in the world using my expertise as a
              designer and developer. Micro animations and transitions have my
              full attention and get me thrilled with every move.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
