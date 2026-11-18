// src/pages/Projects/ProjectDetail.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BackButton, PageTitle, SpacePage } from './Ui';
import Useunit from './Useunit';

const tabs = [
  { id: 'project', label: 'Project' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'solution', label: 'Solution' },
  { id: 'result', label: 'Result' },
];

function Projectdetail({ project, onBack }) {
  const u = Useunit();
  const [activeTab, setActiveTab] = useState('project');
    const changeTab = (id) => {
    setActiveTab(id);
    document.querySelector('.project-detail')?.scrollTo({ top: 0 });
  };

  return (
    <SpacePage className="project-detail">
      <PageTitle className="project-detail-title">{project.title}</PageTitle>

      <div className="project-links">
        <a href={project.visitUrl} target="_blank" rel="noreferrer" className="project-link">
          Visit Site<img src="/icons/arrow-cursor.svg" alt="" className="project-icon" />
        </a>
        <a href={project.figmaUrl} target="_blank" rel="noreferrer" className="project-link">
          Figma Prototype <img src="/icons/arrow-cursor.svg" alt="" className="project-icon" />
        </a>
      </div>

      {/* the frame floats gently; the image inside glitches whenever the tab changes */}
      <motion.div
        className="project-detail-image"
        animate={{ y: [0, -12 * u, 0, 12 * u, 0], x: [0, 6 * u, 0, -6 * u, 0], rotate: [0, 0.4, 0, -0.4, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* key = remount on tab change, which replays the CSS glitch animation */}
        <img
          key={activeTab}
          className="project-glitch-img"
          src={project.images[activeTab]}
          alt=""
        />
      </motion.div>

      {/* tab content swaps instantly — no page transition here */}
      <div className="project-detail-body">
        <div className="project-detail-text">
        {Array.isArray(project.content[activeTab]) &&
  project.content[activeTab].map((line, i) => (
    <p key={i}>
      {i === 2 ? (
        <>
          <span className="role-label">Role:</span> UI/UX Designer
          {' | '}
          <span className="role-label">Tools:</span> Figma
          {' | '}
          <span className="role-label">Type:</span> Website Design
        </>
      ) : (
        line
      )}
    </p>
  ))}
        </div>
      </div>

      <BackButton onClick={onBack} />

      <div className="project-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`project-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => changeTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </SpacePage>
  );
}

export default Projectdetail;
