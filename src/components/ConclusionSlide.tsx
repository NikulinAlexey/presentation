import { motion } from "framer-motion";
import { useState } from "react";

const ConclusionSlide = () => {
  const [animated, setAnimated] = useState(true);

  return (
    <div
      className="w-full h-full bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden"
      onClick={() => setAnimated(true)}
    >
      {/* Декоративные элементы */}
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-100 opacity-40"
        animate={animated ? { scale: 1.5 } : { scale: 1 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-200 opacity-30"
        animate={animated ? { scale: 1.8 } : { scale: 1 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={animated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl relative z-10"
      >
        {/* Основной текст */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={animated ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <p className="text-xl text-gray-600 mb-4">
            Было приятно поделиться своими достижениями и идеями по улучшению
            нашей работы.
          </p>
          <p className="text-xl text-gray-600">
            Особые благодарности руководству и коллегам за поддержку!
          </p>
        </motion.div>

        {/* Блок с кнопками */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={animated ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Есть вопросы?
          </h3>
          <p className="text-gray-600 mb-6">
            Буду рад обсудить любые аспекты презентации
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 14px rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all"
            >
              Задать вопрос
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border border-blue-500 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all"
            >
              Связаться позже
            </motion.button>
          </div>
        </motion.div>

        {/* Контакты */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={animated ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-12 text-sm text-gray-500"
        >
          <p>
            Контакты:{" "}
            <span className="font-medium text-gray-700">email@example.com</span>{" "}
            | Телеграм:{" "}
            <span className="font-medium text-gray-700">@username</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ConclusionSlide;
