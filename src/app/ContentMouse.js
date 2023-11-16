'use client'
import styles from './page.module.scss'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './components/Mouse';

export default function TextBjir() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
          Bahasa <span className={styles.spanKedua}>Jawa</span>  yaiku Bahasa Austronesia ing Pulau Jawa, Tilaran Budaya Indonesia ingkang sugih makna lan nilai
          </p>
      </motion.div>

      <div className={styles.body}>
        <p>Bahasa <span>Jawa</span> adalah Bahasa Austronesia di pulau Jawa, warisan budaya Indonesia yang kaya makna dan nilai.</p>
      </div>
    </main>
  )
}
