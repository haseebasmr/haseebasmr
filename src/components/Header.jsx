import Magnetic from "./common/Magnetic";

export default function Header() {
  const buttons = ["Photos", "Videos", "Contact"];
  return (
    <div className="flex justify-between items-center px-8 py-4">
      <Magnetic>
        <div className="text-white font-montserrat text-xl p-5">HaseebASMR</div>
      </Magnetic>
      <div>
        {buttons.map((button) => (
          <Magnetic key={button} className="inline-block">
            <button
              key={button}
              className="text-white font-montserrat text-lg p-5 mx-1"
            >
              {button}
            </button>
          </Magnetic>
        ))}
      </div>
    </div>
  );
}
