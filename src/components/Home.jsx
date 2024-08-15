import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { Haseeb, Description, PhotoCards, VideoCards } from "./";

export default function Home() {
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
              src="/assets/images/backgroundPic.jpg"
              alt="bacground image"
              className="object-cover h-screen w-screen"
            />
          </Parallax>
        </div>
      </motion.div>
      <Haseeb />
      <Description className="z-10 overflow-hidden" />
      <PhotoCards />
      <VideoCards />
    </>
  );
}
