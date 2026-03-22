"use client"
import { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const openBookingModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCall = (phone) => {
        window.location.href = `tel:${phone}`;
    };

    const navItems = [
        { name: 'Главная', href: '/' },
        { name: 'Меню', href: '/menu' },
        { name: 'Банкеты', href: '/banquets' },
        { name: 'Контакты', href: '/contacts' },
    ];

    const phones = ['+998 (93) 687-00-20', '+998 (33) 687-00-20'];

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    {/* Логотип и название */}
                    <div className="navbar-logo">
                        <div className="logo-icon">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 5 L25 12 L20 19 L15 12 L20 5Z" fill="#d4af37" stroke="#d4af37" strokeWidth="1" />
                                <circle cx="20" cy="20" r="15" stroke="#d4af37" strokeWidth="2" fill="none" />
                                <path d="M20 25 L20 35 M15 30 L25 30" stroke="#d4af37" strokeWidth="2" />
                                <circle cx="20" cy="20" r="3" fill="#d4af37" />
                            </svg>
                        </div>
                        <div className="logo-text">
                            <span className="restaurant-name">Parvina</span>
                            <span className="restaurant-subtitle">Restaurant & Banquet</span>
                        </div>
                    </div>

                    {/* Десктоп навигация */}
                    <div className="navbar-desktop">
                        <ul className="nav-links">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="nav-link">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="navbar-actions">
                            <div className="phones">
                                {phones.map((phone, index) => (
                                    <a key={index} href={`tel:${phone.replace(/\s/g, '')}`} className="phone-link">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                        {phone}
                                    </a>
                                ))}
                            </div>

                            <button className="cart-button">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="9" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                </svg>
                                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                            </button>

                            <button className="book-button" onClick={openBookingModal}>
                                Забронировать
                            </button>
                        </div>
                    </div>

                    {/* Мобильное меню */}
                    <div className="navbar-mobile">
                        <div className="mobile-actions">
                            <a href={`tel:${phones[0].replace(/\s/g, '')}`} className="mobile-phone">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </a>
                            <button className="mobile-cart">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="9" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                </svg>
                                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                            </button>
                            <button className={`burger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Мобильное меню выпадающее */}
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="mobile-nav-links">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} onClick={toggleMenu}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="mobile-phones">
                        {phones.map((phone, index) => (
                            <a key={index} href={`tel:${phone.replace(/\s/g, '')}`} className="mobile-phone-link">
                                {phone}
                            </a>
                        ))}
                    </div>
                    <button className="mobile-book-button" onClick={openBookingModal}>
                        Забронировать
                    </button>
                </div>
            </nav>

            {/* Модальное окно для бронирования */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <div className="modal-icon">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </div>
                        <h3>Забронировать столик</h3>
                        <p>Позвоните нам для бронирования:</p>
                        <div className="modal-phones">
                            {phones.map((phone, index) => (
                                <button key={index} className="modal-phone-btn" onClick={() => handleCall(phone.replace(/\s/g, ''))}>
                                    {phone}
                                </button>
                            ))}
                        </div>
                        <p className="modal-note">Режим работы: ежедневно с 11:00 до 23:00</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;