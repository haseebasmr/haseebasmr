import { Stack } from "../";

import slide_image_1 from "/assets/images/product1.jpg";
import slide_image_2 from "/assets/images/food1.jpg";
import slide_image_3 from "/assets/images/portrait1.jpg";
import slide_image_4 from "/assets/images/aesthetic1.jpg";
import slide_image_5 from "/assets/images/nature1.jpg";

function PhotoCards() {
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
      <div className="md:text-5xl text-4xl font-medium text-center py-10">
        Photo Categories
      </div>
      <div className="w-screen flex justify-center">
        <Stack
          randomRotation={false}
          sensitivity={180}
          sendToBackOnClick={true}
          cardDimensions={{ width: 800, height: 800 }}
          cardsData={images}
        />
      </div>
    </div>
  );
}

export default PhotoCards;
