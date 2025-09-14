import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function VideoStack({ videos = [], className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const SLIDE_DURATION = 5000; // 5 seconds per slide

  // Auto-play with progress
  useEffect(() => {
    if (videos.length === 0) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % videos.length);
          return 0;
        }
        return prev + 100 / (SLIDE_DURATION / 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [videos.length, SLIDE_DURATION]);

  // Safety check - after all hooks
  if (!videos || videos.length === 0) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-gray-900 rounded-2xl">
        <p className="text-white">No videos available</p>
      </div>
    );
  }

  // Reset progress when manually changing slides
  const changeSlide = (newIndex) => {
    setCurrentIndex(newIndex);
    setProgress(0);
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

    if (isLeftSwipe) {
      changeSlide((currentIndex + 1) % videos.length);
    } else if (isRightSwipe) {
      changeSlide((currentIndex - 1 + videos.length) % videos.length);
    }
  };

  const nextSlide = () => {
    changeSlide((currentIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    changeSlide((currentIndex - 1 + videos.length) % videos.length);
  };

  // Stack animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`relative w-full max-w-4xl mx-auto px-4 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main Video Container */}
      <div className="relative">
        {/* Stack Effect - Background Cards */}
        <div className="absolute inset-0">
          {/* Third card (bottom) */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-2xl transform translate-x-4 translate-y-6 scale-95 opacity-30 shadow-xl" />
          {/* Second card (middle) */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl transform translate-x-2 translate-y-3 scale-97 opacity-60 shadow-2xl" />
        </div>

        {/* Main Video Card */}
        <motion.div
          className="relative w-full aspect-[9/16] md:aspect-[3/4] bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
          key={currentIndex}
          initial={{ opacity: 0, x: 300, rotateY: 45 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          exit={{ opacity: 0, x: -300, rotateY: -45 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          {/* Video */}
          <video
            src={videos[currentIndex]?.src}
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            key={`video-${currentIndex}`}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Progress Bar */}
          <div className="absolute top-4 left-4 right-4">
            <div className="flex space-x-1">
              {videos.map((_, index) => (
                <div
                  key={index}
                  className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: "0%" }}
                    animate={{
                      width:
                        index === currentIndex
                          ? `${progress}%`
                          : index < currentIndex
                          ? "100%"
                          : "0%",
                    }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.h3
              className="text-white font-confine text-2xl md:text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {videos[currentIndex]?.title}
            </motion.h3>
            <motion.p
              className="text-gray-300 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {videos[currentIndex]?.description}
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Navigation Controls - Desktop */}
      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-16 -right-16 justify-between pointer-events-none">
        <motion.button
          className="bg-black/50 backdrop-blur-sm text-white p-4 rounded-full hover:bg-black/70 transition-colors pointer-events-auto"
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft size={24} />
        </motion.button>
        <motion.button
          className="bg-black/50 backdrop-blur-sm text-white p-4 rounded-full hover:bg-black/70 transition-colors pointer-events-auto"
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight size={24} />
        </motion.button>
      </div>

      {/* Dot Indicators - Enhanced Visibility */}
      <div className="flex justify-center mt-8 space-x-3">
        {videos.map((_, index) => (
          <motion.button
            key={index}
            className={`relative overflow-hidden rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 h-3 bg-white"
                : "w-3 h-3 bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => changeSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            {/* Active indicator with progress */}
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Mobile Swipe Hint */}
      <div className="md:hidden text-center mt-6">
        <p className="text-gray-400 text-sm">
          Swipe left or right to browse videos
        </p>
      </div>
    </motion.div>
  );
}
