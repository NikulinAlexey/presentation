import { motion } from "framer-motion";
import { useState } from "react";

const ProcessImprovementSlide = () => {
  const [animated, setAnimated] = useState(true);

  const improvements = [
    {
      title: "Внедрение Storybook",
      description:
        "Создание библиотеки компонентов для повторного использования",
      benefits: "Сокращение времени разработки на 25-40%",
      icon: "📚",
    },
    {
      title: "Автоматизация тестирования",
      description: "Настройка Cypress для E2E тестов и Jest для unit-тестов",
      benefits: "Раннее выявление 90% ошибок верстки",
      icon: "🤖",
    },
    {
      title: "CI/CD пайплайн",
      description: "Автоматический деплой на тестовые среды при пул-реквестах",
      benefits: "Ускорение проверки изменений в 2 раза",
      icon: "⚙️",
    },
    {
      title: "Докеризация окружений",
      description: "Единые настройки среды для всех разработчиков",
      benefits: "Сокращение проблем с  «это работает на моей машине»",
      icon: "🐳",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        type: "spring",
      },
    }),
  };

  return (
    <div
      className="w-full h-full bg-gradient-to-br from-green-50 to-white p-8 md:p-12 flex flex-col"
      onClick={() => setAnimated(true)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        {improvements.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={animated ? "visible" : "hidden"}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-400"
          >
            <div className="flex items-start mb-3">
              <span className="text-3xl mr-4">{item.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={animated ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block"
                >
                  {item.benefits}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={animated ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="mt-8 text-center text-sm text-gray-500"
      >
        <p>
          Внедрение этих практик может повысить эффективность команды на 30-50%
        </p>
      </motion.div>
    </div>
  );
};

export default ProcessImprovementSlide;
