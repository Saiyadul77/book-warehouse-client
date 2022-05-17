import React from 'react';

const Invent = ({item}) => {
    const { name, img, description, price, quantity, supplier } = item;
    return (
        <div>
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier Name:{supplier}</p>
        </div>
    );
};

export default Invent;