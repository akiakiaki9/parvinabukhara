import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import CartPage from './CartPage'

export default function page() {
    return (
        <div>
            <Navbar />
            <CartPage />
            <Footer />
        </div>
    )
};