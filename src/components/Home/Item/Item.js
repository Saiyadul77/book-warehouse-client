import React from 'react';

const Item = ({item}) => {
    const {name, price, description, img}=item;
    return (
        <div>
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

export default Item;