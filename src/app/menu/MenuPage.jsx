"use client"
import { useState } from 'react';
import MENU from '../utils/data';
import PageHeader from '../components/pageHeader/PageHeader';
import { useCart } from '../context/CartContext';
import { GiKnifeFork, GiForkKnifeSpoon, GiMeal } from 'react-icons/gi';
import { MdFastfood, MdLocalPizza, MdClose, MdZoomIn, MdAddShoppingCart } from 'react-icons/md';
import { FaUtensils, FaLeaf, FaSearch, FaCheck } from 'react-icons/fa';
import './menuPage.css';

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [modalImage, setModalImage] = useState(null);
    const [addedToCart, setAddedToCart] = useState({});
    const { addToCart } = useCart();

    const categoryNames = {
        salads: { name: 'Салаты', icon: <FaLeaf />, count: 0 },
        cold_wishes: { name: 'Холодные закуски', icon: <GiForkKnifeSpoon />, count: 0 },
        assorted: { name: 'Ассорти', icon: <GiMeal />, count: 0 },
        soups: { name: 'Супы', icon: <MdFastfood />, count: 0 },
        second_wishes: { name: 'Вторые блюда', icon: <GiKnifeFork />, count: 0 },
        shashlik: { name: 'Шашлыки', icon: <MdLocalPizza />, count: 0 },
        meat_set: { name: 'Мясные сеты', icon: <FaUtensils />, count: 0 },
    };

    // Подсчет количества блюд в каждой категории
    Object.keys(categoryNames).forEach(cat => {
        categoryNames[cat].count = MENU.filter(item => item.category === cat).length;
    });

    const categories = [
        { id: 'all', name: 'Все блюда', icon: <FaSearch />, count: MENU.length },
        ...Object.keys(categoryNames).map(key => ({
            id: key,
            name: categoryNames[key].name,
            icon: categoryNames[key].icon,
            count: categoryNames[key].count
        }))
    ];

    const getFilteredItems = () => {
        let filtered = MENU;

        if (activeCategory !== 'all') {
            filtered = filtered.filter(item => item.category === activeCategory);
        }

        if (searchQuery.trim()) {
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filtered;
    };

    const filteredItems = getFilteredItems();

    const groupedByCategory = {};
    filteredItems.forEach(item => {
        if (!groupedByCategory[item.category]) {
            groupedByCategory[item.category] = [];
        }
        groupedByCategory[item.category].push(item);
    });

    const categoriesToShow = Object.keys(groupedByCategory);

    const openModal = (imageUrl, dishName) => {
        setModalImage({ url: imageUrl, name: dishName });
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalImage(null);
        document.body.style.overflow = 'unset';
    };

    const handleAddToCart = (dish) => {
        const cartItem = {
            id: dish.id,
            name: dish.name,
            price: parseInt(dish.price),
            image: dish.image,
            category: dish.category
        };
        addToCart(cartItem, 1);

        setAddedToCart({ [dish.id]: true });
        setTimeout(() => {
            setAddedToCart({});
        }, 1500);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };

    return (
        <>
            <PageHeader
                title="Наше меню"
                breadcrumb={[
                    { name: 'Главная', link: '/' },
                    { name: 'Меню' }
                ]}
            />

            <div className="menu-page">
                <div className="menu-page-container">
                    {/* Фильтры и поиск */}
                    <div className="menu-filters">
                        <div className="search-bar">
                            <FaSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Поиск блюд..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                        </div>

                        <div className="categories-filter">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(category.id)}
                                >
                                    <span className="filter-icon">{category.icon}</span>
                                    <span className="filter-name">{category.name}</span>
                                    <span className="filter-count">{category.count}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Результаты поиска */}
                    {filteredItems.length === 0 ? (
                        <div className="no-results">
                            <FaSearch className="no-results-icon" />
                            <h3>Ничего не найдено</h3>
                            <p>Попробуйте изменить параметры поиска</p>
                            <button onClick={() => { setActiveCategory('all'); setSearchQuery(''); }} className="reset-btn">
                                Сбросить фильтры
                            </button>
                        </div>
                    ) : (
                        <>
                            {categoriesToShow.map((category) => {
                                const items = groupedByCategory[category];
                                if (!items.length) return null;

                                return (
                                    <div key={category} className="menu-category-section">
                                        <div className="menu-category-header">
                                            <div className="category-icon">{categoryNames[category].icon}</div>
                                            <h2 className="menu-category-title">{categoryNames[category].name}</h2>
                                            <span className="category-count">{items.length} блюд</span>
                                            <div className="category-divider"></div>
                                        </div>

                                        <div className="menu-category-items">
                                            {items.map((dish) => (
                                                <div key={dish.id} className="menu-dish-card">
                                                    <div
                                                        className="dish-image"
                                                        onClick={() => openModal(dish.image, dish.name)}
                                                    >
                                                        <img src={dish.image} alt={dish.name} loading="lazy" />
                                                        <div className="image-overlay">
                                                            <div className="zoom-icon">
                                                                <MdZoomIn />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dish-details">
                                                        <h3 className="dish-name">{dish.name}</h3>
                                                        <div className="dish-price">
                                                            <span className="price">{dish.price}</span>
                                                            <span className="currency">сум</span>
                                                        </div>
                                                        <button
                                                            className={`add-to-cart-btn ${addedToCart[dish.id] ? 'added' : ''}`}
                                                            onClick={() => handleAddToCart(dish)}
                                                        >
                                                            {addedToCart[dish.id] ? (
                                                                <>
                                                                    <FaCheck />
                                                                    <span>Добавлено</span>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <MdAddShoppingCart />
                                                                    <span>В корзину</span>
                                                                </>
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    )}
                </div>
            </div>

            {/* Модальное окно */}
            {modalImage && (
                <div className="image-modal" onClick={closeModal} onKeyDown={handleKeyDown}>
                    <div className="modal-overlay"></div>
                    <div className="modal-container">
                        <button className="modal-close" onClick={closeModal}>
                            <MdClose />
                        </button>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <img src={modalImage.url} alt={modalImage.name} />
                            <div className="modal-caption">
                                <span>{modalImage.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MenuPage;