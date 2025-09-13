import { Stack } from "../";

import slide_video_1 from "/assets/videos/Promotion/thumbnail.mp4";
import slide_video_2 from "/assets/videos/Nature/Thumbnail.mp4";
import slide_video_3 from "/assets/videos/ASMR/thumbnail.mp4";
import slide_video_4 from "/assets/videos/CookingASMR/thumbnail.mp4";

function VideoCards() {
  const images = [
    {
      id: 1,
      src: slide_video_1,
      type: "video",
    },
    {
      id: 2,
      src: slide_video_2,
      type: "video",
    },
    {
      id: 3,
      src: slide_video_3,
      type: "video",
    },
    {
      id: 4,
      src: slide_video_4,
      type: "video",
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
