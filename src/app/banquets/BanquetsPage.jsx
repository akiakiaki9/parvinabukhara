"use client"
import { useRef, useEffect } from 'react';
import PageHeader from '../components/pageHeader/PageHeader';
import { FaUsers, FaUtensils, FaParking, FaWifi, FaPhone, FaStar, FaCrown, FaTree, FaChair, FaTv } from 'react-icons/fa';
import { GiSoundWaves } from 'react-icons/gi';
import { MdEmojiEvents } from 'react-icons/md';
import './banquetsPage.css';

const BanquetsPage = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8;
        }
    }, []);

    const rooms = [
        {
            id: 1,
            category: 'cabin',
            name: 'Кабины',
            type: 'Кабины',
            capacity: '15-20 человек',
            count: 5,
            description: 'Уютные кабинеты для приватных встреч и небольших компаний',
            images: [
                '/images/banquets/1.png',
                '/images/banquets/2.png'
            ],
            icon: <FaChair />
        },
        {
            id: 2,
            category: 'exotic',
            name: 'Экзотический зал',
            capacity: '20 человек',
            description: 'Уникальный зал с восточным колоритом и неповторимой атмосферой',
            images: [
                '/images/banquets/3.png',
                '/images/banquets/4.png'
            ],
            icon: <FaTree />
        },
        {
            id: 3,
            category: 'vip',
            name: 'VIP зал',
            capacity: '15 человек',
            description: 'Премиальный зал для особых случаев с индивидуальным обслуживанием',
            images: [
                '/images/banquets/5.png',
                '/images/banquets/6.png'
            ],
            hasVertical: true,
            icon: <FaCrown />
        },
        {
            id: 4,
            category: 'banquet',
            name: 'Банкетный зал',
            capacity: '250 человек',
            description: 'Главный зал ресторана для масштабных торжеств и мероприятий',
            hasVideo: true,
            icon: <MdEmojiEvents />
        }
    ];

    const facilities = [
        { icon: <FaUsers />, name: 'До 250 гостей' },
        { icon: <FaUtensils />, name: 'Индивидуальное меню' },
        { icon: <GiSoundWaves />, name: 'Живая музыка' },
        { icon: <FaTv />, name: 'Презентационное оборудование' },
        { icon: <FaParking />, name: 'Парковка' },
        { icon: <FaWifi />, name: 'Wi-Fi' }
    ];

    const handleCall = () => {
        window.location.href = 'tel:+998936870020';
    };

    return (
        <>
            <PageHeader
                title="Банкетные залы"
                breadcrumb={[
                    { name: 'Главная', link: '/' },
                    { name: 'Банкеты' }
                ]}
            />

            <div className="banquets-page">
                <div className="banquets-container">
                    {/* Описание */}
                    <div className="banquets-description">
                        <h2 className="section-title">Пространство для ваших торжеств</h2>
                        <p className="section-text">
                            Parvina Restaurant предлагает разнообразные залы для проведения мероприятий любого масштаба.
                            От уютных кабинетов до просторного банкетного зала — мы создадим идеальную атмосферу для вашего праздника.
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

                    {/* Залы */}
                    <div className="rooms-section">
                        {rooms.map((room) => (
                            <div key={room.id} className="room-card">
                                <div className="room-header">
                                    <div className="room-icon">{room.icon}</div>
                                    <div className="room-info">
                                        <h3 className="room-name">{room.name}</h3>
                                        <p className="room-capacity">
                                            <FaUsers className="capacity-icon" />
                                            <span>{room.capacity}</span>
                                        </p>
                                    </div>
                                </div>

                                <p className="room-description">{room.description}</p>

                                {room.count && (
                                    <div className="room-count">
                                        <span className="count-badge">{room.count} кабинета</span>
                                    </div>
                                )}

                                <div className="room-media">
                                    {room.hasVideo ? (
                                        <div className="room-video">
                                            <video
                                                ref={videoRef}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="video-element"
                                            >
                                                <source src="/videos/banquet.mp4" type="video/mp4" />
                                            </video>
                                            <div className="video-overlay"></div>
                                            <div className="video-badge">
                                                <GiSoundWaves />
                                                <span>Живое видео</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="room-images">
                                            {room.images.map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`room-image ${room.hasVertical && idx === 1 ? 'vertical' : ''}`}
                                                >
                                                    <img src={img} alt={`${room.name} - фото ${idx + 1}`} loading="lazy" />
                                                    <div className="image-overlay"></div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="room-footer">
                                    <button className="call-btn" onClick={handleCall}>
                                        <FaPhone />
                                        <span>Позвонить</span>
                                    </button>
                                    <span className="phone-number">+998 (93) 687-00-20</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BanquetsPage;