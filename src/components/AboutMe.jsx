export default function AboutMe() {
  return (
    <div className="w-screen bg-white">
      <div className="md:mx-48 mx-10 py-24">
        <h1 className="text-7xl font-medium">
          Helping brands thrive <br /> in the digital world
        </h1>
        <div className="flex md:flex-row flex-col mt-24 pt-24 border-t-2  border-gray-200 md:space-x-8 h-screen md:space-y-0 space-y-8">
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
            }}
          >
            <img
              src="/assets/images/backgroundPic.jpg"
              alt="no image"
              className="object-cover h-full"
            />
          </div>
        </div>
      </div>
      <section className=" mx-24 my-16 ">
        <div className=" p-10   ">
          <div className="block">
            <h1 className="text-4xl  ">I can help you with...</h1>
          </div>
        </div>
        <div className="flex">
          <div>Design</div>
          <div>Development</div>
          <div>The full package</div>
        </div>
      </section>
    </div>
  );
}
