import React from 'react';
import { motion } from 'framer-motion';

const Card = () => {
  return (
    <motion.div
      style={{
        width: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
      }}
      whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
      whileTap={{ scale: 0.95 }}
    >
      <h2 style={{ margin: 0, fontSize: 24, color: '#333' }}> title  </h2>
      
      <p style={{ margin: '10px 0', fontSize: 16, color: '#666' }}>
      Framer Motion
      </p>
    </motion.div>
  );
};

export default Card;