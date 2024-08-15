export default function AboutMe() {
  return (
    <div className="w-screen bg-white h-screen">
      <div className=" mx-48 py-24 items-center  h-full">
        <h1 className="text-7xl font-medium  ">
          Helping brands thrive <br /> in the digital world
        </h1>
        <div className="flex mt-20 p-20 gap-14  ">
          <p className="bg-green-500">
            I help companies from all over the world with tailor-made solutions.
            With each project, I push my work to new horizons, always putting
            quality first.
          </p>
          <div className="bg-blue-700">
            <img src="/assets/images/backgroundPic.jpg" alt="no image" />
          </div>
        </div>
      </div>
    </div>
  );
}
