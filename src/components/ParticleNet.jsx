import React, { useEffect, useRef } from 'react';

// Connected-particle ("neuron network") background, heavily optimised:
// few particles, squared-distance checks, ~30fps cap, DPR locked to 1,
// pauses when the tab is hidden, off for reduced-motion users.
const ParticleNet = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            canvas.style.display = 'none';
            return;
        }

        const ctx = canvas.getContext('2d');
        let particles = [];
        let rafId = null;
        let running = true;
        let lastFrame = 0;

        const LINK = 130;
        const LINK_SQ = LINK * LINK;

        const init = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            canvas.width = w;
            canvas.height = h;
            const count = w < 768
                ? 22
                : Math.min(Math.floor(w / 36), 46);
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: Math.random() * 1.5 + 0.8,
            }));
        };

        const animate = (now) => {
            rafId = requestAnimationFrame(animate);
            if (!running) return;
            if (now - lastFrame < 33) return;
            lastFrame = now;

            const w = canvas.width;
            const h = canvas.height;
            const light = document.documentElement.getAttribute('data-theme') === 'light';
            ctx.clearRect(0, 0, w, h);

            const dotColor = light ? 'rgba(5, 150, 105, 0.55)' : 'rgba(52, 211, 153, 0.65)';
            const lineBase = light ? '5, 150, 105' : '52, 211, 153';

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = dotColor;
                ctx.fill();
            }

            ctx.lineWidth = 1;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    if (dx > LINK || dx < -LINK) continue;
                    const dy = particles[i].y - particles[j].y;
                    if (dy > LINK || dy < -LINK) continue;
                    const distSq = dx * dx + dy * dy;
                    if (distSq < LINK_SQ) {
                        const alpha = (1 - Math.sqrt(distSq) / LINK) * 0.16;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${lineBase}, ${alpha})`;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const onResize = () => init();
        const onVisibility = () => { running = !document.hidden; };

        window.addEventListener('resize', onResize, { passive: true });
        document.addEventListener('visibilitychange', onVisibility);
        init();
        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', onResize);
            document.removeEventListener('visibilitychange', onVisibility);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return <canvas ref={canvasRef} id="net-canvas" aria-hidden="true"></canvas>;
};

export default ParticleNet;
