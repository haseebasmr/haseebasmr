import Magnetic from "./common/Magnetic";

export default function Header() {
  const buttons = ["Photos", "Videos", "Contact"];
  return (
    <header className="flex justify-between items-center px-8 py-8">
      <Magnetic>
        <button className="text-white font-montserrat text-xl p-2 font-medium">
          HaseebASMR
        </button>
      </Magnetic>
      <div>
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
    </header>
  );
}
