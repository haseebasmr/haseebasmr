import { Shuffle, VideoStack } from "../";

import slide_video_1 from "/assets/videos/Promotion/thumbnail.mp4";
import slide_video_2 from "/assets/videos/Nature/Thumbnail.mp4";
import slide_video_3 from "/assets/videos/ASMR/thumbnail.mp4";
import slide_video_4 from "/assets/videos/CookingASMR/thumbnail.mp4";

function VideoCards() {
  const videos = [
    {
      src: slide_video_1,
      title: "Promotion",
      description: "Creative promotional content that captures attention",
    },
    {
      src: slide_video_2,
      title: "Nature",
      description: "Serene natural landscapes and peaceful moments",
    },
    {
      src: slide_video_3,
      title: "ASMR",
      description: "Relaxing ASMR content for ultimate tranquility",
    },
    {
      src: slide_video_4,
      title: "Cooking ASMR",
      description: "Satisfying cooking sounds and visual experiences",
    },
  ];

  return (
    <div className="w-screen bg-pallet4 py-20">
      <div className="text-center py-10">
        <Shuffle
          text="Videos"
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
          className="md:text-6xl text-[1.75rem] font-bold"
        />
      </div>

      <div className="container mx-auto px-4">
        <VideoStack videos={videos} />
      </div>
    </div>
  );
}

export default VideoCards;
