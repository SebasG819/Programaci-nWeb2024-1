import React from 'react';
import { useApp } from '../../Hooks/useApp';
import { motion } from 'framer-motion';
import styles from './facts.module.css'; 

export function Facts() {
  const {
    catFact,
    catImg,
    error,
    isLoading,
    isFirstTime
  } = useApp();

  // Variants for the card animation
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  // Variants for the image animation
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 0.2, duration: 0.5 } }
  };

  // Variants for the text animation
  const textVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.3, duration: 0.5 } }
  };

  // Handle errors
  if (error) {
    return <p>{error}</p>;
  }

  // If loading, show a loading GIF
  if (isLoading) {
    return <img className="loadingGif" src="https://i.gifer.com/origin/91/91ed040c5fb8975d4f6816b2bedf4270_w200.gif" />;
  }

  // If it's the first time, show a message
  if (isFirstTime.current) {
    return (
      <p className={styles.firstTime}>Click the button to get a random fact!</p>
    );
  }

  // Render the cat image and the fact with animation
  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={styles.card}
    >
      <motion.img 
        variants={imageVariants}
        className={styles.cat_img} 
        src={catImg} 
        alt="Cat" 
      />
      <motion.p 
        variants={textVariants}
        className={styles.cat_fact}
      >
        {catFact}
      </motion.p>
    </motion.div>
  );
}
