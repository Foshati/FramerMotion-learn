import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const AdvancedAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isRotating, setIsRotating] = useState(false);
  const [items, setItems] = useState([1, 2, 3]);

  // Variants برای مدیریت انیمیشن‌های پیچیده
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" },
  };

  return (
    <div className="container">
      {/* 1. انیمیشن لیست با قابلیت Stagger */}
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="list"
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={itemVariants}
            whileHover="hover"
            className="list-item"
            onClick={() => setItems(items.filter((i) => i !== item))}
          >
            Item {item}
            <motion.span
              className="badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              New
            </motion.span>
          </motion.li>
        ))}
      </motion.ul>

      {/* 2. انیمیشن تعاملی با Drag و Gestures */}
      <motion.div
        className="box"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        whileDrag={{ scale: 1.2 }}
        whileHover={{ rotate: 45 }}
        whileTap={{ scale: 0.9 }}
      />

      {/* 3. انیمیشن شرطی با AnimatePresence */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring" }}
          >
            <h3>Interactive Card</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVisible(false)}
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. انیمیشن پیچیده Transform */}
      <motion.div
        className="cube"
        animate={{
          rotateX: isRotating ? 360 : 0,
          rotateY: isRotating ? 180 : 0,
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => setIsRotating(!isRotating)}
      />
    </div>
  );
};

// استایل‌ها
const styles = `
  .container {
    padding: 2rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .list {
    list-style: none;
    padding: 0;
  }

  .list-item {
    background: #fff;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  .badge {
    background: #4CAF50;
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 12px;
    font-size: 0.8rem;
  }

  .box {
    width: 100px;
    height: 100px;
    background: #2196F3;
    border-radius: 12px;
  }

  .card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .cube {
    width: 100px;
    height: 100px;
    background: #FF5722;
    cursor: pointer;
  }
`;

export default AdvancedAnimation;
