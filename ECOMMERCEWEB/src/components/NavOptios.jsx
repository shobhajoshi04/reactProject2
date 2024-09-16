import React, { useState, useEffect } from 'react';
import NavCard from './NavCard.jsx';
import '../styles/NavOption.css';

function NavOptios({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) {
    const [activeCategory, setActiveCategory] = useState('');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            switch (hash) {
                case '#miphones':
                    setActiveCategory('miPhones');
                    break;
                case '#redmiphones':
                    setActiveCategory('redmiPhones');
                    break;
                case '#tv':
                    setActiveCategory('tv');
                    break;
                case '#laptops':
                    setActiveCategory('laptop');
                    break;
                case '#lifestyle':
                    setActiveCategory('fitnessAndLifeStyle');
                    break;
                case '#home':
                    setActiveCategory('home');
                    break;
                case '#audio':
                    setActiveCategory('audio');
                    break;
                case '#accessories':
                    setActiveCategory('accessories');
                    break;
                default:
                    setActiveCategory('');
            }
        };

        // Call it once on component mount
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const renderNavCards = (items) => (
        items.map(item => (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        ))
    );

    return (
        <div className="navOptions">
            {activeCategory === 'miPhones' && renderNavCards(miPhones)}
            {activeCategory === 'redmiPhones' && renderNavCards(redmiPhones)}
            {activeCategory === 'tv' && renderNavCards(tv)}
            {activeCategory === 'laptop' && renderNavCards(laptop)}
            {activeCategory === 'fitnessAndLifeStyle' && renderNavCards(fitnessAndLifeStyle)}
            {activeCategory === 'home' && renderNavCards(home)}
            {activeCategory === 'audio' && renderNavCards(audio)}
            {activeCategory === 'accessories' && renderNavCards(accessories)}
        </div>
    );
}

export default NavOptios;
