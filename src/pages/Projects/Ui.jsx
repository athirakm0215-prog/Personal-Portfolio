// src/pages/Projects/ui.jsx
import { motion } from 'framer-motion';
import Glitchheading from '../../components/Glitchheading/Glitchheading';

/* Same "space" page transition as About / Pagetransition.
   Applied directly on the page's own root element (instead of wrapping it) so the
   absolute positioning of the detail pages keeps working exactly as before. */
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

export function SpacePage({ className = '', children }) {
  return (
    <motion.div
      className={className}
      variants={spaceVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export function Chevron({ direction }) {
  return (
    <svg className="chevron" viewBox="0 0 30 50" fill="none">
      <path
        d={direction === 'left' ? 'M26 4L6 25L26 46' : 'M4 4L24 25L4 46'}
        stroke="currentColor"
        strokeWidth="6"
      />
    </svg>
  );
}

export function LongArrow({ direction = 'right' }) {
  return (
    <svg className="long-arrow" viewBox="0 0 54 20" fill="none">
      <path
        d={direction === 'right' ? 'M1 10H52M43 2L52 10L43 18' : 'M53 10H2M11 2L2 10L11 18'}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Same heading design as the About page: « TITLE » with the glitch heading */
export function PageTitle({ children, className = '' }) {
  return (
    <h1 className={`projects-title ${className}`}>
      <span className="projects-arrow">&laquo;</span>
      <Glitchheading>{children}</Glitchheading>
      <span className="projects-arrow">&raquo;</span>
    </h1>
  );
}

export function BackButton({ onClick }) {
  return (
    <div className="project-back-wrap">
      <button className="sidebar-item active project-back" onClick={onClick}>
        <div className="sidebar-item-inner">
          <img src="/icons/tree-growth.svg" alt="" className="start-icon" style={{ transform: 'rotate(-90deg)' }} />
          <span>Back</span>
        </div>
      </button>
    </div>
  );
}
