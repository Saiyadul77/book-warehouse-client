import React from 'react';
import './Item.css'

const Item = ({item}) => {
    const {name, img, description, price, quantity, supplier}=item;
    return (
        <div className='item-container'>
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier Name:{supplier}</p>
            <button className='btn btn-primary'>Stock Update</button>
        </div>
    );
};

export default Item;