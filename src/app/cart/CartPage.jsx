"use client";

import { useState } from 'react';
import { useCart } from '../context/CartContext';
import PageHeader from '../components/pageHeader/PageHeader';
import { FaTrash, FaPlus, FaMinus, FaShoppingCart, FaPhone, FaTimes } from 'react-icons/fa';
import './cartPage.css';

const CartPage = () => {
    const { cartItems, updateQuantity, removeFromCart, clearCart, totalPrice, totalItems } = useCart();
    const [showOrderModal, setShowOrderModal] = useState(false);

    const deliveryFee = totalItems > 0 ? 15000 : 0;
    const totalWithDelivery = totalPrice + deliveryFee;

    const openOrderModal = () => {
        setShowOrderModal(true);
        document.body.style.overflow = 'hidden';
    };

    const closeOrderModal = () => {
        setShowOrderModal(false);
        document.body.style.overflow = 'unset';
    };

    const handleCall = () => {
        window.location.href = 'tel:+998936870020';
    };

    if (cartItems.length === 0) {
        return (
            <>
                <PageHeader
                    title="Корзина"
                    breadcrumb={[
                        { name: 'Главная', link: '/' },
                        { name: 'Корзина' }
                    ]}
                />
                <div className="cart-page">
                    <div className="cart-empty">
                        <FaShoppingCart className="empty-icon" />
                        <h2>Ваша корзина пуста</h2>
                        <p>Добавьте блюда из меню, чтобы оформить заказ</p>
                        <a href="/menu" className="empty-btn">Перейти в меню</a>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <PageHeader
                title="Корзина"
                breadcrumb={[
                    { name: 'Главная', link: '/' },
                    { name: 'Корзина' }
                ]}
            />

            <div className="cart-page">
                <div className="cart-container">
                    <div className="cart-grid">
                        {/* Список товаров */}
                        <div className="cart-items">
                            <div className="cart-header">
                                <h3>Товары в корзине ({totalItems})</h3>
                                <button className="clear-cart-btn" onClick={clearCart}>
                                    Очистить корзину
                                </button>
                            </div>

                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="item-details">
                                        <h4 className="item-name">{item.name}</h4>
                                        <div className="item-price">{item.price.toLocaleString()} сум</div>
                                    </div>
                                    <div className="item-quantity">
                                        <button
                                            className="quantity-btn"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        >
                                            <FaMinus />
                                        </button>
                                        <span className="quantity-number">{item.quantity}</span>
                                        <button
                                            className="quantity-btn"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            <FaPlus />
                                        </button>
                                    </div>
                                    <div className="item-total">
                                        {(item.price * item.quantity).toLocaleString()} сум
                                    </div>
                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Сумма заказа */}
                        <div className="cart-summary">
                            <h3>Сумма заказа</h3>
                            <div className="summary-row">
                                <span>Товары ({totalItems})</span>
                                <span>{totalPrice.toLocaleString()} сум</span>
                            </div>
                            <div className="summary-row">
                                <span>Доставка</span>
                                <span>{deliveryFee.toLocaleString()} сум</span>
                            </div>
                            <div className="summary-divider"></div>
                            <div className="summary-row total">
                                <span>Итого</span>
                                <span>{totalWithDelivery.toLocaleString()} сум</span>
                            </div>
                            <button className="checkout-btn" onClick={openOrderModal}>
                                Оформить заказ
                            </button>
                            <a href="/menu" className="continue-btn">
                                Продолжить покупки
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальное окно заказа */}
            {showOrderModal && (
                <div className="order-modal" onClick={closeOrderModal}>
                    <div className="order-modal-overlay"></div>
                    <div className="order-modal-container">
                        <button className="order-modal-close" onClick={closeOrderModal}>
                            <FaTimes />
                        </button>

                        <div className="order-modal-content" onClick={(e) => e.stopPropagation()}>
                            <div className="order-modal-icon">
                                <FaShoppingCart />
                            </div>
                            <h2 className="order-modal-title">Ваш заказ</h2>

                            <div className="order-items-list">
                                {cartItems.map(item => (
                                    <div key={item.id} className="order-item">
                                        <div className="order-item-info">
                                            <span className="order-item-name">{item.name}</span>
                                            <span className="order-item-quantity">x{item.quantity}</span>
                                        </div>
                                        <span className="order-item-price">
                                            {(item.price * item.quantity).toLocaleString()} сум
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="order-divider"></div>

                            <div className="order-total">
                                <span>Итого:</span>
                                <span className="order-total-price">{totalWithDelivery.toLocaleString()} сум</span>
                            </div>

                            <div className="order-delivery">
                                <span>Доставка:</span>
                                <span>{deliveryFee.toLocaleString()} сум</span>
                            </div>

                            <p className="order-text">
                                Для подтверждения заказа позвоните нам
                            </p>

                            <button className="order-call-btn" onClick={handleCall}>
                                <FaPhone />
                                <span>Позвонить для заказа</span>
                            </button>

                            <p className="order-note">
                                Телефон: +998 (93) 687-00-20
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartPage;