import React from 'react'
import Navbar from '../components/navbar/Navbar';
import MenuPage from './MenuPage';
import Footer from '../components/footer/Footer';

export const metadata = {
    title: "Меню ресторана Parvina | Авторская кухня Бухара",
    description: "Ознакомьтесь с полным меню ресторана Parvina. Узбекская, европейская и азиатская кухня от шеф-повара. Блюда из свежих продуктов, авторские рецепты.",
};

export default function page() {
    return (
        <div>
            <Navbar />
            <MenuPage />
            <Footer />
        </div>
    )
};