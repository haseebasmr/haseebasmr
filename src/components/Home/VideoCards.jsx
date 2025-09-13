import { Stack } from "../";

// import slide_video_1 from "/assets/videos/Promotion/thumbnail.mp4";
// import slide_video_2 from "/assets/videos/Nature/Thumbnail.mp4";
// import slide_video_3 from "/assets/videos/ASMR/thumbnail.mp4";
// import slide_video_4 from "/assets/videos/CookingASMR/thumbnail.mp4";

import slide_image_1 from "/assets/images/product1.jpg";
import slide_image_2 from "/assets/images/food1.jpg";
import slide_image_3 from "/assets/images/portrait1.jpg";
import slide_image_4 from "/assets/images/aesthetic1.jpg";
import slide_image_5 from "/assets/images/nature1.jpg";

function VideoCards() {
  const images = [
    {
      id: 1,
      img: slide_image_1,
    },
    {
      id: 2,
      img: slide_image_2,
    },
    {
      id: 3,
      img: slide_image_3,
    },
    {
      id: 4,
      img: slide_image_4,
    },
    {
      id: 5,
      img: slide_image_5,
    },
  ];

  return (
    <div className="w-screen bg-pallet4 py-20">
      <div className="md:text-5xl text-4xl font-medium  text-center py-10">
        Videos
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

export default VideoCards;
