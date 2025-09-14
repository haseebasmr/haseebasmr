import { motion, useScroll, useTransform } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";

import {
  Haseeb,
  Description,
  PhotoCards,
  VideoCards,
  Transition,
  Views,
} from "../";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [photoCardsLoaded, setPhotoCardsLoaded] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (imageLoaded) {
      setTimeout(() => {
        setPhotoCardsLoaded(true);
      }, 1000);
    }
  }, [imageLoaded]);

  const progress = useTransform(scrollY, [0, 1000], [0, 1]);

  // X goes left
  const cameraXPos = useTransform(progress, (p) => -200 * p);
  const cameraYPos = useTransform(progress, (p) => -450 * p);
  const cameraRotate = useTransform(progress, [0, 1], [0, -30]);

  return (
    <>
      <Transition>
        <Parallax speed={-20}>
          <div className="relative w-screen h-[calc(100vh+100px)]">
            <img
              src="assets/images/main.jpeg"
              alt="bacground image"
              className="absolute top-0 left-0 w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
            <motion.img
              src="assets/images/boxpng.png"
              alt="bacground image"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ x: cameraXPos, y: cameraYPos, rotate: cameraRotate }}
            />
          </div>
        </Parallax>
        <Haseeb />
        <Description className="z-10 overflow-hidden" />
        <Views />

        {photoCardsLoaded && <VideoCards />}
        {imageLoaded && <PhotoCards />}
      </Transition>
    </>
  );
}
