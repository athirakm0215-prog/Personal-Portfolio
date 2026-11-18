// src/pages/Projects/OtherWorks.jsx

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

import otherWorks from '../../Data/Otherworks';
import { BackButton, Chevron, PageTitle, SpacePage } from './Ui';
import useUnit from './Useunit';

// Desktop: each slide displays exactly 2 cards.
const CARD_WIDTH = 762;
const GAP = 29;
const CARD_HEIGHTS = [512, 499];
const STEP = 2;
const AUTO_SLIDE_DELAY = 5500;

// true on tablet and mobile (one card at a time)
function useIsSmall(query = '(max-width: 1024px)') {
  const [small, setSmall] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setSmall(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);

  return small;
}

// Build one column per artwork.
function buildColumns(works) {
  return works.map((work, index) => ({
    count: 1,
    w: CARD_WIDTH,
    h: CARD_HEIGHTS[index % 2],
    items: [work],
    x: index * (CARD_WIDTH + GAP),
    startIndex: index,
  }));
}

function Artwork({ work, n, h, u, scrollTarget, mouseX, mouseY }) {
  const depth = 0.6 + ((n * 37) % 5) * 0.1;

  // Smooth horizontal sliding.
  const lag = useSpring(scrollTarget, {
    stiffness: 40 + depth * 80,
    damping: 18 + depth * 6,
  });

  // Mouse parallax.
  const shiftX = useTransform(mouseX, [-0.5, 0.5], [-16 * depth * u, 16 * depth * u]);
  const shiftY = useTransform(mouseY, [-0.5, 0.5], [-10 * depth * u, 10 * depth * u]);

  // Gentle floating animation.
  const ax = (6 + (n % 3) * 4) * u;
  const ay = (8 + (n % 4) * 3) * u;
  const rot = 0.4 + (n % 3) * 0.2;
  const duration = 9 + ((n * 1.7) % 5);

  return (
    <motion.div
      className="space-item"
      style={{
        x: lag,
        width: '100%',
        height: `calc(${h} * var(--u))`,
      }}
    >
      <motion.div
        className="space-layer"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.4 + n * 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div className="space-layer" style={{ x: shiftX, y: shiftY }}>
          <motion.div
            className="space-layer"
            animate={{
              x: [0, ax, 0, -ax, 0],
              y: [0, -ay, 0, ay, 0],
              rotate: [0, rot, 0, -rot, 0],
            }}
            transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="space-art"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={work.image}
                alt={work.title || `UI work ${n + 1}`}
                loading="lazy"
                style={{ filter: `brightness(${0.72 + depth * 0.28})` }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function OtherWorks({ onBack }) {
  const u = useUnit();
  const small = useIsSmall();

  // Only use the first 6 artworks.
  const columns = useMemo(() => buildColumns(otherWorks.slice(0, 6)), []);

  // Desktop: 2 cards per slide. Tablet/mobile: 1 card per slide.
  const step = small ? 1 : STEP;
  const maxIndex = Math.max(0, columns.length - (small ? 1 : 2));

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const trackRef = useRef(null);
  const touchStartX = useRef(null);

  const scrollTarget = useMotionValue(0);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useSpring(rawX, { stiffness: 40, damping: 20 });
  const mouseY = useSpring(rawY, { stiffness: 40, damping: 20 });

  // keep the index valid when switching between desktop and mobile layouts
  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  // Move all cards to the selected slide.
  useEffect(() => {
    const apply = () => {
      if (small) {
        // measure the real card positions (they scale with the screen)
        const cols = trackRef.current?.children;
        if (!cols || !cols[index]) return;
        scrollTarget.set(-(cols[index].offsetLeft - cols[0].offsetLeft));
      } else {
        scrollTarget.set(-(columns[index]?.x ?? 0) * u);
      }
    };

    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, [index, u, columns, scrollTarget, small]);

  // Automatic slider.
  useEffect(() => {
    if (paused || maxIndex === 0) return undefined;

    const timer = setTimeout(() => {
      setIndex((current) =>
        current >= maxIndex ? 0 : Math.min(maxIndex, current + step)
      );
    }, AUTO_SLIDE_DELAY);

    return () => clearTimeout(timer);
  }, [index, paused, maxIndex, step]);

  // Mouse parallax.
  useEffect(() => {
    const onMove = (event) => {
      rawX.set(event.clientX / window.innerWidth - 0.5);
      rawY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [rawX, rawY]);

  const showPrevious = () => setIndex((current) => Math.max(0, current - step));
  const showNext = () => setIndex((current) => Math.min(maxIndex, current + step));

  // swipe left / right on touch screens
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 50) return;
    if (dx < 0) showNext();
    else showPrevious();
  };

  return (
    <SpacePage className="project-detail other-works no-sidebar-space">
      <PageTitle className="project-detail-title">OTHER UI WORKS</PageTitle>

      <div className="project-stage">
        <div
          className="works-slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* LEFT ARROW */}
          <button
            className="works-arrow works-arrow-left"
            onClick={showPrevious}
            disabled={index === 0}
            aria-label="Previous works"
          >
            <img
              src="/icons/upgrade.svg"
              alt=""
              aria-hidden="true"
              className="sidebar-icon"
              style={{ width: '60px', height: '60px', transform: 'rotate(-90deg)' }}
            />
          </button>

          {/* VIEWPORT */}
          <div
            className="works-viewport"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="works-track" ref={trackRef}>
              {columns.map((col) => (
                <div key={col.x} className="works-column">
                  {col.items.map((work, j) => (
                    <Artwork
                      key={work.id || col.startIndex + j}
                      work={work}
                      n={col.startIndex + j}
                      h={col.h}
                      u={u}
                      scrollTarget={scrollTarget}
                      mouseX={mouseX}
                      mouseY={mouseY}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* COUNTER (tablet / mobile only) */}
          {small && (
            <span className="works-counter">
              {String(index + 1).padStart(2, '0')} / {String(columns.length).padStart(2, '0')}
            </span>
          )}

          {/* RIGHT ARROW */}
          <button
            className="works-arrow works-arrow-right"
            onClick={showNext}
            disabled={index >= maxIndex}
            aria-label="Next works"
          >
            <img
              src="/icons/upgrade.svg"
              alt=""
              aria-hidden="true"
              className="sidebar-icon"
              style={{ width: '60px', height: '60px', transform: 'rotate(90deg)' }}
            />
          </button>
        </div>
      </div>

      <div className="other-works-back">
        <BackButton onClick={onBack} />
      </div>
    </SpacePage>
  );
}

export default OtherWorks;