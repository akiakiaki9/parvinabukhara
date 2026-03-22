"use client"
import PageHeader from '../components/pageHeader/PageHeader';
import { FaUsers, FaUtensils, FaMusic, FaCamera, FaParking, FaWifi } from 'react-icons/fa';
import { MdEmojiEvents } from 'react-icons/md';
import './banquetsPage.css';

const BanquetsPage = () => {
    const packages = [
        {
            title: 'Свадебный банкет',
            price: 'от 250 000 сум/чел',
            features: [
                'Вместимость до 150 гостей',
                'Живая музыка 3 часа',
                'Фотограф в подарок',
                'Свадебный торт',
                'Украшение зала',
                'Приветственный фуршет'
            ],
            icon: <MdEmojiEvents />
        },
        {
            title: 'Юбилей',
            price: 'от 200 000 сум/чел',
            features: [
                'Вместимость до 100 гостей',
                'DJ сопровождение',
                'Индивидуальное меню',
                'Оформление зала',
                'Караоке',
                'Фотозона'
            ],
            icon: <FaMusic />
        },
        {
            title: 'Корпоратив',
            price: 'от 180 000 сум/чел',
            features: [
                'Вместимость до 80 гостей',
                'Презентационное оборудование',
                'Кофе-брейк',
                'Бизнес-ланч',
                'VIP обслуживание',
                'Бесплатный Wi-Fi'
            ],
            icon: <FaUsers />
        }
    ];

    const facilities = [
        { icon: <FaUsers />, name: 'До 200 гостей' },
        { icon: <FaUtensils />, name: 'Индивидуальное меню' },
        { icon: <FaMusic />, name: 'Живая музыка' },
        { icon: <FaCamera />, name: 'Фотозона' },
        { icon: <FaParking />, name: 'Парковка' },
        { icon: <FaWifi />, name: 'Wi-Fi' }
    ];

    return (
        <>
            <PageHeader
                title="Банкетный зал"
                breadcrumb={[
                    { name: 'Главная', link: '/' },
                    { name: 'Банкеты' }
                ]}
            />

            <div className="banquets-page">
                <div className="banquets-container">
                    {/* Описание */}
                    <div className="banquets-description">
                        <h2 className="section-title">Идеальное место для вашего праздника</h2>
                        <p className="section-text">
                            Parvina Restaurant предлагает элегантный банкетный зал для проведения
                            свадеб, юбилеев, корпоративов и других торжественных мероприятий.
                            Уникальная атмосфера, изысканная кухня и профессиональное обслуживание
                            сделают ваш праздник незабываемым.
                        </p>
                    </div>

                    {/* Особенности */}
                    <div className="facilities-section">
                        <h3 className="subsection-title">Наши преимущества</h3>
                        <div className="facilities-grid">
                            {facilities.map((facility, index) => (
                                <div key={index} className="facility-card">
                                    <div className="facility-icon">{facility.icon}</div>
                                    <span className="facility-name">{facility.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Пакеты */}
                    <div className="packages-section">
                        <h3 className="subsection-title">Банкетные пакеты</h3>
                        <div className="packages-grid">
                            {packages.map((pkg, index) => (
                                <div key={index} className="package-card">
                                    <div className="package-icon">{pkg.icon}</div>
                                    <h3 className="package-title">{pkg.title}</h3>
                                    <div className="package-price">{pkg.price}</div>
                                    <ul className="package-features">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <a href="tel:+998936870020" className="package-btn">
                                        Забронировать
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="gallery-section">
    <h3 className="subsection-title">Галерея банкетного зала</h3>
    <div className="gallery-grid">
        <div className="gallery-item large">
            <img 
                src="https://picsum.photos/1200/800?random=1" 
                alt="Банкетный зал" 
            />
        </div>
        <div className="gallery-item">
            <img 
                src="https://picsum.photos/800/600?random=2" 
                alt="Украшение зала" 
            />
        </div>
        <div className="gallery-item">
            <img 
                src="https://picsum.photos/800/600?random=3" 
                alt="Сервировка стола" 
            />
        </div>
        <div className="gallery-item">
            <img 
                src="https://picsum.photos/800/600?random=4" 
                alt="Фонтан" 
            />
        </div>
        <div className="gallery-item">
            <img 
                src="https://picsum.photos/800/600?random=5" 
                alt="Живая музыка" 
            />
        </div>
    </div>
</div>

                    {/* Контакт */}
                    <div className="contact-banner">
                        <div className="contact-banner-content">
                            <h3>Организуйте идеальный праздник</h3>
                            <p>Свяжитесь с нами для расчета стоимости и консультации</p>
                        </div>
                        <a href="tel:+998936870020" className="contact-banner-btn">
                            Связаться с нами
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BanquetsPage;