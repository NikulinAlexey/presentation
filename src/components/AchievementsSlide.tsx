import { motion } from "framer-motion";
import { useState } from "react";

const AchievementsSlide = () => {
  const [animated, setAnimated] = useState(true);

  const timelineItems = [
    {
      id: 1,
      day: "1 февраля",
      year: "2024",
      title: "Начало стажировки",
      company: "СКБТ",
      description: "Впервые в it. Началась моя стажировка.",
    },
    {
      id: 2,
      day: "1 февраля",
      year: "2024",
      title: "Завершение стажировки",
      company: "СКБТ",
      description: "10 апреля перешел в штат, начал работать как разработчик.",
    },
    {
      id: 3,
      day: "1 февраля",
      year: "2024",
      title: "UI-kit для админки Rocket",
      company: "СКБТ",
      description:
        "Собирал компоненты для админки рокета с помощью методологии БЭМ: кнопки, элементы ввода, таблицы, модальные окна, аккордеоны.",
    },
    {
      id: 4,
      day: "1 февраля",
      year: "2024",
      title: "Email-шаблоны",
      company: "СКБТ",
      description:
        "Научился верстать шаблоны для почтовиков: 1) Welcome-пиьсмо для новых сотрудников, 2) верстал и рефакторил шаблоны проекта SovDobro, 3)Разобрался в нюансах и сверстал шаблон для дальнейшей конвертации в pdf-формат для выставления счетов на проекте Rocket.",
    },
    {
      id: 5,
      day: "1 февраля",
      year: "2024",
      title: "Tailwind",
      company: "СКБТ",
      description: "Научился верстать верстать с помощью Tailwind.",
    },
    {
      id: 6,
      day: "1 февраля",
      year: "2024",
      title: "React JS",
      company: "СКБТ",
      description:
        "Освоил React на уровне сборки компонентов и закладыванием презентационной логики.",
    },
    {
      id: 7,
      day: "1 февраля",
      year: "2024",
      title: "TypeScript",
      company: "СКБТ",
      description:
        "Освоил TypeScript на уровне описания компонента и его пропсов.",
    },
    {
      id: 8,
      day: "1 февраля",
      year: "2024",
      title: "Docker",
      company: "СКБТ",
      description: "Освоил Docker на базовом уровне.",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
        type: "spring",
        damping: 10,
      },
    }),
  };

  // Вспомогательная функция для деталей
  function getAchievementDetail(title: string) {
    const details: Record<string, string> = {
      "Начало стажировки": "Первый опыт коммерческой разработки",
      "Завершение стажировки": "Успешный переход в штат",
      "UI-kit для админки Rocket": "30+ переиспользуемых компонентов",
      "Email-шаблоны": "10+ шаблонов с темной темой",
      Tailwind: "Ускорение верстки в 2 раза",
      "React JS": "45+ реализованных компонентов",
      TypeScript: "100% типизированных компонентов",
      Docker: "Унификация окружений",
    };
    return details[title] || "Значимое достижение";
  }

  return (
    <div
      className="w-full h-full bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 flex flex-col"
      onClick={() => setAnimated(true)}
    >
      {/* Сетка с элементами timeline */}
      <ul className="grid grid-cols-1 gap-6 flex-grow">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            initial="hidden"
            animate={animated ? "visible" : "hidden"}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-400"
          >
            <li className="flex flex-col md:flex-row gap-4">
              {/* Блок с датой */}
              <div className="flex-shrink-0">
                <div className="bg-blue-100 text-blue-800 rounded-lg py-2 px-4 text-center">
                  <div className="font-bold">{item.year}</div>
                  <div className="text-sm">{item.day}</div>
                </div>
              </div>

              {/* Основное содержание */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{item.company}</p>
                <p className="text-gray-700">{item.description}</p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={animated ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.3 + 0.5 }}
                  className="mt-3 text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full inline-block"
                >
                  {getAchievementDetail(item.title)} {/* Функция для деталей */}
                </motion.div>
              </div>
            </li>
          </motion.div>
        ))}
      </ul>

      {/* Футер */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={animated ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="mt-8 text-center text-sm text-gray-500"
      >
        <p>Постепенное развитие навыков и профессиональный рост</p>
      </motion.div>
    </div>
  );
};

export default AchievementsSlide;
