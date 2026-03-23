"use client"
import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaCircle } from 'react-icons/fa';
import { MdRestaurant, MdPeople, MdEmojiEvents } from 'react-icons/md';
import './interiorCarousel.css';

const InteriorCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const autoPlayRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const images = [
        {
            id: 1,
            url: '/images/banquets/1.png',
            title: 'Кабины',
            description: 'Уютные приватные кабинеты с элегантным интерьером, идеальные для семейных ужинов',
            icon: <MdRestaurant />
        },
        {
            id: 3,
            url: '/images/banquets/3.png',
            title: 'Экзотический зал',
            description: 'Просторный зал для проведения торжественных мероприятий',
            icon: <MdPeople />
        },
        {
            id: 4,
            url: '/images/banquets/4.png',
            title: 'Главный зал',
            description: 'Элегантный интерьер с золотыми акцентами и уютной атмосферой',
            icon: <MdRestaurant />
        },
        {
            id: 5,
            url: '/images/banquets/5.png',
            title: 'VIP зона',
            description: 'Приватная зона для особых случаев и деловых встреч',
            icon: <MdEmojiEvents />
        }
    ];
    // Функция для следующего слайда
    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    // Функция для предыдущего слайда
    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    // Переход к конкретному слайду
    const goToSlide = (index) => {
        if (isTransitioning || index === currentIndex) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    // Автопрокрутка
    useEffect(() => {
        autoPlayRef.current = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, []);

    // Остановка автопрокрутки при наведении
    const pauseAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
            autoPlayRef.current = null;
        }
    };

    // Возобновление автопрокрутки
    const resumeAutoPlay = () => {
        if (!autoPlayRef.current) {
            autoPlayRef.current = setInterval(() => {
                nextSlide();
            }, 5000);
        }
    };

    // Обработка свайпов на мобильных
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
        const swipeDistance = touchEndX.current - touchStartX.current;

        if (Math.abs(swipeDistance) > 50) {
            if (swipeDistance > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        }
    };

    return (
        <section className="interior-carousel">
            <div className="carousel-container">
                <div className="carousel-header">
                    <span className="carousel-subtitle">Галерея</span>
                    <h2 className="carousel-title">Интерьер ресторана</h2>
                    <div className="carousel-divider">
                        <span className="divider-line"></span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                        <span className="divider-line"></span>
                    </div>
                    <p className="carousel-description">
                        Окунитесь в атмосферу элегантности и роскоши
                    </p>
                </div>

                <div
                    className="carousel-wrapper"
                    onMouseEnter={pauseAutoPlay}
                    onMouseLeave={resumeAutoPlay}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="carousel-slides-container">
                        <div
                            className="carousel-slides"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                                transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                            }}
                        >
                            {images.map((image, index) => (
                                <div key={image.id} className="carousel-slide">
                                    <div className="slide-image">
                                        <img src={image.url} alt={image.title} />
                                        <div className="slide-overlay"></div>
                                    </div>
                                    <div className={`slide-content ${index === currentIndex ? 'active' : ''}`}>
                                        <div className="slide-icon">{image.icon}</div>
                                        <h3 className="slide-title">{image.title}</h3>
                                        <p className="slide-description">{image.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="carousel-btn prev-btn"
                        onClick={prevSlide}
                        aria-label="Предыдущий слайд"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className="carousel-btn next-btn"
                        onClick={nextSlide}
                        aria-label="Следующий слайд"
                    >
                        <FaChevronRight />
                    </button>

                    <div className="carousel-dots">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Перейти к слайду ${index + 1}`}
                            >
                                <FaCircle />
                            </button>
                        ))}
                    </div>

                    <div className="carousel-progress">
                        <div
                            className="progress-bar"
                            style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteriorCarousel;