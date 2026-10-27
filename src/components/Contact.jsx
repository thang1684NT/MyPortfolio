import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
    const { t } = useTranslation();

    const items = [
        { icon: <Mail size={19} />, label: t('contact.email'), value: 'namthang@gmail.com' },
        { icon: <Phone size={19} />, label: t('contact.phone'), value: '+84 123 456 789' },
        { icon: <MapPin size={19} />, label: t('contact.address'), value: 'Da Nang, Viet Nam' },
    ];

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="section-head reveal">
                    <p className="section-eyebrow">04 — {t('nav.contact')}</p>
                    <h2 className="section-title">{t('contact.title')}</h2>
                    <p className="section-sub">{t('contact.tagline')}</p>
                </div>

                <div className="contact-grid">
                    <div className="card reveal">
                        {items.map((item) => (
                            <div key={item.label} className="contact-item">
                                <div className="contact-icon">{item.icon}</div>
                                <div>
                                    <div className="lbl">{item.label}</div>
                                    <div className="val">{item.value}</div>
                                </div>
                            </div>
                        ))}

                        <div className="socials">
                            <a href="https://github.com/thang1684NT" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                        </div>
                    </div>

                    <form className="form-card reveal" onSubmit={(e) => e.preventDefault()}>
                        <div className="field">
                            <label htmlFor="ct-name">Full Name</label>
                            <input id="ct-name" type="text" placeholder="Enter your name" autoComplete="name" />
                        </div>
                        <div className="field">
                            <label htmlFor="ct-email">Email Address</label>
                            <input id="ct-email" type="email" placeholder="Enter your email" autoComplete="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="ct-msg">Message</label>
                            <textarea id="ct-msg" rows="5" placeholder="How can I help you?"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Send Message <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
