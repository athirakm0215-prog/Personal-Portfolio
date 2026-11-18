// src/components/Particlebackground/Particlebackground.jsx
import { useEffect, useRef } from 'react';
import './Particlebackground.css';

const PARTICLE_COUNT = 260;
const MAX_SPEED = 0.15;
const MOUSE_RADIUS = 220;
const MOUSE_FORCE = 3.5;
const RETURN_EASE = 0.03; // how quickly a pushed particle eases back home
const PARALLAX_STRENGTH = 18;

function createParticle(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * MAX_SPEED,
    vy: (Math.random() - 0.5) * MAX_SPEED,
    offsetX: 0, // temporary push offset from the mouse
    offsetY: 0,
    radius: Math.random() * 1.6 + 0.4,
    opacity: Math.random() * 0.5 + 0.3,
  };
}

export default function Particlebackground() {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = [];
    let frameId;
    let parallaxX = 0;
    let parallaxY = 0;

    function init() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle(width, height));
    }

    function onMouseMove(e) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }

    function onMouseLeave() {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // home position drifts slowly on its own
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // mouse push adds to a separate offset, using the CURRENT drawn position
        const drawnX = p.x + p.offsetX;
        const drawnY = p.y + p.offsetY;
        const dx = drawnX - mouseRef.current.x;
        const dy = drawnY - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
          p.offsetX += (dx / dist) * force;
          p.offsetY += (dy / dist) * force;
        }

        // offset always eases back toward zero, so pushed particles return home
        p.offsetX *= (1 - RETURN_EASE);
        p.offsetY *= (1 - RETURN_EASE);

        ctx.beginPath();
        ctx.arc(p.x + p.offsetX, p.y + p.offsetY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(190, 225, 245, ${p.opacity})`;
        ctx.fill();
      });

      const targetX = mouseRef.current.x > -9000
        ? ((mouseRef.current.x / width) - 0.5) * PARALLAX_STRENGTH
        : 0;
      const targetY = mouseRef.current.y > -9000
        ? ((mouseRef.current.y / height) - 0.5) * PARALLAX_STRENGTH
        : 0;
      parallaxX += (targetX - parallaxX) * 0.04;
      parallaxY += (targetY - parallaxY) * 0.04;

      if (wrapper) {
        wrapper.style.transform = `translate(${parallaxX}px, ${parallaxY}px)`;
      }

      frameId = requestAnimationFrame(animate);
    }

    init();
    animate();
    window.addEventListener('resize', init);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div className="particle-background">
      <div ref={wrapperRef} className="particle-space">
        <div className="particle-glow" />
        <canvas ref={canvasRef} className="particle-canvas" />
      </div>
    </div>
  );
}