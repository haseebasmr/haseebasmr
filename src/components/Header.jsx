import { useNavigate } from "react-router-dom";
import Magnetic from "./common/Magnetic";
import RadialBtn from "./common/RadialBtn";

export default function Header() {
  // const buttons = ["Photos", "Videos", "Contact"];
  const buttons = [
    {
      Text: "Photos",
      Link: "/",
    },
    {
      Text: "Videos",
      Link: "/",
    },
    {
      Text: "Contact",
      Link: "/contact",
    },
  ];
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center md:px-8 md:py-8 py-4 px-2 relative z-40">
      <Magnetic>
        <button
          className="text-white font-montserrat text-xl p-2 font-medium"
          onClick={() => navigate("/")}
        >
          HaseebASMR
        </button>
      </Magnetic>
      <div className="hidden md:block">
        {buttons.map((button) => (
          <Magnetic key={button} className="inline-block">
            <button
              key={button}
              className="text-white font-montserrat text-lg p-2 mx-1 font-medium"
              onClick={() => navigate(button.Link)}
            >
              {button.Text}
            </button>
          </Magnetic>
        ))}
      </div>
      <RadialBtn />
    </header>
  );
}
