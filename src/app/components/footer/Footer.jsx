"use client"
import {
    FaMapMarkerAlt,
    FaPhone,
    FaClock,
    FaInstagram,
    FaTelegram,
    FaArrowUp,
    FaCode
} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './footer.css';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'Instagram',
            icon: <FaInstagram />,
            url: 'https://www.instagram.com/restaurant_parvina/',
            color: '#E4405F'
        },
        {
            name: 'Telegram',
            icon: <FaTelegram />,
            url: 'https://t.me/parvinachat',
            color: '#26A5E4'
        }
    ];

    const quickLinks = [
        { name: 'Главная', href: '/' },
        { name: 'Меню', href: '/menu' },
        { name: 'Банкеты', href: '/banquets' },
        { name: 'Контакты', href: '/contacts' },
        { name: 'О нас', href: 'https://www.instagram.com/stories/highlights/17874397487510481/' },
        { name: 'Отзывы', href: 'https://www.instagram.com/stories/highlights/17852711264585544/' }
    ];

    const contacts = [
        { icon: <FaPhone />, text: '+998 (93) 687-00-20', href: 'tel:+998936870020' },
        { icon: <FaPhone />, text: '+998 (33) 687-00-20', href: 'tel:+998336870020' },
        { icon: <FaMapMarkerAlt />, text: 'Бухара, проспект Каган, Шарк Базар', href: 'https://maps.google.com/?q=Parvina+Restaurant+Bukhara' },
        { icon: <FaClock />, text: 'Ежедневно: 11:00 - 23:00', href: null }
    ];

    const workingHours = [
        { day: 'Понедельник - Воскресенье', hours: '11:00 - 23:00' }
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Основной контент футера */}
                <div className="footer-grid">
                    {/* Логотип и описание */}
                    <div className="footer-column">
                        <div className="footer-logo">
                            <div className="logo-icon">
                                <svg width="45" height="45" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 5 L25 12 L20 19 L15 12 L20 5Z" fill="#d4af37" stroke="#d4af37" strokeWidth="1" />
                                    <circle cx="20" cy="20" r="15" stroke="#d4af37" strokeWidth="2" fill="none" />
                                    <path d="M20 25 L20 35 M15 30 L25 30" stroke="#d4af37" strokeWidth="2" />
                                    <circle cx="20" cy="20" r="3" fill="#d4af37" />
                                </svg>
                            </div>
                            <div className="logo-text">
                                <h3 className="footer-restaurant-name">Parvina</h3>
                                <p className="footer-restaurant-subtitle">Restaurant & Banquet</p>
                            </div>
                        </div>
                        <p className="footer-description">
                            Элитный ресторан в сердце Бухары.
                            Изысканная кухня, уникальная атмосфера с 30-метровым фонтаном
                            и живая музыка. Идеальное место для проведения банкетов и
                            романтических ужинов.
                        </p>
                    </div>

                    {/* Быстрые ссылки */}
                    <div className="footer-column">
                        <h4 className="footer-title">Быстрые ссылки</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="footer-link">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Контакты */}
                    <div className="footer-column">
                        <h4 className="footer-title">Контакты</h4>
                        <ul className="footer-contacts">
                            {contacts.map((contact, index) => (
                                <li key={index}>
                                    {contact.href ? (
                                        <a href={contact.href} className="contact-link">
                                            <span className="contact-icon">{contact.icon}</span>
                                            <span>{contact.text}</span>
                                        </a>
                                    ) : (
                                        <div className="contact-info">
                                            <span className="contact-icon">{contact.icon}</span>
                                            <span>{contact.text}</span>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Соцсети и часы работы */}
                    <div className="footer-column">
                        <h4 className="footer-title">Мы в соцсетях</h4>
                        <div className="footer-social">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                    <span className="social-name">{social.name}</span>
                                </a>
                            ))}
                        </div>

                        <div className="working-hours">
                            <h4 className="footer-title">Часы работы</h4>
                            {workingHours.map((item, index) => (
                                <div key={index} className="hours-item">
                                    <span className="hours-day">{item.day}</span>
                                    <span className="hours-time">{item.hours}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Нижняя часть футера */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © {currentYear} Parvina Restaurant. Все права защищены.
                        </p>
                        <div className="developer">
                            <FaCode className="developer-icon" />
                            <span>Разработчик: </span>
                            <a href="https://akbarsoft.uz" target="_blank" rel="noopener noreferrer" className="developer-link">
                                Akbar Soft
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Кнопка наверх */}
            {showScrollTop && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <FaArrowUp />
                </button>
            )}
        </footer>
    );
};

export default Footer;