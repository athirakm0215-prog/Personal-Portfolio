// src/pages/About/About.jsx
import { useState } from 'react';

import { IdCard, Users } from 'lucide-react';
import Pagetransition from '../../components/Pagetransition/Pagetransition';
import Glitchheading from '../../components/Glitchheading/Glitchheading';
import Glitchimage from '../../components/Glitchimage/Glitchimage';
import { AnimatePresence, motion } from 'framer-motion';
import AboutSubnav from '../../components/AboutSubnav/AboutSubnav';
import './About.css';

// same "space" transition used by Pagetransition, applied to every inner tab
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

const tabs = [
  { id: 'who', label: 'WHO I AM' },
  { id: 'what', label: 'WHAT I DO' },
  { id: 'toolkit', label: 'TOOLKIT' },
  { id: 'journey', label: 'MY JOURNEY' },
  { id: 'education', label: 'EDUCATION' },
];

const journeyItems = [
  {
    icon: IdCard,
    role: 'Assistant Professor',
    date: 'June 2026 - Present',
    place: ['Department of Visual Communication', 'Don Bosco Arts and Science', 'College, Chennai'],
  },
  {
    icon: Users,
    role: 'UI UX DESIGNER',
    date: 'June 2025 - May 2026',
    place: ['Konceptslab, Infopark,', 'Thrissur, Kerala'],
  },
  {
    icon: IdCard,
    role: 'Assistant Professor',
    date: 'June 2022 - March 2025',
    place: ['Department of Graphic Design and Animation', 'Chetana College of Media and Performing Arts', 'Thrissur, Kerala'],
  },
  {
    icon: IdCard,
    role: 'Assistant Professor',
    date: 'June 2019 - March 2022',
    place: ['Department of Multimedia', 'Little Flower College(Autonomous)', 'Guruvayoor, Kerala'],
  },
];

const whatIDo = [
  { title: '01 / UI & UX', items: ['Research', 'User Flows', 'IA', 'Wireframes', 'Prototyping', 'Usability', 'Interaction', 'Visual Design'] },
  { title: '02 / VISUAL & BRAND', items: ['Graphic Design', 'Logo Design', 'Branding', 'Web Design'] },
  { title: '03 / DEVELOPMENT', items: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript' , 'React'] },
  { title: '04 / MOTION & 3D', items: ['Motion Graphics', '3D Modelling'] },
];

// left/top = final CENTER of each icon, in % of the toolkit area.
// Every icon starts at the centre (50% / 50%) and flies out to its spot.
const toolkitIcons = [
  { src: '/public/Photoshop.webp', alt: 'Photoshop', left: 36, top: 18 },
  { src: '/public/Illustrator.webp', alt: 'Photoshop', left: 64, top: 18 },
  { src: '/public/Indesign.webp', alt: 'Photoshop', left: 24, top: 50 },
  { src: '/public/Figma.png', alt: 'Figma', left: 50, top: 50, big: true },
  { src: '/public/Aftereffect.webp', alt: 'Illustrator', left: 76, top: 50 },
  { src: '/public/Visualstudio.webp', alt: 'Dreamweaver', left: 36, top: 82 },
  { src: '/public/Xd.webp', alt: 'Photoshop', left: 64, top: 82 },
];

const educationMain = [
  { title: 'MA Multimedia', org: 'University of Calicut', year: '2016-2018' },
  { title: 'BSc Computer Science', org: 'University of Calicut', year: '2016-2018' },
];
const courses = [
  { title: 'Frontend Development', org: 'Zoople Technologies', year: '2026' },
  { title: 'Digital Marketing', org: 'Nexxa Technologies', year: '2024-25' },
  { title: 'UI/UX Internship', org: 'Zoople Technologies', year: '2024' },
  { title: 'PHP Advanced', org: 'Ociuz Technologies', year: '2018-19' },
];
const certifications = [
  { title: 'Foundation of Immersive Design for AR/VR', org: 'Swayam NPTEL COURSE', year: '2026' },
  { title: 'Neuromarketing Specialization', org: 'Coursera • Johns Hopkins University', year: '2025' },
];

function EduItem({ title, org, year }) {
  return (
    <div className="education-item">
      <span className="education-dot"></span>
      <div>
        <p>{title}</p>
        <p>{org}</p>
        <p>{year}</p>
      </div>
    </div>
  );
}

function About() {
  const [activeTab, setActiveTab] = useState('who');

  return (
    <Pagetransition>
      <div className="about-shell">
        {/* TITLE — fixed slot, never moves */}
        <h1 className="about-title">
          <span className="about-arrow">&laquo;</span>
          <Glitchheading>ABOUT ME</Glitchheading>
          <span className="about-arrow">&raquo;</span>
        </h1>

        {/* CONTENT — fixed region between title and subnav */}
        <div className="about-body">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={spaceVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="about-tab-content"
            >
              {/* WHO I AM */}
              {activeTab === 'who' && (
                <div className="about-content">
                  <Glitchimage src="/Profile.png" alt="Athira K M" className="about-photo" mode="entrance" />
                  <p className="about-text">
                    I'm Athira K M, a UI/UX Designer and Assistant Professor
                    based in Thrissur, Kerala. Currently teaching UI/UX and
                    Design in Chennai, I have 1 year of UI/UX industry
                    experience, 6 years of teaching experience, and have
                    successfully delivered 10+ client projects in responsive web
                    design, website revamps, and dashboards. Recognized as a
                    Customer Hero and qualified in UGC NET (Visual Arts).
                  </p>
                </div>
              )}

              {/* WHAT I DO */}
              {activeTab === 'what' && (
                <div className="whatido">
                  <div className="whatido-col whatido-col-left">
                    {whatIDo.filter((_, i) => i % 2 === 0).map((b) => (
                      <div className="whatido-item" key={b.title}>
                        <h3>{b.title}</h3>
                        <p>{b.items.map((t) => <span key={t}>{t}</span>)}</p>
                      </div>
                    ))}
                  </div>

                  <div className="whatido-center">
                    <span className="whatido-number">10+</span>
                    <span className="whatido-label">Client Projects</span>
                  </div>

                  <div className="whatido-col whatido-col-right">
                    {whatIDo.filter((_, i) => i % 2 === 1).map((b) => (
                      <div className="whatido-item" key={b.title}>
                        <h3>{b.title}</h3>
                        <p>{b.items.map((t) => <span key={t}>{t}</span>)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TOOLKIT — icons fly out from the centre, then float */}
              {activeTab === 'toolkit' && (
                <div className="toolkit">
                  {toolkitIcons.map((icon, i) => (
                    <motion.div
                      key={i}
                      className={`toolkit-slot ${icon.big ? 'toolkit-slot-big' : ''}`}
                      style={{ x: '-50%', y: '-50%' }}
                      initial={{ left: '50%', top: '50%', scale: 0.2, opacity: 0 }}
                      animate={{ left: `${icon.left}%`, top: `${icon.top}%`, scale: 1, opacity: 1 }}
                      transition={{ duration: 1.1, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <motion.img
                        src={icon.src}
                        alt={icon.alt}
                        className="toolkit-icon"
                        animate={{ y: [0, -16, 0], x: [0, i % 2 ? 6 : -6, 0] }}
                        transition={{
                          duration: 3 + (i % 4) * 0.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 1.2 + i * 0.15,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              )}

              {/* MY JOURNEY */}
              {activeTab === 'journey' && (
                <div className="journey-viewport">
                  <div className="journey-track">
                    {[...journeyItems, ...journeyItems].map((item, i) => (
                      <div className="journey-item" key={i}>
                        <div className="journey-top">
                          <item.icon size={40} className="journey-icon" />
                          <h3 className="journey-role">{item.role}</h3>
                          <span className="journey-date">{item.date}</span>
                        </div>

                        <span className="journey-dot"></span>

                        <div className="journey-bottom">
                          <p className="journey-place">
                            {item.place.map((line, j) => (
                              <span key={j}>
                                {line}
                                <br />
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* EDUCATION */}
              {activeTab === 'education' && (
                <div className="education">
                  <div className="education-panel education-panel-left">
                    <h3>Education</h3>
                    {educationMain.map((e) => <EduItem key={e.title} {...e} />)}
                  </div>

                  <div className="education-panel education-panel-center">
                    <h3>Courses</h3>
                    <div className="education-grid">
                      {courses.map((e) => <EduItem key={e.title} {...e} />)}
                    </div>
                  </div>

                  <div className="education-panel education-panel-right">
                    <h3>Certification</h3>
                    {certifications.map((e) => <EduItem key={e.title} {...e} />)}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SUBNAV — pinned to the bottom of the shell, independent of the content */}
        <div className="about-subnav-slot">
          <AboutSubnav activeTab={activeTab} onChange={setActiveTab} />
        </div>
      </div>
    </Pagetransition>
  );
}

export default About;
