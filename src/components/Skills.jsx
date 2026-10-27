import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, MonitorSmartphone, Server, Database, Wrench } from 'lucide-react';

// icon = skillicons.dev id; null = text monogram (skillicons has no SQL Server icon)
const categories = [
    {
        key: 'languages',
        icon: <Code size={20} />,
        items: [
            { name: 'Java', icon: 'java' },
            { name: 'C#', icon: 'cs' },
            { name: 'JavaScript', icon: 'js' },
            { name: 'TypeScript', icon: 'ts' },
            { name: 'C++', icon: 'cpp' },
        ],
    },
    {
        key: 'frontend',
        icon: <MonitorSmartphone size={20} />,
        items: [
            { name: 'HTML', icon: 'html' },
            { name: 'CSS', icon: 'css' },
            { name: 'React', icon: 'react' },
            { name: 'React Native', icon: 'react' },
            { name: 'Next.js', icon: 'nextjs' },
            { name: 'Tailwind CSS', icon: 'tailwindcss' },
        ],
    },
    {
        key: 'frameworks',
        icon: <Server size={20} />,
        items: [
            { name: 'ASP.NET Core', icon: 'dotnet' },
            { name: 'Spring Boot', icon: 'spring' },
            { name: 'Express', icon: 'express' },
        ],
    },
    {
        key: 'database',
        icon: <Database size={20} />,
        items: [
            { name: 'PostgreSQL', icon: 'postgres' },
            { name: 'Microsoft SQL Server', icon: null, fallback: 'SQL' },
            { name: 'MySQL', icon: 'mysql' },
            { name: 'MongoDB', icon: 'mongodb' },
            { name: 'Redis', icon: 'redis' },
        ],
    },
    {
        key: 'tools',
        icon: <Wrench size={20} />,
        items: [
            { name: 'Git', icon: 'git' },
            { name: 'DevOps', icon: 'githubactions' },
            { name: 'Docker', icon: 'docker' },
            { name: 'Postman', icon: 'postman' },
            { name: 'VS Code', icon: 'vscode' },
        ],
    },
];

// Solar system: skill icons orbit the avatar "sun" on 3 rings at
// different speeds/directions. Planet icons counter-rotate so the
// logos always stay upright while they travel around the rings.
const orbits = [
    {
        inset: '0%', duration: 48, reverse: false,
        planets: [
            { name: 'Java', icon: 'java', angle: 20 },
            { name: 'React', icon: 'react', angle: 110 },
            { name: 'PostgreSQL', icon: 'postgres', angle: 200 },
            { name: 'Docker', icon: 'docker', angle: 290 },
        ],
    },
    {
        inset: '17%', duration: 34, reverse: true,
        planets: [
            { name: 'C#', icon: 'cs', angle: 60 },
            { name: 'Spring Boot', icon: 'spring', angle: 150 },
            { name: 'MySQL', icon: 'mysql', angle: 240 },
            { name: 'Git', icon: 'git', angle: 330 },
        ],
    },
    {
        inset: '33%', duration: 24, reverse: false,
        planets: [
            { name: 'ASP.NET Core', icon: 'dotnet', angle: 0 },
            { name: 'Next.js', icon: 'nextjs', angle: 120 },
            { name: 'MongoDB', icon: 'mongodb', angle: 240 },
        ],
    },
];

const OrbitSystem = () => (
    <div className="orbit-system" role="img" aria-label="Skill solar system">
        <div className="orbit-sun">
            <img
                src={`${import.meta.env.BASE_URL}avatar.png`}
                alt=""
                width="96"
                height="96"
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Thang&background=059669&color=fff&size=128"; }}
            />
        </div>
        {orbits.map((ring, ri) => (
            <div
                key={ri}
                className={`orbit-ring${ring.reverse ? ' reverse' : ''}`}
                style={{ inset: ring.inset, '--dur': `${ring.duration}s` }}
            >
                {ring.planets.map((p) => {
                    const rad = (p.angle * Math.PI) / 180;
                    const x = 50 + 50 * Math.cos(rad);
                    const y = 50 + 50 * Math.sin(rad);
                    return (
                        <span
                            key={p.name}
                            className="planet"
                            style={{ left: `${x}%`, top: `${y}%` }}
                            title={p.name}
                        >
                            <img
                                src={`https://skillicons.dev/icons?i=${p.icon}`}
                                alt={p.name}
                                width="24"
                                height="24"
                                loading="lazy"
                                decoding="async"
                            />
                        </span>
                    );
                })}
            </div>
        ))}
    </div>
);

const SkillChip = ({ item, index = 0 }) => (
    <span className="skill-chip" style={{ animationDelay: `${(index % 6) * 0.22}s` }}>
        {item.icon ? (
            <img
                src={`https://skillicons.dev/icons?i=${item.icon}`}
                alt=""
                width="20"
                height="20"
                loading="lazy"
                decoding="async"
            />
        ) : (
            <span className="skill-chip-fallback">{item.fallback}</span>
        )}
        {item.name}
    </span>
);

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-head reveal">
                    <p className="section-eyebrow">02 — {t('nav.skills')}</p>
                    <h2 className="section-title">{t('skills.title')}</h2>
                    <p className="section-sub">{t('skills.tagline')}</p>
                </div>

                <div className="skills-layout">
                    <div className="reveal orbit-wrap">
                        <OrbitSystem />
                        <p className="orbit-hint">{t('skills.orbit_hint')}</p>
                    </div>

                    <div className="skills-grid skills-grid-col">
                        {categories.map((cat, idx) => (
                            <div
                                key={cat.key}
                                className="skill-card reveal"
                                style={{ transitionDelay: `${idx * 70}ms` }}
                            >
                                <div className="skill-card-head">
                                    <span className="skill-card-icon">{cat.icon}</span>
                                    {t(`skills.${cat.key}`)}
                                </div>
                                <div className="skill-card-chips">
                                    {cat.items.map((item, i) => (
                                        <SkillChip key={item.name} item={item} index={i} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
