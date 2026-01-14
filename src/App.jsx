import React, { useEffect, useState, useRef, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Rocket } from 'lucide-react';
import './i18n';
import './index.css';

// Performance: Move Particle class outside and optimize drawing
class Particle {
  constructor(canvasWidth, canvasHeight) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.vx = (Math.random() - 0.5) * 0.4; // Slightly slower for smoothness
    this.vy = (Math.random() - 0.5) * 0.4;
    this.radius = Math.random() * 1.5 + 1;
  }
  update(w, h) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;
  }
  draw(ctx, color) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
}

// Memoize sections to prevent unnecessary re-renders
const MemoHero = React.memo(Hero);
const MemoAbout = React.memo(About);
const MemoSkills = React.memo(Skills);
const MemoProjects = React.memo(Projects);
const MemoContact = React.memo(Contact);

function App() {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // 1. Initial Theme setup
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // 2. Performance: Direct DOM manipulation for cursor (Avoid React re-renders on move)
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Update CSS variables for glow
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);

      // Update cursor element position directly
      if (cursorRef.current) {
        // Use requestAnimationFrame for super smooth movement
        requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate(${x}px, ${y}px) rotate(-45deg) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`;
          }
        });
      }

      // Hover detection (Debounced slightly for performance)
      const target = e.target;
      const hover = !!(target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button'));
      if (hover !== isHovering) setIsHovering(hover);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 3. Section Highlighting (Optimized)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('section[id]').forEach(section => observer.observe(section));

    // 4. Canvas Neuron Network (High Performance)
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); // Disable alpha for faster clear
    let particles = [];
    let animationFrameId;

    const initParticles = () => {
      const count = Math.min(Math.floor(window.innerWidth / 20), 80);
      particles = Array.from({ length: count }, () => new Particle(canvas.width, canvas.height));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener('resize', resize, { passive: true });
    resize();

    const animate = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const bgColor = theme === 'light' ? '#ffffff' : '#020408';
      const pColor = theme === 'light' ? 'rgba(79, 70, 229, 0.4)' : 'rgba(99, 102, 241, 0.6)';
      const lColor = theme === 'light' ? 'rgba(79, 70, 229, 0.1)' : 'rgba(99, 102, 241, 0.15)';

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height); // Faster than clearRect

      particles.forEach(p => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx, pColor);
      });

      // Optimized Connection Logic (Skip distant particles early)
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy; // Use squared distance to avoid Math.sqrt
          if (distSq < 25600) { // 160^2
            const opacity = 1 - Math.sqrt(distSq) / 160;
            ctx.beginPath();
            ctx.strokeStyle = lColor;
            ctx.globalAlpha = opacity;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [isHovering]);

  return (
    <div className="App">
      <canvas ref={canvasRef} id="particle-canvas"></canvas>
      <div className="glow-overlay"></div>

      <div
        ref={cursorRef}
        className={`custom-cursor rocket-cursor ${isHovering ? 'cursor-hover' : ''}`}
        style={{ willChange: 'transform' }}
      >
        <Rocket size={isHovering ? 28 : 24} color="var(--primary)" fill="var(--primary)" />
        <div className="rocket-flame" style={{ height: isHovering ? '25px' : '15px' }}></div>
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
