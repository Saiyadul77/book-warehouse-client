import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Inventory = () => {
    const [items, setItems]=useState([]);

    useEffect(()=>{
        fetch('inventory.json')
        .then(res=>res.json())
        .then(data=>setItems(data));
    },[])
    return (
        <div>
            <h3>This is Inventory: {items.length}</h3>
            {
                items.map(item=><Item key={item.id}
                item={item}
                ></Item>)
            }
        </div>
    );
};

export default Inventory;