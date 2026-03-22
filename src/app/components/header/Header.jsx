"use client";
import { useEffect, useRef } from "react";
import {
    FiStar,
    FiMusic,
    FiMapPin,
    FiArrowRight,
    FiChevronRight,
    FiInstagram,
    FiSend
} from "react-icons/fi";
import { GiKnifeFork } from "react-icons/gi";
import "./header.css";

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
            element.scrollIntoView({ behavior: "smooth" });
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
                </video>
                <div className="video-overlay"></div>
            </div>

            {/* Контент */}
            <div className="hero-content">
                <div className="hero-container">
                    <div className="hero-badge">
                        <span className="badge-text">
                            <FiStar /> Вдохновляющий вкус
                        </span>
                    </div>

                    <h1 className="hero-title">
                        <span className="title-line">Parvina</span>
                        <span className="title-sub">Restaurant & Banquet</span>
                    </h1>

                    <p className="hero-description">
                        Элегантный ресторан в сердце Бухары, где традиции встречаются с
                        изысканностью
                    </p>

                    <div className="hero-features">
                        <div className="feature-item">
                            <GiKnifeFork />
                            <span>⛲ 30-метровый фонтан</span>
                        </div>
                        <div className="feature-item">
                            <FiMusic />
                            <span>🎶 Живая музыка</span>
                        </div>
                        <div className="feature-item">
                            <FiMapPin />
                            <span>🚙 Доставка 24/7</span>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <button
                            className="btn-primary"
                            onClick={() => scrollToSection("menu")}
                        >
                            <span>Наше меню</span>
                            <FiArrowRight />
                        </button>
                        <button
                            className="btn-secondary"
                            onClick={() => scrollToSection("contacts")}
                        >
                            <span>Контакты</span>
                            <FiChevronRight />
                        </button>
                    </div>
                </div>
            </div>

            {/* Социальные ссылки */}
            <div className="social-links">
                <a
                    href="https://www.instagram.com/restaurant_parvina/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FiInstagram />
                </a>
                <a
                    href="https://t.me/parvinachat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FiSend />
                </a>
            </div>
        </header>
    );
};

export default Header;