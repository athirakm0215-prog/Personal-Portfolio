import { motion } from 'framer-motion';

const spaceVariants = {
  initial: { opacity: 0, scale: 0.97, filter: 'blur(6px)' },
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 1.03,
    filter: 'blur(6px)',
    transition: { duration: 1, ease: [0.4, 0, 1, 1] },
  },
};

function Pagetransition({ children }) {
  return (
    <motion.div
      variants={spaceVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-transition-wrapper"
    >
      {children}
    </motion.div>
  );
}

export default Pagetransition;