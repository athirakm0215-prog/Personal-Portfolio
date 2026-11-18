// src/pages/Projects/Projects.jsx
import { AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import Pagetransition from '../../components/Pagetransition/Pagetransition';
import Glitchheading from '../../components/Glitchheading/Glitchheading';
import projects from '../../Data/Projects';
import Projectgrid from './Projectgrid';
import Projectdetail from './Projectdetail';
import Otherworks from './Otherworks';
import './Projects.css';
import { useEffect } from 'react';   // add to your imports

function Projects() {
  const { '*': projectId } = useParams();
  const navigate = useNavigate();
  const selected = projects.find((p) => p.id === projectId);
  const goBack = () => navigate('/projects');
   // always open every page at the very top
  useEffect(() => {
    const box = document.querySelector('.app-content');
    if (box) box.scrollTop = 0;
  }, [projectId]);

  return (
    <Pagetransition>
    <AnimatePresence mode="wait">
      {projectId === 'other-works' ? (
        <Otherworks key="other" onBack={goBack} />
      ) : selected ? (
        <Projectdetail key={`detail-${selected.id}`} project={selected} onBack={goBack} />
      ) : (
        <Projectgrid
          key="grid"
          projects={projects}
          onOpen={(id) => navigate(`/projects/${id}`)}
          onOpenOther={() => navigate('/projects/other-works')}
        />
      )}
    </AnimatePresence>
    </Pagetransition>
  );
}

export default Projects;
