import { motion } from "framer-motion";
import { useState } from "react";

const GoalsSlide = () => {
  const [animated, setAnimated] = useState(true);
  const goals = [
    {
      title: "Освоить новые технологии",
      description:
        "Изучить Next.js и WebGL для создания более производительных и интерактивных интерфейсов",
      emoji: "🚀",
    },
    {
      title: "Повышение качества кода",
      description:
        "Внедрить TypeScript в 100% новых проектов и достичь 90% покрытия тестами",
      emoji: "🧪",
    },
    {
      title: "UX/UI экспертиза",
      description:
        "Пройти курс по UX-исследованиям и внедрить 3+ улучшений в текущие проекты",
      emoji: "🎨",
    },
    {
      title: "Оптимизация производительности",
      description:
        "Добиться 95+ баллов Lighthouse для всех ключевых страниц проектов",
      emoji: "⚡",
    },
  ];

  // Анимация для каждой цели
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div
      className="w-full h-full bg-gradient-to-br from-purple-50 to-indigo-50 p-8 md:p-12 flex flex-col items-center justify-center"
      onClick={() => setAnimated(true)}
    >
      {/* Сетка целей */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {goals.map((goal, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={animated ? "visible" : "hidden"}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-start"
          >
            <div className="text-5xl mb-4">{goal.emoji}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {goal.title}
            </h3>
            <p className="text-gray-600">{goal.description}</p>

            {/* Анимированный прогресс бар */}
            <motion.div
              className="w-full h-2 bg-gray-200 rounded-full mt-4 overflow-hidden"
              initial={{ width: 0 }}
              animate={animated ? { width: "100%" } : {}}
              transition={{ delay: index * 0.2 + 0.8, duration: 1.5 }}
            >
              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: "0%" }}
              ></div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Анимированный футер */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={animated ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
        className="mt-12 text-sm text-gray-500 text-center"
      >
        <p>Достижение этих целей поможет стать Senior Frontend Developer</p>
      </motion.div>
    </div>
  );
};

export default GoalsSlide;
