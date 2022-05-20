import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetail from '../../hooks/useInventoryDetail/useInventoryDetail';


const InventoryDetail = () => {
    const {inventoryId}=useParams();
    const [inventory]=useInventoryDetail(inventoryId)
    const [quantity, setQuantity]= useState(0);
    
    const updateQuantity=()=>{
        const quantity=quantity-1;
        setQuantity(quantity);
    }
   
    return (
        <div className='text-center w-50 mx-auto'>
            {/* <h1>This is service detail:{inventoryId}</h1> */}
            <h3>{inventory.name}</h3>
            <img src={inventory.img} alt="" />
            <p>{inventory.description}</p>
            <p>Price: ${inventory.price}</p>
            <p>Quantity:{quantity} {inventory.quantity}</p>
            <p>Supplier Name:{inventory.supplier}</p>
            <button onClick={updateQuantity} className='btn btn-primary'>Delivered</button><br />
            <input type="text" placeholder='Restock the Item' required/>
            <input type="submit" value="Restock" />
        </div>
    );
};

export default InventoryDetail;