import React, { useEffect, useState } from 'react';
import Invent from '../Invent/Invent';

const Inventories = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url=`http://localhost:5000/service`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div>
            <h1 className='text-center text-primary mt-5'>Total Inventory Product: {items.length}</h1>
            <div className='items-container'>

                {
                    items.map(item => <Invent key={item._id}
                        item={item}
                    ></Invent>)
                }
            </div>
            
        </div>
    );
};

export default Inventories;