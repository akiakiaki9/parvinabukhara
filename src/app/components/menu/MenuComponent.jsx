"use client"
import { useState } from 'react';
import MENU from '@/app/utils/data';
import {
    GiKnifeFork,
    GiForkKnifeSpoon,
    GiMeal
} from 'react-icons/gi';
import {
    MdRestaurantMenu,
    MdFastfood,
    MdLocalPizza,
    MdOutlineRestaurant
} from 'react-icons/md';
import { FaUtensils, FaLeaf } from 'react-icons/fa';
import './menuComponent.css';

const MenuComponent = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    // Категории с иконками
    const categories = [
        { id: 'all', name: 'Все блюда', icon: <MdRestaurantMenu /> },
        { id: 'salads', name: 'Салаты', icon: <FaLeaf /> },
        { id: 'cold_wishes', name: 'Холодные закуски', icon: <GiForkKnifeSpoon /> },
        { id: 'assorted', name: 'Ассорти', icon: <GiMeal /> },
        { id: 'soups', name: 'Супы', icon: <MdFastfood /> },
        { id: 'second_wishes', name: 'Вторые блюда', icon: <GiKnifeFork /> },
        { id: 'shashlik', name: 'Шашлыки', icon: <MdLocalPizza /> },
        { id: 'meat_set', name: 'Мясные сеты', icon: <FaUtensils /> },
    ];

    const categoryNames = {
        salads: 'Салаты',
        cold_wishes: 'Холодные закуски',
        assorted: 'Ассорти',
        soups: 'Супы',
        second_wishes: 'Вторые блюда',
        shashlik: 'Шашлыки',
        meat_set: 'Мясные сеты',
    };

    // Группируем блюда по изображению (каждые 3 блюда используют одно фото)
    const groupItemsByImage = (items) => {
        const groups = [];
        for (let i = 0; i < items.length; i += 3) {
            groups.push({
                image: items[i].image,
                dishes: items.slice(i, i + 3)
            });
        }
        return groups;
    };

    // Получаем уникальные категории из MENU
    const getUniqueCategories = () => {
        const categoriesSet = new Set(MENU.map(item => item.category));
        return Array.from(categoriesSet);
    };

    const uniqueCategories = getUniqueCategories();

    const getFilteredCategories = () => {
        if (activeCategory === 'all') {
            return uniqueCategories;
        }
        return [activeCategory];
    };

    const filteredCategories = getFilteredCategories();

    // Компонент для отображения секции меню
    const MenuSection = ({ category, title, isEven }) => {
        // Фильтруем блюда по категории
        const items = MENU.filter(item => item.category === category);
        const groups = groupItemsByImage(items);

        if (!items.length) return null;

        return (
            <section className={`menu-section ${isEven ? 'even' : 'odd'}`}>
                <div className="menu-section-container">
                    <div className="menu-section-header">
                        <h2 className="menu-section-title">{title}</h2>
                        <div className="menu-section-divider">
                            <span className="divider-line"></span>
                            <GiKnifeFork className="divider-icon" />
                            <span className="divider-line"></span>
                        </div>
                    </div>

                    <div className="menu-items-grid">
                        {groups.map((group, groupIndex) => (
                            <div key={groupIndex} className="menu-group">
                                <div className="menu-group-image">
                                    <img src={group.image} alt={`Блюда ${title}`} loading="lazy" />
                                    <div className="image-overlay"></div>
                                </div>
                                <div className="menu-group-dishes">
                                    {group.dishes.map((dish, dishIndex) => (
                                        <div key={dish.id} className="menu-dish-item">
                                            <div className="dish-info">
                                                <h3 className="dish-name">{dish.name}</h3>
                                                <div className="dish-price">
                                                    <span className="price-amount">{dish.price}</span>
                                                    <span className="price-currency">сум</span>
                                                </div>
                                            </div>
                                            {dishIndex < group.dishes.length - 1 && <div className="dish-separator"></div>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    return (
        <section className="home-menu" id="menu">
            <div className="home-menu-container">
                <div className="home-menu-header">
                    <span className="menu-subtitle">Откройте для себя</span>
                    <h2 className="home-menu-title">Наше меню</h2>
                    <div className="menu-description">
                        <p>Изысканные блюда, приготовленные с любовью и вниманием к деталям</p>
                    </div>
                </div>

                {/* Категории с иконками */}
                <div className="menu-categories">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span className="category-icon">{category.icon}</span>
                            <span className="category-name">{category.name}</span>
                        </button>
                    ))}
                </div>

                {/* Секции меню */}
                <div className="menu-sections">
                    {filteredCategories.map((category, index) => (
                        <MenuSection
                            key={category}
                            category={category}
                            title={categoryNames[category]}
                            isEven={index % 2 === 1}
                        />
                    ))}
                </div>

                {/* Кнопка полного меню */}
                <div className="menu-footer">
                    <a href="/menu" className="full-menu-btn">
                        <span>Посмотреть полное меню</span>
                        <MdOutlineRestaurant />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MenuComponent;