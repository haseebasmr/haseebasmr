export default function AboutMe() {
  return (
    <div className="w-screen bg-white">
      <div className="md:mx-48 mx-10 py-24">
        <h1 className="text-7xl font-medium">
          Helping brands thrive <br /> in the digital world
        </h1>
        <div className="flex md:flex-row flex-col mt-24 pt-24 border-t-2 bg-red-400 border-gray-200 md:space-x-8 h-screen md:space-y-0 space-y-8">
          <div className="flex-1">
            <span
              className="max-h-14 font-medium bg-blue-500 "
              style={{
                flex: 1,
              }}
            >
              I help companies from all over the world with tailor-made
              solutions. With each project, I push my work to new horizons,
              always putting quality first.
            </span>
            <span className="bg-black text-white">Always Exploring</span>
          </div>

          <div
            className="bg-green-600"
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
    </div>
  );
}
