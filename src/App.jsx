import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Rocket } from 'lucide-react';
import './i18n';

// Lightweight particle background: few particles, capped DPR, ~30fps,
// paused when the tab is hidden or on small screens / reduced motion.
class Particle {
  constructor(w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.35;
    this.vy = (Math.random() - 0.5) * 0.35;
    this.radius = Math.random() * 1.4 + 0.8;
  }
  update(w, h) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;
  }
}

const MemoHero = React.memo(Hero);
const MemoAbout = React.memo(About);
const MemoSkills = React.memo(Skills);
const MemoProjects = React.memo(Projects);
const MemoContact = React.memo(Contact);

function App() {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // 1. Initial theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // 2. Custom cursor + glow: direct DOM updates only, throttled by rAF.
    //    No React state here — the old version re-ran this whole effect
    //    (and rebuilt the canvas) on every hover change.
    let rafPending = false;
    let lastEvent = null;
    const handleMouseMove = (e) => {
      lastEvent = e;
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        rafPending = false;
        if (!lastEvent) return;
        const { clientX: x, clientY: y, target } = lastEvent;
        document.documentElement.style.setProperty('--mouse-x', `${x}px`);
        document.documentElement.style.setProperty('--mouse-y', `${y}px`);
        const cursor = cursorRef.current;
        if (cursor) {
          cursor.style.transform = `translate(${x}px, ${y}px) rotate(-45deg)`;
          const hover = !!(target && target.closest && target.closest('a, button, input, textarea, select, .skill-tag'));
          cursor.classList.toggle('cursor-hover', hover);
        }
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 3. Section highlighting
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));

    // 4. Canvas particle network (throttled + pausable)
    const canvas = canvasRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmallScreen = window.innerWidth < 768;
    let animationFrameId = null;
    let cleanupCanvas = () => {};

    if (canvas && !reduceMotion && !isSmallScreen) {
      const ctx = canvas.getContext('2d', { alpha: false });
      let particles = [];
      let running = true;
      let lastFrame = 0;

      const initParticles = () => {
        const count = Math.min(Math.floor(window.innerWidth / 34), 42);
        particles = Array.from({ length: count }, () => new Particle(canvas.width, canvas.height));
      };

      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
      };
      window.addEventListener('resize', resize, { passive: true });
      resize();

      const LINK_DIST_SQ = 120 * 120;
      const animate = (now) => {
        animationFrameId = requestAnimationFrame(animate);
        if (!running) return;
        if (now - lastFrame < 33) return; // ~30fps is plenty for a background
        lastFrame = now;

        const theme = document.documentElement.getAttribute('data-theme');
        ctx.fillStyle = theme === 'light' ? '#ffffff' : '#020408';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        const pColor = theme === 'light' ? 'rgba(79, 70, 229, 0.4)' : 'rgba(99, 102, 241, 0.55)';
        const lColor = theme === 'light' ? 'rgba(79, 70, 229, 0.10)' : 'rgba(99, 102, 241, 0.14)';

        for (const p of particles) {
          p.update(canvas.width, canvas.height);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = pColor;
          ctx.fill();
        }

        ctx.lineWidth = 1;
        ctx.strokeStyle = lColor;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            if (dx > 120 || dx < -120) continue;
            const dy = particles[i].y - particles[j].y;
            if (dy > 120 || dy < -120) continue;
            if (dx * dx + dy * dy < LINK_DIST_SQ) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      };
      animationFrameId = requestAnimationFrame(animate);

      const handleVisibility = () => { running = !document.hidden; };
      document.addEventListener('visibilitychange', handleVisibility);

      cleanupCanvas = () => {
        window.removeEventListener('resize', resize);
        document.removeEventListener('visibilitychange', handleVisibility);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    } else if (canvas) {
      // Static background colour when animation is off
      canvas.style.display = 'none';
      document.body.style.backgroundColor = 'var(--bg-main)';
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      cleanupCanvas();
    };
  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} id="particle-canvas"></canvas>
      <div className="glow-overlay"></div>

      <div ref={cursorRef} className="custom-cursor rocket-cursor">
        <Rocket className="rocket-icon" size={22} color="var(--primary)" fill="var(--primary)" />
        <div className="rocket-flame"></div>
      </div>

      <Navbar activeSection={activeSection} />
      <main>
        <MemoHero />
        <MemoAbout />
        <MemoSkills />
        <MemoProjects />
        <MemoContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
