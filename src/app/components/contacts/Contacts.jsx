"use client"
import { FaMapMarkerAlt, FaPhone, FaClock, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { MdRestaurant } from 'react-icons/md';
import './contacts.css';

const Contacts = () => {
    const contacts = [
        {
            icon: <FaPhone />,
            title: 'Телефоны',
            items: [
                { value: '+998 (93) 687-00-20', href: 'tel:+998936870020' },
                { value: '+998 (33) 687-00-20', href: 'tel:+998336870020' }
            ]
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Адрес',
            items: [
                { value: 'Бухара, проспект Каган, Шарк Базар', href: 'https://maps.google.com/?q=Parvina+Restaurant+Bukhara' }
            ]
        },
        {
            icon: <FaClock />,
            title: 'Режим работы',
            items: [
                { value: 'Ежедневно: 11:00 - 23:00' }
            ]
        }
    ];

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

    const features = [
        {
            icon: <MdRestaurant />,
            title: 'Изысканная кухня',
            description: 'Авторские блюда от шеф-повара'
        },
        {
            icon: <FaClock />,
            title: 'Живая музыка',
            description: 'Ежедневно с 19:00'
        },
        {
            icon: <FaMapMarkerAlt />,
            title: '30-метровый фонтан',
            description: 'Уникальная атмосфера'
        }
    ];

    return (
        <section className="contacts" id="contacts">
            <div className="contacts-container">
                <div className="contacts-header">
                    <span className="contacts-subtitle">Свяжитесь с нами</span>
                    <h2 className="contacts-title">Контакты</h2>
                    <div className="contacts-divider">
                        <span className="divider-line"></span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                        <span className="divider-line"></span>
                    </div>
                    <p className="contacts-description">
                        Мы всегда рады ответить на ваши вопросы и принять заявки на бронирование
                    </p>
                </div>

                <div className="contacts-grid">
                    {/* Левая колонка - контактная информация */}
                    <div className="contacts-info">
                        <div className="info-cards">
                            {contacts.map((contact, index) => (
                                <div key={index} className="info-card">
                                    <div className="card-icon">{contact.icon}</div>
                                    <h3 className="card-title">{contact.title}</h3>
                                    <div className="card-content">
                                        {contact.items.map((item, idx) => (
                                            item.href ? (
                                                <a key={idx} href={item.href} className="card-link">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p key={idx} className="card-text">{item.value}</p>
                                            )
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Социальные сети - новый дизайн */}
                        <div className="social-section">
                            <h3 className="social-title">Мы в социальных сетях</h3>
                            <div className="social-grid">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-card"
                                        style={{ '--social-color': social.color }}
                                    >
                                        <div className="social-card-icon">{social.icon}</div>
                                        <div className="social-card-info">
                                            <span className="social-card-name">{social.name}</span>
                                            <span className="social-card-follow">Подписаться</span>
                                        </div>
                                        <div className="social-card-arrow">→</div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Правая колонка - карта и особенности */}
                    <div className="contacts-map">
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.0924177348743!2d64.4494478757932!3d39.76003337155267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50052c3b48eaf3%3A0x9ad3d6f30675dfe6!2sParvina%20restaurant!5e0!3m2!1sru!2sus!4v1774182647433!5m2!1sru!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Parvina Restaurant Location"
                            ></iframe>
                            <div className="map-overlay">
                                <div className="map-marker">
                                    <FaMapMarkerAlt />
                                    <span>Parvina Restaurant</span>
                                </div>
                            </div>
                        </div>

                        <div className="features-grid">
                            {features.map((feature, index) => (
                                <div key={index} className="feature-card">
                                    <div className="feature-icon">{feature.icon}</div>
                                    <div className="feature-info">
                                        <h4 className="feature-title">{feature.title}</h4>
                                        <p className="feature-description">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Баннер с призывом к действию */}
                <div className="cta-banner">
                    <div className="cta-content">
                        <h3 className="cta-title">Забронируйте столик прямо сейчас</h3>
                        <p className="cta-text">Создайте незабываемый вечер в элегантной атмосфере</p>
                    </div>
                    <a href="tel:+998936870020" className="cta-button">
                        <FaPhone />
                        <span>Позвонить для бронирования</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contacts;