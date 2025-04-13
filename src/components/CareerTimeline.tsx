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
        "Приступил к стажировке в СКБТ в качестве младшего разработчика",
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
      date: "12 мая 2024",
      title: "Подключение к проекту SovDobro",
      description:
        "Приступил к работе на проекте благотворительной платформы SovDobro. Основные задачи: разработка компонентов для платформы на стеке React, Tailwind, Typesctipt для последующей передачи фронтенд разработчикам и создание / рефакторинг email-рассылок.",
      icon: "❤️",
      highlight: true,
    },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-white p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div>
          {/* Вертикальная линия */}

          <ul className="relative space-y-8 before:absolute before:-left-8 before:h-full before:w-1 before:bg-blue-200 before:-translate-x-1/2">
            {timelineItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative after:absolute after:-left-8 after:w-4 after:h-4 after:rounded-full after:z-10 after:-translate-x-1/2 after:mt-5"
              >
                <div
                  className={cn(
                    "flex items-start gap-4 p-6 rounded-xl transition-all cursor-pointer bg-white shadow-md ",
                    {
                      "bg-blue-50 scale-[1.02] shadow-lg after:bg-blue-600 after:scale-125":
                        activeItem === item.id,
                      "hover:bg-gray-50 after:bg-gray-400":
                        activeItem !== item.id,
                      "ring-2 ring-blue-500 after:bg-blue-500 after:border-2 after:border-white":
                        item.highlight,
                    }
                  )}
                  onClick={() => setActiveItem(item.id)}
                >
                  {/* Иконка */}
                  <div className="text-2xl p-3 bg-white rounded-full shadow-sm border border-gray-200">
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
      </motion.div>
    </div>
  );
};

export default CareerTimeline;
