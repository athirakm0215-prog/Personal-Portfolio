// src/pages/Projects/ProjectGrid.jsx
import { motion } from 'framer-motion';
import { LongArrow, PageTitle, SpacePage } from './Ui';
import Useunit from './Useunit';
import Pagetransition from '../../components/Pagetransition/Pagetransition';
import Glitchheading from '../../components/Glitchheading/Glitchheading';


/* One card: appears on its own (staggered), then floats gently in space. */
function FloatCard({ index, onActivate, children }) {
  const u = Useunit();
  const ay = (7 + (index % 3) * 3) * u;
  const ax = (3 + (index % 2) * 3) * u;
  const duration = 7 + (index % 3) * 1.3;
  const floatDelay = 1.4 + index * 0.2;

  return (
    <motion.div
      className="project-card-wrap"
      initial={{ opacity: 0, y: 40 * u, scale: 0.88 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.45 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.article
        className="project-card"
        role="button"
        tabIndex={0}
        onClick={onActivate}
        onKeyDown={(e) => e.key === 'Enter' && onActivate()}
        animate={{ y: [0, -ay, 0, ay, 0], x: [0, ax, 0, -ax, 0] }}
        whileHover={{ scale: 1.025 }}
        transition={{
          y: { duration, repeat: Infinity, ease: 'easeInOut', delay: floatDelay },
          x: { duration: duration * 1.2, repeat: Infinity, ease: 'easeInOut', delay: floatDelay },
          scale: { duration: 0.35 },
        }}
      >
        {children}
      </motion.article>
    </motion.div>
  );
}

function Projectgrid({ projects, onOpen, onOpenOther }) {
  return (
    <Pagetransition>
    <SpacePage className="projects">
      <PageTitle>PROJECTS</PageTitle>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <FloatCard key={project.id} index={i} onActivate={() => onOpen(project.id)}>
            <div className="project-card-bg" />

            <div className="project-thumb">
              <img src={project.cover} alt={project.title} />
            </div>

            <div className="project-card-footer">
              <span>VIEW CASE STUDY</span>
               <img src="/icons/tree-growth.svg" alt="" className="start-icon" style={{ transform: 'rotate(90deg)' }} />
            </div>
          </FloatCard>
        ))}

        {/* 6th card: opens the Other UI Works page */}
        <FloatCard index={projects.length} onActivate={onOpenOther}>
          <div className="project-card-bg" />
          <div className="project-other-inner">
            OTHER UI WORKS  <img src="/icons/tree-growth.svg" alt="" className="start-icon" style={{ transform: 'rotate(90deg)' }} />
          </div>
        </FloatCard>
      </div>
    </SpacePage>
    </Pagetransition>
  );
}

export default Projectgrid;
