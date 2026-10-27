import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, MonitorSmartphone, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
    const { t } = useTranslation();

    const skillsData = [
        {
            key: 'languages',
            icon: <Code size={19} />,
            items: ['Java', 'C#', 'JavaScript', 'TypeScript', 'C++']
        },
        {
            key: 'frontend',
            icon: <MonitorSmartphone size={19} />,
            items: ['HTML', 'CSS', 'React', 'React Native', 'Next.js', 'Tailwind CSS']
        },
        {
            key: 'frameworks',
            icon: <Server size={19} />,
            items: ['ASP.NET Core', 'Spring Boot', 'Express']
        },
        {
            key: 'database',
            icon: <Database size={19} />,
            items: ['PostgreSQL', 'Microsoft SQL Server', 'MySQL', 'MongoDB', 'Redis']
        },
        {
            key: 'tools',
            icon: <Wrench size={19} />,
            items: ['Git', 'DevOps', 'Docker', 'Postman', 'VS Code']
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-head reveal">
                    <p className="section-eyebrow">02 — {t('nav.skills')}</p>
                    <h2 className="section-title">{t('skills.title')}</h2>
                    <p className="section-sub">{t('skills.tagline')}</p>
                </div>

                <div className="reveal">
                    {skillsData.map((category) => (
                        <div key={category.key} className="skill-row">
                            <div className="skill-cat">
                                {category.icon} {t(`skills.${category.key}`)}
                            </div>
                            <div className="chips">
                                {category.items.map((name) => (
                                    <span key={name} className="chip">{name}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
