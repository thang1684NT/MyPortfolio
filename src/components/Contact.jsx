import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <div className="fade-in">
                        <h2 className="section-title">
                            <span className="text-gradient">Contact Me</span>
                        </h2>
                        <div className="section-divider"></div>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: '500' }}>
                            {t('contact.tagline') || "Let's build something amazing together."}
                        </p>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    alignItems: 'start'
                }}>
                    <div className="fade-in">
                        <div className="glass" style={{ padding: '2rem', height: '100%' }}>
                            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1.5rem' }}>Get in Touch</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                                    <div style={{ background: 'var(--skill-bg)', p: '1rem', padding: '1rem', borderRadius: '1rem', color: 'var(--primary)', border: '1px solid var(--border-glow)' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase' }}>{t('contact.email')}</p>
                                        <p style={{ fontSize: '0.98rem', fontWeight: '700' }}>namthang@gmail.com</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ background: 'var(--skill-bg)', padding: '1rem', borderRadius: '1rem', color: 'var(--secondary)', border: '1px solid var(--border-glow)' }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase' }}>{t('contact.phone')}</p>
                                        <p style={{ fontSize: '0.98rem', fontWeight: '700' }}>+84 123 456 789</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ background: 'var(--skill-bg)', padding: '1rem', borderRadius: '1rem', color: 'var(--accent)', border: '1px solid var(--border-glow)' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase' }}>{t('contact.address')}</p>
                                        <p style={{ fontSize: '0.98rem', fontWeight: '700' }}>Da Nang, Viet Nam</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '2.25rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-glow)', display: 'flex', gap: '1.5rem' }}>
                                <a href="#" className="btn" style={{ padding: '0.8rem', background: 'var(--skill-bg)' }}><Github size={20} /></a>
                                <a href="#" className="btn" style={{ padding: '0.8rem', background: 'var(--skill-bg)' }}><Linkedin size={20} /></a>
                                <a href="#" className="btn" style={{ padding: '0.8rem', background: 'var(--skill-bg)' }}><Facebook size={20} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="fade-in">
                        <form className="glass" style={{ padding: '2rem' }} onSubmit={(e) => e.preventDefault()}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '700', fontSize: '0.9rem' }}>Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        style={{
                                            width: '100%', padding: '0.95rem 1.1rem', borderRadius: '0.8rem',
                                            background: 'rgba(0,0,0,0.05)', border: '1px solid var(--border-glow)',
                                            color: 'var(--text-primary)', outline: 'none'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '700', fontSize: '0.9rem' }}>Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        style={{
                                            width: '100%', padding: '0.95rem 1.1rem', borderRadius: '0.8rem',
                                            background: 'rgba(0,0,0,0.05)', border: '1px solid var(--border-glow)',
                                            color: 'var(--text-primary)', outline: 'none'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '700', fontSize: '0.9rem' }}>Message</label>
                                    <textarea
                                        rows="5"
                                        placeholder="How can I help you?"
                                        style={{
                                            width: '100%', padding: '0.95rem 1.1rem', borderRadius: '0.8rem',
                                            background: 'rgba(0,0,0,0.05)', border: '1px solid var(--border-glow)',
                                            color: 'var(--text-primary)', outline: 'none', resize: 'none'
                                        }}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.95rem' }}>
                                    Send Message <Send size={20} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
