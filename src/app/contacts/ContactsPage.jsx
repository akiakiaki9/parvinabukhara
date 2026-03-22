"use client"
import PageHeader from '../components/pageHeader/PageHeader';
import { FaMapMarkerAlt, FaPhone, FaClock, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import './contactsPage.css';

export const metadata = {
    title: "Контакты Parvina | Ресторан в Бухаре",
    description: "Свяжитесь с рестораном Parvina в Бухаре. Телефоны: +998 (93) 687-00-20, +998 (33) 687-00-20. Адрес: проспект Каган, Шарк Базар. Режим работы: ежедневно с 11:00 до 23:00.",
};

const ContactsPage = () => {
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
        { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/restaurant_parvina/', color: '#E4405F' },
        { name: 'Telegram', icon: <FaTelegram />, url: 'https://t.me/parvinachat', color: '#26A5E4' },
        { name: 'WhatsApp', icon: <FaWhatsapp />, url: 'https://wa.me/998936870020', color: '#25D366' }
    ];

    return (
        <>
            <PageHeader
                title="Контакты"
                breadcrumb={[
                    { name: 'Главная', link: '/' },
                    { name: 'Контакты' }
                ]}
            />

            <div className="contacts-page">
                <div className="contacts-page-container">
                    <div className="contacts-grid">
                        {/* Контактная информация */}
                        <div className="contacts-info-section">
                            <h2 className="section-title">Свяжитесь с нами</h2>
                            <p className="section-text">
                                Мы всегда рады ответить на ваши вопросы и принять заявки на бронирование
                            </p>

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

                        {/* Карта */}
                        <div className="map-section">
                            <div className="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.0!2d64.4286!3d39.7747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ2JzI4LjkiTiA2NMKwMjUnNDMuMCJF!5e0!3m2!1sru!2s!4v1700000000000!5m2!1sru!2s"
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactsPage;