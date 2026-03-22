"use client"
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Загрузка корзины из localStorage при инициализации
    useEffect(() => {
        const savedCart = localStorage.getItem('parvina_cart');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (error) {
                console.error('Error loading cart:', error);
                setCartItems([]);
            }
        }
        setIsInitialized(true);
    }, []);

    // Сохранение корзины в localStorage при изменении
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('parvina_cart', JSON.stringify(cartItems));
        }
    }, [cartItems, isInitialized]);

    // Добавление товара в корзину
    const addToCart = (item, quantity = 1) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(i => i.id === item.id);

            if (existingItem) {
                // Если товар уже есть, увеличиваем количество
                return prevItems.map(i =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + quantity }
                        : i
                );
            } else {
                // Если товара нет, добавляем новый
                return [...prevItems, { ...item, quantity }];
            }
        });
    };

    // Удаление товара из корзины
    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    // Обновление количества товара
    const updateQuantity = (id, quantity) => {
        if (quantity < 1) {
            removeFromCart(id);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    // Очистка корзины
    const clearCart = () => {
        setCartItems([]);
    };

    // Получение общего количества товаров
    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    // Получение общей суммы
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        totalItems: getTotalItems(),
        totalPrice: getTotalPrice()
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};