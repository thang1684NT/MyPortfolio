import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, MonitorSmartphone, Server, Database, Wrench } from 'lucide-react';

// icon = skillicons.dev id; null = text monogram (skillicons has no SQL Server icon)
const rowA = [
    { name: 'Java', icon: 'java' },
    { name: 'C#', icon: 'cs' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'TypeScript', icon: 'ts' },
    { name: 'C++', icon: 'cpp' },
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'React', icon: 'react' },
    { name: 'React Native', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
];

const rowB = [
    { name: 'ASP.NET Core', icon: 'dotnet' },
    { name: 'Spring Boot', icon: 'spring' },
    { name: 'Express', icon: 'express' },
    { name: 'PostgreSQL', icon: 'postgres' },
    { name: 'Microsoft SQL Server', icon: null, fallback: 'SQL' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'Redis', icon: 'redis' },
    { name: 'Git', icon: 'git' },
    { name: 'DevOps', icon: 'githubactions' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Postman', icon: 'postman' },
    { name: 'VS Code', icon: 'vscode' },
];

const SkillChip = ({ item }) => (
    <span className="skill-chip">
        {item.icon ? (
            <img
                src={`https://skillicons.dev/icons?i=${item.icon}`}
                alt=""
                width="22"
                height="22"
                loading="lazy"
                decoding="async"
            />
        ) : (
            <span className="skill-chip-fallback">{item.fallback}</span>
        )}
        {item.name}
    </span>
);

// One marquee row: the list is rendered twice and the track translates -50%,
// giving a seamless infinite loop using transform only (GPU-cheap).
const MarqueeRow = ({ items, reverse = false, duration = 36 }) => (
    <div className="marquee" aria-hidden="false">
        <div
            className={`marquee-track${reverse ? ' reverse' : ''}`}
            style={{ animationDuration: `${duration}s` }}
        >
            {[0, 1].map((copy) => (
                <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
                    {items.map((item) => (
                        <SkillChip key={`${copy}-${item.name}`} item={item} />
                    ))}
                </div>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const { t } = useTranslation();

    const categories = [
        { key: 'languages', icon: <Code size={18} />, names: 'Java · C# · JavaScript · TypeScript · C++' },
        { key: 'frontend', icon: <MonitorSmartphone size={18} />, names: 'HTML · CSS · React · React Native · Next.js · Tailwind CSS' },
        { key: 'frameworks', icon: <Server size={18} />, names: 'ASP.NET Core · Spring Boot · Express' },
        { key: 'database', icon: <Database size={18} />, names: 'PostgreSQL · SQL Server · MySQL · MongoDB · Redis' },
        { key: 'tools', icon: <Wrench size={18} />, names: 'Git · DevOps · Docker · Postman · VS Code' },
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-head reveal">
                    <p className="section-eyebrow">02 — {t('nav.skills')}</p>
                    <h2 className="section-title">{t('skills.title')}</h2>
                    <p className="section-sub">{t('skills.tagline')}</p>
                </div>
            </div>

            <div className="reveal marquee-wrap">
                <MarqueeRow items={rowA} duration={34} />
                <MarqueeRow items={rowB} reverse duration={42} />
            </div>

            <div className="container">
                <div className="skills-cats reveal">
                    {categories.map((cat) => (
                        <div key={cat.key} className="skill-cat-card">
                            <div className="skill-cat-card-head">{cat.icon} {t(`skills.${cat.key}`)}</div>
                            <p>{cat.names}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
