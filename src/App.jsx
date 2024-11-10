// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cake from './components/Cake';
import Cart from './components/Cart';
import About from './components/About';
import './styles.css'; 

import zero from './assets/customizablecake.webp';
import one from './assets/cherry.jpg'
import two from './assets/chocoturd.jpg';
import three from './assets/braincake.jpg';
import four from './assets/strawberry.jpg';
import five from './assets/seveharvey.jpg';
import six from './assets/grimaceshake.webp';


const App = () => {
  const cakes = [
    { id: 1, name: 'Blank cake', price: 10, image: zero },
    { id: 2, name: 'Merry Cherry', price: 12, image: one },
    { id: 3, name: 'Choco Turd', price: 15, image: two },
    { id: 4, name: 'Knowledge Cake', price: 11, image: three },
    { id: 5, name: 'Handsome Strawberry', price: 18, image: four },
    { id: 6, name: 'Steve', price: 13, image: five },
    { id: 7, name: 'Grimace Shake', price: 13, image: six },
  ];

    const [cart, setCart] = useState([]);

    const addToCart = (cake) => {
        setCart([...cart, cake]);
    };

    const removeFromCart = (cakeId) => {
        const updatedCart = cart.filter((item) => item.id !== cakeId);
        setCart(updatedCart);
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={removeFromCart} />} />
                <Route
                    path="/"
                    element={
                        <main>
                            <section id="cakes">
                                <h2>Popular Cakes</h2>
                                <div className="cake-container">
                                    {cakes.map((cake) => (
                                        <Cake key={cake.id} cake={cake} onAddToCart={addToCart} />
                                    ))}
                                </div>
                            </section>
                        </main>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;