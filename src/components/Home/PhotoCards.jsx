import { Stack, Shuffle } from "../";
import { useState, useEffect } from "react";

import slide_image_1 from "/assets/images/product1.jpg";
import slide_image_2 from "/assets/images/food1.jpg";
import slide_image_3 from "/assets/images/portrait1.jpg";
import slide_image_4 from "/assets/images/aesthetic1.jpg";
import slide_image_5 from "/assets/images/nature1.jpg";

function PhotoCards() {
  const [cardDimensions, setCardDimensions] = useState({
    width: 280,
    height: 350,
  });

  useEffect(() => {
    const updateCardSize = () => {
      if (window.innerWidth < 768) {
        setCardDimensions({ width: 280, height: 350 }); // Mobile - smaller polaroid
      } else if (window.innerWidth < 1024) {
        setCardDimensions({ width: 400, height: 500 }); // Tablet
      } else {
        setCardDimensions({ width: 500, height: 625 }); // Desktop - polaroid proportions
      }
    };

    updateCardSize();
    window.addEventListener("resize", updateCardSize);
    return () => window.removeEventListener("resize", updateCardSize);
  }, []);

  const images = [
    {
      id: 1,
      src: slide_image_1,
      type: "image",
      label: "Product",
    },
    {
      id: 2,
      src: slide_image_5,
      type: "image",
      label: "Nature",
    },
    {
      id: 3,
      src: slide_image_2,
      type: "image",
      label: "Food",
    },
    {
      id: 4,
      src: slide_image_4,
      type: "image",
      label: "Aesthetics",
    },
    {
      id: 5,
      src: slide_image_3,
      type: "image",
      label: "Portrait",
    },
  ];

  return (
    <div className="bg-pallet4 pb-28" id="photos">
      <div className="text-center py-10">
        <Shuffle
          text="Photos"
          shuffleDirection="right"
          duration={0.7}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.08}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
          loop={true}
          loopDelay={1}
          className="md:text-6xl text-[1.8rem] font-bold"
        />
      </div>
      <div className="w-full flex justify-center px-4">
        <Stack
          randomRotation={true}
          sensitivity={150}
          sendToBackOnClick={true}
          cardDimensions={cardDimensions}
          cardsData={images}
          polaroidStyle={true}
        />
      </div>
    </div>
  );
}

export default PhotoCards;
