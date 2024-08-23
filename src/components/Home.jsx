import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { Haseeb, Description, PhotoCards, VideoCards } from "./";
import { useEffect, useState } from "react";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [photoCardsLoaded, setPhotoCardsLoaded] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      setTimeout(() => {
        setPhotoCardsLoaded(true);
      }, 1000);
    }
  }, [imageLoaded]);

  return (
    <>
      <motion.div
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-screen h-screen">
          <Parallax speed={-20}>
            <img
              src="/assets/images/bg.jpg"
              alt="bacground image"
              className="object-cover h-screen w-screen"
              onLoad={() => setImageLoaded(true)}
            />
          </Parallax>
        </div>
      </motion.div>
      <Haseeb />
      <Description className="z-10 overflow-hidden" />
      {imageLoaded && <PhotoCards />}
      {photoCardsLoaded && <VideoCards />}
    </>
  );
}
