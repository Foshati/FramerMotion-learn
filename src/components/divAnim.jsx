import { motion } from 'framer-motion';

const DivAnim = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        style={{
          width: 150,
          height: 150,
          backgroundColor: '#61dafb',
          borderRadius: 10,
          cursor: 'pointer',
        }}
      />
    </div>
  );
};

export default DivAnim;