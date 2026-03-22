import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import ContactsPage from './ContactsPage';

export const metadata = {
    title: "Меню ресторана Parvina | Авторская кухня Бухара",
    description: "Ознакомьтесь с полным меню ресторана Parvina. Узбекская, европейская и азиатская кухня от шеф-повара. Блюда из свежих продуктов, авторские рецепты.",
};

export default function page() {
    return (
        <div>
            <Navbar />
            <ContactsPage />
            <Footer />
        </div>
    )
};