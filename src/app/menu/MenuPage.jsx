"use client"
import { Suspense } from 'react';
import MenuContent from './MenuContent';

export const metadata = {
    title: "Меню ресторана Parvina | Авторская кухня Бухара",
    description: "Ознакомьтесь с полным меню ресторана Parvina. Узбекская, европейская и азиатская кухня от шеф-повара. Блюда из свежих продуктов, авторские рецепты.",
};

export default function MenuPage() {
    return (
        <Suspense fallback={
            <div className="menu-loading">
                <div className="loading-spinner"></div>
                <p>Загрузка меню...</p>
            </div>
        }>
            <MenuContent />
        </Suspense>
    );
}