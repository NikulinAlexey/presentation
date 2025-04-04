import { motion } from "framer-motion";
import { cn } from "../utils/libs";

const ResponsibilitiesSlide = () => {
  const responsibilities = [
    {
      title: "Проект SovDobro",
      description:
        "Разработка интерфейса для платформы благотворительности, помогающей нуждающимся.",
      icon: "❤️",
      isMainProject: true,
    },
    {
      title: "Верстка email-шаблонов",
      description:
        "Создание кросс-клиентских email-шаблонов с поддержкой Outlook и мобильных клиентов",
      icon: "✉️",
    },
    {
      title: "Разработка лендингов",
      description:
        "Оптимизированные по скорости загрузки и SEO лендинги для бизнес-заказчиков",
      icon: "🖥️",
    },
    {
      title: "UI/UX реализация",
      description:
        "Превращение дизайн-макетов в интерактивные интерфейсы с сохранением всех гайдлайнов",
      icon: "🎨",
    },
    {
      title: "Кросс-браузерная совместимость",
      description:
        "Обеспечение корректного отображения во всех современных браузерах и устройствах",
      icon: "🌐",
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-gray-50 md:p-12 flex flex-col">
      {/* Основной контент */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        {responsibilities.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "bg-white rounded-xl shadow-lg p-6 flex hover:shadow-lg transition-shadow",
              {
                "border-2 border-blue-400": item.isMainProject,
              }
            )}
          >
            <div className="text-3xl mr-4 lg:text-4xl">{item.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
              {item.isMainProject && (
                <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                  Основной проект
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Футер с дополнительной информацией */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 text-sm text-gray-500"
      >
        <p>
          Используемые технологии: HTML5, CSS3, SASS(SCSS), Vite, JavaScript,
          TypeScript, React, Tailwind CSS
        </p>
      </motion.div>
    </div>
  );
};

export default ResponsibilitiesSlide;
