import React from 'react';
import { motion } from 'framer-motion';

// Custom animation variants for cards
const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
    rotate: -10, // Initial rotation for a dynamic entrance
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0, // Reset rotation
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      delay: 0.2, // Staggered delay for each card
    },
  },
  hover: {
    scale: 1.05,
    rotate: 3, // Slight rotation on hover
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)', // Enhanced shadow
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.95,
    rotate: -2, // Slight rotation on tap
  },
};

// Custom animation variants for the button
const buttonVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: '#4ECDC4', // Change color on hover
    textShadow: '0px 0px 8px rgba(255, 255, 255, 0.8)',
    boxShadow: '0px 0px 15px rgba(78, 205, 196, 0.6)', // Glow effect
    transition: {
      duration: 0.3,
      yoyo: Infinity, // Infinite yoyo animation
    },
  },
  tap: {
    scale: 0.9,
    backgroundColor: '#FF6B6B', // Change color on tap
  },
};

// Demo data for cards
const cardsData = [
  {
    id: 1,
    title: 'Card 1',
    description: 'This is a sample card with advanced animations.',
    color: '#FF6B6B',
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'Smooth and interactive animations with Framer Motion.',
    color: '#4ECDC4',
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'Modern and responsive design using React and Framer Motion.',
    color: '#FFE66D',
  },
];

const ProfessionalComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#1A1A1A',
        padding: '20px',
      }}
    >
      {cardsData.map((card, index) => (
        <motion.div
          key={card.id}
          initial="offscreen"
          whileInView="onscreen"
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          style={{
            width: '100%',
            maxWidth: '400px',
            backgroundColor: card.color,
            borderRadius: '15px',
            padding: '20px',
            margin: '10px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            color: '#FFF',
            cursor: 'pointer',
          }}
        >
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </motion.div>
      ))}

      {/* Interactive Button */}
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#6B5B95',
          color: '#FFF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px',
        }}
      >
        Click Me
      </motion.button>
    </div>
  );
};

export default ProfessionalComponent;