import { motion } from "framer-motion";
import Container from "./Container";

interface SlideProps {
  title: string;
  children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ title, children }) => {
  return (
    <Container>
      <motion.div
        className="h-full max-h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Заголовок с анимацией и декоративным элементом */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 lg:mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 after:block after:w-24 after:h-1 after:bg-blue-500">
            {title}
          </h2>
          <div className=""></div>
        </motion.div>

        {/* Контент с плавным появлением */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Slide;
