// src/pages/Projects/motion.js
export const sharedTransition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

export const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, delay } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
});