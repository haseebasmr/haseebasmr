import Magnetic from "./common/Magnetic";
import RadialBtn from "./common/RadialBtn";

export default function Header() {
  const buttons = ["Photos", "Videos", "Contact"];
  return (
    <header className="flex justify-between items-center md:px-8 md:py-8 py-4 px-2 relative z-40">
      <Magnetic>
        <button className="text-white font-montserrat text-xl p-2 font-medium">
          HaseebASMR
        </button>
      </Magnetic>
      <div className="hidden md:block">
        {buttons.map((button) => (
          <Magnetic key={button} className="inline-block">
            <button
              key={button}
              className="text-white font-montserrat text-lg p-2 mx-1 font-medium"
            >
              {button}
            </button>
          </Magnetic>
        ))}
      </div>
      <RadialBtn />
    </header>
  );
}
