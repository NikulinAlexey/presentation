import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/libs";

const CareerTimeline = () => {
  const [activeItem, setActiveItem] = useState(1);

  const timelineItems = [
    {
      id: 1,
      date: "1 февраля 2024",
      title: "Начало стажировки",
      description:
        "Приступил к стажировке в СКБТ в качестве разработчика интерфейсов",
      icon: "👨‍💻",
      highlight: true,
    },
    {
      id: 2,
      date: "10 апреля 2024",
      title: "Завершение стажировки",
      description: "Успешно завершил стажировку и перешел в штат компании",
      icon: "🎓",
      highlight: true,
    },
    {
      id: 3,
      date: "15 апреля 2024",
      title: "Подключение к проекту SovDobro",
      description:
        "Приступил к работе на проекте благотворительной платформы SovDobro. Основные задачи: разработка компонентов для платформы на стеке React, Tailwind, Typesctipt и создание / рефакторинг email-рассылок.",
      icon: "❤️",
      highlight: true,
    },
    // {
    //   id: 4,
    //   date: "Май 2024",
    //   title: "Разработка UI-Kit для Rocket",
    //   description:
    //     "Создание библиотеки компонентов для админ-панели с использованием БЭМ методологии",
    //   icon: "🧩",
    // },
    // {
    //   id: 5,
    //   date: "Июнь 2024",
    //   title: "Освоение новых технологий",
    //   description:
    //     "Изучил и применил на практике Tailwind CSS, React и TypeScript",
    //   icon: "📚",
    // },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12">

      <div className="relative">
        {/* Вертикальная линия */}
        <div className="absolute left-6 md:left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

        <ul className="space-y-8">
          {timelineItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div
                className={cn(
                  "flex items-start gap-4 p-4 rounded-lg transition-all cursor-pointer",
                  {
                    "bg-blue-50 scale-[1.02]": activeItem === item.id,
                    "hover:bg-gray-50": activeItem !== item.id,
                    "ring-2 ring-blue-500": item.highlight,
                  }
                )}
                onClick={() => setActiveItem(item.id)}
              >
                {/* Точка на линии */}
                <div
                  className={cn(
                    "absolute left-6 md:left-1/2 w-4 h-4 rounded-full z-10 transform -translate-x-1/2 mt-5",
                    {
                      "bg-blue-600 scale-125": activeItem === item.id,
                      "bg-gray-400": activeItem !== item.id,
                      "bg-blue-500 border-2 border-white": item.highlight,
                    }
                  )}
                ></div>

                {/* Иконка */}
                <div className="text-2xl p-2 bg-white rounded-full shadow-sm">
                  {item.icon}
                </div>

                {/* Содержание */}
                <div className="flex-1">
                  <div className="text-sm font-medium text-blue-600 mb-1">
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerTimeline;
