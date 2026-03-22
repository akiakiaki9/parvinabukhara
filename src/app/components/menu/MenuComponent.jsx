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
    MdOutlineRestaurant,
    MdArrowForward
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

    // Получаем 3 блюда для категории
    const getCategoryItems = (category) => {
        const items = MENU.filter(item => item.category === category);
        return items.slice(0, 3);
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

    return (
        <section className="home-menu" id="menu">
            <div className="home-menu-container">
                <div className="home-menu-header">
                    <span className="menu-subtitle">Откройте для себя</span>
                    <h2 className="home-menu-title">Наше меню</h2>
                    <div className="menu-description">
                        <p>Популярные блюда, которые стоит попробовать</p>
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

                {/* Сетка категорий */}
                <div className="menu-categories-grid">
                    {filteredCategories.map((category) => {
                        const items = getCategoryItems(category);
                        if (!items.length) return null;

                        return (
                            <div key={category} className="category-card">
                                <div className="category-card-header">
                                    <h3 className="category-title">{categoryNames[category]}</h3>
                                    <div className="category-divider"></div>
                                </div>

                                <div className="category-items">
                                    {items.map((item, index) => (
                                        <div key={item.id} className="menu-item">
                                            <div className="menu-item-info">
                                                <span className="item-number">{index + 1}</span>
                                                <h4 className="item-name">{item.name}</h4>
                                            </div>
                                            <div className="item-price">
                                                <span className="price">{item.price}</span>
                                                <span className="currency">сум</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <a href="/menu" className="view-all-btn">
                                    <span>Смотреть все</span>
                                    <MdArrowForward />
                                </a>
                            </div>
                        );
                    })}
                </div>

                {/* Кнопка полного меню */}
                <div className="menu-footer">
                    <a href="/menu" className="full-menu-btn">
                        <span>Полное меню ресторана</span>
                        <MdOutlineRestaurant />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MenuComponent;