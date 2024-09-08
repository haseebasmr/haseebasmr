import { useNavigate } from "react-router-dom";
import Magnetic from "./common/Magnetic";
import RadialBtn from "./common/RadialBtn";

export default function Header() {
  const buttons = [
    {
      Text: "Photos",
      Link: "#photos",
    },
    {
      Text: "Videos",
      Link: "#videos",
    },
    {
      Text: "Contact",
      Link: "/contact",
    },
  ];
  const navigate = useNavigate();

  const handleClick = (link) => {
    if (link.startsWith("#")) {
      const id = link.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { state: { targetId: id } });
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, [2300]);
      }
    } else {
      navigate(link);
    }
  };

  return (
    <header className="flex justify-between bg-tempbg2 items-center md:px-8 md:py-8 py-4 px-2 relative z-40">
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
          <Magnetic key={button.Text} className="inline-block">
            <button
              key={button.Text}
              className="text-white font-montserrat text-lg p-2 mx-1 font-medium"
              onClick={() => handleClick(button.Link)}
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
