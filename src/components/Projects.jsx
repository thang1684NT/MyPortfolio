import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Calendar, Users, Code } from 'lucide-react';

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
            github: "https://github.com/3h4524/FruitManagement.git"
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
            github_fe: "https://github.com/LeThanhNguyen-dev/FE_FoodHub.git"
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-head reveal">
                    <p className="section-eyebrow">03 — {t('nav.projects')}</p>
                    <h2 className="section-title">{t('projects.title')}</h2>
                    <p className="section-sub">{t('projects.tagline')}</p>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <article key={project.id} className="project-card reveal">
                            <div className="project-top">
                                <div className="project-icon"><Code size={21} /></div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub Repository" aria-label="GitHub Repository">
                                        <Github size={17} />
                                    </a>
                                    {project.github_fe && (
                                        <a href={project.github_fe} target="_blank" rel="noopener noreferrer" title="Frontend Repo" aria-label="Frontend Repo">
                                            <Github size={17} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="project-role">{project.role}</p>
                            <h3>{project.title}</h3>

                            <div className="project-meta">
                                <span><Users size={14} /> {project.teamSize} Members</span>
                                <span><Calendar size={14} /> {project.year}</span>
                            </div>

                            <p className="project-desc">{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="chip">{tech}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
