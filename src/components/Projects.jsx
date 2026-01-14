import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, ExternalLink, Calendar, Users, Code, Briefcase } from 'lucide-react';

const Projects = () => {
    const { t } = useTranslation();

    const projectsData = [
        {
            id: 'fruit_store',
            title: "Online Fruit Store Web App",
            role: "Fullstack Developer – Product Management",
            teamSize: "5",
            year: "2024",
            tech: ["Java Servlet", "SQL Server", "HTML/CSS/JS", "Bootstrap"],
            description: "Developed full CRUD functionality for product management, designed product listing with enhanced filtering, search, and form validation. Integrated sales statistics and built a chatbot using Dialogflow.",
            github: "https://github.com/3h4524/FruitManagement.git",
            demo: "#"
        },
        {
            id: 'food_hub',
            title: "FoodHub - Restaurant Management System",
            role: "Fullstack Developer – Admin Module",
            teamSize: "5",
            year: "2025",
            tech: ["Java Spring Boot", "MySQL", "HTML/CSS/JS", "Bootstrap"],
            description: "Implemented admin role management for menu, employees, and customers. Developed transaction tracking, revenue reports, and built RESTful APIs with Spring Boot for frontend integration.",
            github: "https://github.com/Nguyenkhang2004/FoodHub.git",
            github_fe: "https://github.com/LeThanhNguyen-dev/FE_FoodHub.git",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div className="fade-in">
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '900', lineHeight: 1.2 }}>
                            <span className="text-gradient">{t('projects.title')}</span>
                        </h2>
                        <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '1.5rem auto', borderRadius: '2px' }}></div>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: '500' }}>{t('projects.tagline')}</p>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                    gap: '3rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {projectsData.map((project, idx) => (
                        <div
                            key={project.id}
                            className="glass fade-in"
                            style={{
                                padding: '3rem',
                                display: 'flex',
                                flexDirection: 'column',
                                animationDelay: `${idx * 0.1}s`,
                                height: '100%'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                                <div style={{ background: 'var(--skill-bg)', padding: '1rem', borderRadius: '1.2rem', color: 'var(--primary)', border: '1px solid var(--border-glow)' }}>
                                    <Code size={30} />
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn"
                                        style={{ width: '45px', height: '45px', padding: '0', justifyContent: 'center', background: 'var(--skill-bg)' }}
                                        title="Github Repository"
                                    >
                                        <Github size={20} />
                                    </a>
                                    {project.github_fe && (
                                        <a
                                            href={project.github_fe}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn"
                                            style={{ width: '45px', height: '45px', padding: '0', justifyContent: 'center', background: 'var(--skill-bg)' }}
                                            title="Frontend Repo"
                                        >
                                            <Github size={20} color="var(--secondary)" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'var(--secondary)',
                                fontWeight: '800',
                                fontSize: '0.85rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginBottom: '1rem'
                            }}>
                                <Briefcase size={16} /> {project.role}
                            </div>

                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', fontWeight: '900', color: 'var(--text-primary)' }}>
                                {project.title}
                            </h3>

                            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '700' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <Users size={16} color="var(--primary)" /> {project.teamSize} Members
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <Calendar size={16} color="var(--primary)" /> {project.year}
                                </span>
                            </div>

                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: '1.8', flex: 1 }}>
                                {project.description}
                            </p>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.8rem',
                                borderTop: '1px solid var(--border-glow)',
                                paddingTop: '2rem'
                            }}>
                                {project.tech.map(t => (
                                    <span key={t} className="skill-tag" style={{ fontSize: '0.75rem', background: 'var(--skill-bg)' }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
