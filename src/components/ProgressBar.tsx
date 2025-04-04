import { motion } from "framer-motion";
import { cn } from "../utils/libs";

const ProgressBar = ({
  progressPercentage,
}: {
  progressPercentage: number;
}) => {
  return (
    <div className="relative h-6 w-full overflow-hidden">
      {/* Фоновый слой с текстурой */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-30"></div>

      {/* Основной прогресс */}
      <motion.div
        className={cn(
          "h-full bg-gray-800 relative z-10",
          "bg-gradient-to-r from-blue-600 to-blue-400",
          "shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)]"
        )}
        initial={{ width: 0 }}
        animate={{ width: `${progressPercentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          borderRadius: progressPercentage === 100 ? "0" : "0 9999px 9999px 0",
        }}
      >
        {/* Дополнительные эффекты */}
        <motion.div
          className="absolute right-0 top-0 h-full w-4 bg-white opacity-30"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            delay: 0.5,
          }}
        />

        {/* Текст с процентом */}
        {progressPercentage > 30 && (
          <motion.span
            className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {progressPercentage}%
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

export default ProgressBar;
