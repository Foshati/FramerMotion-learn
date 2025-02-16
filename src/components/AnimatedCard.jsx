import { motion } from "framer-motion";

const AnimatedCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center"
    >
      <h2 className="text-xl font-bold mb-2">Framer Motion</h2>
    </motion.div>
  );
};

export default AnimatedCard;
