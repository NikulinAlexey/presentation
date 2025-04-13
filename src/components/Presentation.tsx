import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slide from "./Slide";
import { ISlide } from "../types";
import { cn } from "../utils/libs";
import Container from "./Container";
import ProgressBar from "./ProgressBar";

interface PresentationProps {
  slides: ISlide[];
}

export const Presentation: React.FC<PresentationProps> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prev) => {
      const newIndex = Math.min(prev + 1, slides.length - 1);
      localStorage.setItem("currentSlideIndex", newIndex.toString());
      return newIndex;
    });
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prev) => {
      const newIndex = Math.max(prev - 1, 0);
      localStorage.setItem("currentSlideIndex", newIndex.toString());
      return newIndex;
    });
  };

  const currentSlide = slides[currentSlideIndex];
  const progessPercentage = ((currentSlideIndex + 1) / slides.length) * 100;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goToNextSlide();
      if (e.key === "ArrowLeft") goToPrevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Инициализация при загрузке компонента (добавьте в ваш компонент)
  useEffect(() => {
    const savedIndex = localStorage.getItem("currentSlideIndex");
    if (savedIndex) {
      setCurrentSlideIndex(parseInt(savedIndex, 10));
    }
  }, []);

  return (
    <div className="flex flex-col gap-y-10">
      <ProgressBar progressPercentage={progessPercentage} />
      <Container>
        <div className="flex gap-x-10 items-center">
          <motion.button
            className={cn(
              "mr-auto select-none flex items-center font-medium bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white rounded-xl",
              "shadow-md hover:shadow-lg transition-all duration-300",
              "flex items-center gap-2",
              {
                "opacity-50 cursor-not-allowed bg-gray-400 hover:bg-gray-400":
                  currentSlideIndex === 0,
              }
            )}
            onClick={goToPrevSlide}
            disabled={currentSlideIndex === 0}
            type="button"
            whileHover={{
              boxShadow:
                currentSlideIndex === 0
                  ? ""
                  : "0 4px 12px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: currentSlideIndex === 0 ? 1 : 0.98 }}
          >
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                x: currentSlideIndex === 0 ? 0 : [-2, 2, -2],
              }}
              transition={{
                repeat: currentSlideIndex === 0 ? 0 : Infinity,
                duration: 1.5,
              }}
            >
              <path d="M15 18l-6-6 6-6" />
            </motion.svg>
            Назад
          </motion.button>

          <motion.div
            className="flex items-center justify-center gap-1 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.span className="text-gray-600">Слайд</motion.span>

            <motion.span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-lg mx-1">
              {currentSlideIndex + 1}
            </motion.span>

            <motion.span className="text-gray-600">из</motion.span>

            <motion.span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg ml-1">
              {slides.length}
            </motion.span>
          </motion.div>

          <motion.button
            className={cn(
              "ml-auto select-none flex items-center font-medium bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white rounded-xl",
              "shadow-md hover:shadow-lg transition-all duration-300",
              "flex items-center gap-2",
              {
                "opacity-50 cursor-not-allowed bg-gray-400 hover:bg-gray-400":
                  currentSlideIndex === slides.length - 1,
              }
            )}
            onClick={goToNextSlide}
            disabled={currentSlideIndex === slides.length - 1}
            type="button"
            whileHover={{
              boxShadow:
                currentSlideIndex === slides.length - 1
                  ? ""
                  : "0 4px 12px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{
              scale: currentSlideIndex === slides.length - 1 ? 1 : 0.98,
            }}
          >
            Вперед
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                x: currentSlideIndex === slides.length - 1 ? 0 : [-2, 2, -2],
              }}
              transition={{
                repeat: currentSlideIndex === slides.length - 1 ? 0 : Infinity,
                duration: 1.5,
              }}
            >
              <path d="M9 18l6-6-6-6" />
            </motion.svg>
          </motion.button>
        </div>
      </Container>

      <Slide title={currentSlide.title}>{currentSlide.content}</Slide>
    </div>
  );
};
