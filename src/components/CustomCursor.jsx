import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  // Motion values for exact position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Springs for the trailing effect
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16); // Center of 32px ring
      cursorY.set(e.clientY - 16);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e) => {
      // Find closest button or anchor tag
      const isInteractive = e.target.closest('button') || e.target.closest('a') || e.target.closest('.interactive');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <style>
        {`
          body {
            cursor: none;
          }
          a, button, .interactive {
            cursor: none;
          }
        `}
      </style>

      {/* Trailing Ring */}
      <motion.div
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 1.5 : 1,
          opacity: isClicked ? 0.8 : isHovered ? 0.3 : 0.6,
          backgroundColor: isHovered ? 'var(--accent-yellow)' : 'transparent',
          borderColor: isHovered ? 'var(--accent-yellow)' : 'var(--accent-pink)',
        }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '2px solid var(--accent-pink)',
          pointerEvents: 'none',
          zIndex: 9998,
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      
      {/* Exact Dot */}
      <motion.div
        animate={{
          scale: isClicked ? 0.5 : isHovered ? 0 : 1,
          opacity: isClicked ? 0.5 : 1,
        }}
        transition={{ duration: 0.1 }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--text-primary)',
          pointerEvents: 'none',
          zIndex: 9999,
          // Offset to center the dot within the track pointer (pointer is offset by 16px to center the ring)
          x: useMotionValue(cursorX.get() + 13),
          y: useMotionValue(cursorY.get() + 13),
        }}
      />
    </>
  );
};

export default CustomCursor;
