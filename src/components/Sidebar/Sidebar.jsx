
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './Sidebar.css';

const navItems = [
  { label: 'Home', path: '/home', icon: 'public/icons/house.svg' },
  { label: 'About Me', path: '/about', icon: '/icons/character.svg' },
  { label: 'Projects', path: '/projects', icon: '/icons/open-folder.svg' },
  { label: 'Testimonial', path: '/testimonial', icon: '/icons/talk.svg' },
  { label: 'Connect', path: '/connect', icon: '/icons/envelope.svg' },
];

function Sidebar() {
  const { pathname } = useLocation();

  // Hide the sidebar navigation on individual project detail pages.
  const inProjectDetail = /^\/projects\/.+/.test(pathname);

  const wasInDetail = useRef(false);
const comingBack = wasInDetail.current && !inProjectDetail; // just left a project page
useEffect(() => {
  wasInDetail.current = inProjectDetail;
}, [inProjectDetail]);


  return (
    <aside className="sidebar">
      <NavLink to="/home" className="sidebar-profile">
        <img
          src="/avatar.png"
          alt="Athira K M"
          className="sidebar-avatar"
        />
        <span className="sidebar-name">ATHIRA K M</span>
      </NavLink>

      <AnimatePresence>
        {!inProjectDetail && (
          <motion.nav
            key="nav"
            className="sidebar-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: comingBack ? 1 : 0 }}
          >
            {navItems.map(({ label, path, icon }) => (
              <NavLink
                key={label}
                to={path}
                end={path === '/home'}
                className={({ isActive }) =>
                  `sidebar-item ${isActive ? 'active' : ''}`
                }
              >
                <div className="sidebar-item-inner">
                  <span>{label}</span>
                  <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    className="sidebar-icon"
                  />
                </div>
              </NavLink>
            ))}

            <a
              href="/ATHIRA K M UI UX RESUME.pdf"
              download="Athira_KM_Resume.pdf"
              className="sidebar-item"
            >
              <div className="sidebar-item-inner">
                <span>Resume</span>
                <img
                  src="/icons/save-arrow.svg"
                  alt=""
                  aria-hidden="true"
                  className="sidebar-icon"
                />
              </div>
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </aside>
  );
}

export default Sidebar;
