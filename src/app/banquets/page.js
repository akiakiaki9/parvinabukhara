import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import BanquetsPage from './BanquetsPage';

export const metadata = {
    title: "Банкетный зал Parvina | Проведение мероприятий в Бухаре",
    description: "Проведите свадьбу, юбилей или корпоратив в элитном банкетном зале Parvina. Вместимость до 200 гостей, 30-метровый фонтан, живая музыка.",
};

export default function page() {
    return (
        <div>
            <Navbar />
            <BanquetsPage />
            <Footer />
        </div>
    )
};