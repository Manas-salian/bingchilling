import React from 'react';

const Cake = ({ cake, onAddToCart }) => {
    return (
        <div className="cake">
            <img src={cake.image} alt={cake.name} /> {/* Note the path */}
            <h3>{cake.name}</h3>
            <p>Price: ${cake.price}</p>
            <button onClick={() => onAddToCart(cake)}>Add to Cart</button>
        </div>
    );
};

export default Cake;