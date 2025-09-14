import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// Custom Arrow Components
const ChevronLeftIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

export default function VideoStack({ videos = [], className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [slideDirection, setSlideDirection] = useState("next"); // "next" or "prev"
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const SLIDE_DURATION = 4000; // 4 seconds per slide

  // Auto-play with progress
  useEffect(() => {
    if (videos.length === 0) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % videos.length);
          return 0;
        }
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [videos.length]);

  // Reset progress when manually changing slides
  const changeSlide = (newIndex, direction = "next") => {
    setSlideDirection(direction);
    setCurrentIndex(newIndex);
    setProgress(0);
  };

  // Navigation functions
  const nextSlide = () => {
    changeSlide((currentIndex + 1) % videos.length, "next");
  };

  const prevSlide = () => {
    changeSlide((currentIndex - 1 + videos.length) % videos.length, "prev");
  };

  // Touch handlers for mobile swiping
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    // Different slide directions based on swipe
    if (isLeftSwipe) {
      nextSlide(); // Swipe left = next video (slides right to left)
    } else if (isRightSwipe) {
      prevSlide(); // Swipe right = previous video (slides left to right)
    }
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Safety check - after all hooks
  if (!videos || videos.length === 0) {
    return (
      <div className="w-full h-[300px] md:h-[400px] flex items-center justify-center bg-gray-900/50 rounded-xl">
        <p className="text-white/60 text-sm">No videos available</p>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`relative w-full max-w-xs md:max-w-lg mx-auto px-4 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main Video Container */}
      <div className="relative">
        {/* Enhanced Stack Effect - Colorful Tilted Cards */}
        <div className="absolute inset-0">
          {/* Third card (bottom) - most tilted with purple gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/60 to-pink-600/40 rounded-xl transform translate-x-3 translate-y-4 rotate-3 scale-95 shadow-lg" />
          {/* Second card (middle) - slightly tilted with blue gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/70 to-purple-500/50 rounded-xl transform translate-x-1.5 translate-y-2 rotate-1 scale-97 shadow-xl" />
        </div>

        {/* Main Video Card */}
        <div className="relative w-full aspect-[4/5] md:aspect-[3/4] bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl border border-gray-800/50">
          {/* Video Container with Directional Slide Transition */}
          <div className="absolute inset-0">
            {videos.map((video, index) => (
              <motion.video
                key={`${index}-${currentIndex}`}
                src={video.src}
                autoPlay={index === currentIndex}
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
                playsInline
                initial={{
                  x:
                    index === currentIndex
                      ? slideDirection === "next"
                        ? "100%"
                        : "-100%"
                      : "0%",
                  opacity: index === currentIndex ? 1 : 0,
                }}
                animate={{
                  x:
                    index === currentIndex
                      ? "0%"
                      : slideDirection === "next"
                      ? "-100%"
                      : "100%",
                  opacity: index === currentIndex ? 1 : 0,
                }}
                exit={{
                  x: slideDirection === "next" ? "-100%" : "100%",
                  opacity: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{
                  zIndex: index === currentIndex ? 2 : 1,
                }}
              />
            ))}
          </div>

          {/* Minimal Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Single Progress Line - Bottom Position */}
          <div className="absolute bottom-3 left-3 right-3 z-10">
            <div className="h-0.5 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-white rounded-full shadow-sm"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Beautiful Navigation Arrows for Desktop - Darker */}
      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-16 -right-16 justify-between pointer-events-none">
        <motion.button
          className="bg-black/40 backdrop-blur-md text-white p-3 rounded-full border border-gray-700/50 hover:bg-black/60 hover:border-gray-600/70 transition-all duration-300 pointer-events-auto group shadow-lg"
          onClick={prevSlide}
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeftIcon className="w-6 h-6 group-hover:text-white drop-shadow-sm" />
        </motion.button>
        <motion.button
          className="bg-black/40 backdrop-blur-md text-white p-3 rounded-full border border-gray-700/50 hover:bg-black/60 hover:border-gray-600/70 transition-all duration-300 pointer-events-auto group shadow-lg"
          onClick={nextSlide}
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRightIcon className="w-6 h-6 group-hover:text-white drop-shadow-sm" />
        </motion.button>
      </div>{" "}
      {/* Enhanced Dot Indicators with Better Visibility */}
      <div className="flex justify-center mt-6 space-x-3">
        {videos.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
              index === currentIndex
                ? "bg-white border-white shadow-lg"
                : "bg-gray-800 border-gray-600 hover:bg-gray-600 hover:border-gray-400"
            }`}
            onClick={() => changeSlide(index)}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
      {/* Mobile Swipe Hint - Very Subtle */}
      <div className="md:hidden text-center mt-3">
        <p className="text-gray-500 text-xs">Swipe to browse</p>
      </div>
    </motion.div>
  );
}
