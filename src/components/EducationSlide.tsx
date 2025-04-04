import { motion } from "framer-motion";
import { useState } from "react";

const EducationSlide = () => {
  const [animated, setAnimated] = useState(true);

  const courses = [
    {
      title: "Advanced React и TypeScript",
      source: "Frontend Masters",
      goal: "Научиться создавать сложные типизированные компоненты",
      action: "Применил при разработке UI-Kit для админки Rocket",
      result: "Сократил количество багов на 40% за счет строгой типизации",
      icon: "🧑‍💻",
    },
    {
      title: "Оптимизация производительности React",
      source: "Udemy",
      goal: "Уменьшить время рендеринга тяжелых компонентов",
      action: "Внедрил memoization и lazy loading в проекте SovDobro",
      result: "Улучшил Lighthouse score с 65 до 92+",
      icon: "⚡",
    },
    {
      title: "Профессиональный CSS/SASS",
      source: "HTML Academy",
      goal: "Освоить современные подходы к стилизации",
      action: "Рефакторинг стилей email-шаблонов с использованием BEM",
      result: "Упростил поддержку шаблонов, сократил CSS на 30%",
      icon: "🎨",
    },
    {
      title: "Docker для фронтенд-разработчиков",
      source: "Stepik",
      goal: "Настроить одинаковые окружения для всей команды",
      action: "Создал docker-конфигурацию для локального запуска проектов",
      result: "Устранил проблемы 'это работает на моей машине'",
      icon: "🐳",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div
      className="w-full h-full bg-gradient-to-br from-indigo-50 to-white p-8 md:p-12 flex flex-col"
      onClick={() => setAnimated(true)}
    >
      {/* Список курсов */}
      <div className="grid grid-cols-1 gap-6 flex-grow max-w-3xl mx-auto w-full">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={animated ? "visible" : "hidden"}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-start mb-4">
              <span className="text-3xl mr-4">{course.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {course.title}
                </h3>
                <p className="text-indigo-600 font-medium">{course.source}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-indigo-50 p-3 rounded-lg">
                <h4 className="text-sm font-semibold text-indigo-800 mb-1">
                  Цель
                </h4>
                <p className="text-gray-700">{course.goal}</p>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="text-sm font-semibold text-green-800 mb-1">
                  Действие
                </h4>
                <p className="text-gray-700">{course.action}</p>
              </div>

              <div className="bg-purple-50 p-3 rounded-lg">
                <h4 className="text-sm font-semibold text-purple-800 mb-1">
                  Результат
                </h4>
                <p className="text-gray-700">{course.result}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Футер */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={animated ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="mt-8 text-center text-sm text-gray-500"
      >
        <p>
          Постоянное обучение позволяет мне эффективнее решать рабочие задачи
        </p>
      </motion.div>
    </div>
  );
};

export default EducationSlide;
