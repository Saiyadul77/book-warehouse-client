import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { id, name, img, description, price, quantity, supplier } = item;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='item-container'>
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier Name:{supplier}</p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Stock Update</button>
        </div>
    );
};

export default Item;