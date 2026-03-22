"use client"
import { useEffect, useRef } from 'react';
import './header.css';

const Header = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8;
        }
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="hero-header">
            {/* Видео фон */}
            <div className="video-background">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="background-video"
                >
                    <source src="/videos/restaurant-bg.mp4" type="video/mp4" />
                    {/* Если видео недоступно, используем изображение */}
                </video>
                <div className="video-overlay"></div>
            </div>

            {/* Контент */}
            <div className="hero-content">
                <div className="hero-container">
                    <div className="hero-badge">
                        <span className="badge-text">✨ Вдохновляющий вкус</span>
                    </div>

                    <h1 className="hero-title">
                        <span className="title-line">Parvina</span>
                        <span className="title-sub">Restaurant & Banquet</span>
                    </h1>

                    <p className="hero-description">
                        Элегантный ресторан в сердце Бухары, где традиции встречаются с изысканностью
                    </p>

                    <div className="hero-features">
                        <div className="feature-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span>⛲ 30-метровый фонтан</span>
                        </div>
                        <div className="feature-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M9 18V5l12-2v13" />
                                <circle cx="6" cy="18" r="3" />
                                <circle cx="18" cy="16" r="3" />
                            </svg>
                            <span>🎶 Живая музыка</span>
                        </div>
                        <div className="feature-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M1 12h4M1 8h2M1 16h2M21 12h4M21 8h2M21 16h2M5 5l14 14M19 5L5 19" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span>🚙 Доставка 24/7</span>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <button className="btn-primary" onClick={() => scrollToSection('menu')}>
                            <span>Наше меню</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button className="btn-secondary" onClick={() => scrollToSection('contacts')}>
                            <span>Контакты</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </button>
                    </div>

                    <div className="scroll-indicator">
                        <span>Листайте вниз</span>
                        <div className="scroll-mouse">
                            <div className="scroll-wheel"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Социальные ссылки */}
            <div className="social-links">
                <a href="https://www.instagram.com/restaurant_parvina/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                </a>
                <a href="https://t.me/parvinachat" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21.5 4.5L2 12.5L8.5 14L19 8L12.5 15.5L15 21.5L21.5 4.5Z" />
                    </svg>
                </a>
            </div>
        </header>
    );
};

export default Header;