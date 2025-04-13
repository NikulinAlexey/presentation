import { motion } from "framer-motion";
import avatar from "../../public/imges/avatar.jpg";

function About() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
      {/* Левая колонка (текст) */}
      <motion.div
        className="order-2 md:order-1 space-y-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Заголовок */}
        <div className="space-y-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Никулин Алексей
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center"
          >
            <div className="w-12 h-1 bg-blue-500 mr-4"></div>
            <p className="text-xl text-gray-600">Группа разработки веб-интерфейсов</p>
          </motion.div>
        </div>

        {/* Блоки с информацией */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* Должность */}
          <motion.div
            className="flex gap-4 items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ x: 5 }}
          >
            <div className="w-12 h-12 shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 fill-blue-600" viewBox="0 0 32 32">
                <path d="m20.12246 13.96289c1.7459-1.4069 2.88691-3.67454 2.88691-6.23581 0-4.26093-3.14479-7.72708-7.00937-7.72708s-7.00937 3.46615-7.00937 7.72708c0 2.56126 1.14108 4.82891 2.88698 6.23581-5.49975 1.75111-9.49636 6.90423-9.49636 12.97669v.5599c0 2.48177 2.01875 4.50052 4.50104 4.50052h18.23542c2.48229 0 4.50104-2.01875 4.50104-4.50052v-.5599c0-6.07239-3.99655-11.22558-9.49629-12.97669zm-8.9985-6.23581c0-3.08437 2.1875-5.59375 4.87604-5.59375s4.87604 2.50937 4.87604 5.59375c0 3.0849-2.1875 5.59427-4.87604 5.59427s-4.87604-2.50937-4.87604-5.59427zm16.36146 19.7724c0 1.30521-1.0625 2.36719-2.36771 2.36719h-18.23542c-1.30521 0-2.36771-1.06198-2.36771-2.36719v-.5599c0-6.33281 5.15208-11.4849 11.48542-11.4849s11.48542 5.15208 11.48542 11.4849z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Должность</h3>
              <p className="text-lg font-medium text-gray-800">
                Разработчик
              </p>
            </div>
          </motion.div>

          {/* Дата начала */}
          <motion.div
            className="flex gap-4 items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ x: 5 }}
          >
            <div className="w-12 h-12 shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 fill-blue-600" viewBox="0 0 32 32">
                <path d="M26 4h-4v-2h-2v2h-8v-2h-2v2h-4c-1.1 0-2 0.9-2 2v20c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2v-20c0-1.1-0.9-2-2-2zM26 26h-20v-14h20v14z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">
                В компании с
              </h3>
              <p className="text-lg font-medium text-gray-800">01.02.2024</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Правая колонка (изображение) */}
      <motion.div
        className="order-1 md:order-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-xl overflow-hidden shadow-xl border-4 border-white">
          <motion.img
            className="w-full h-full object-cover"
            src={avatar}
            alt="Никулин Алексей"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            width={400}
            height={400}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default About;
