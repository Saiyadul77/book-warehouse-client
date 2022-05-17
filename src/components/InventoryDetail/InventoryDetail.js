import React from 'react';
import { Link, useParams } from 'react-router-dom';


const InventoryDetail = () => {
    const {inventoryId}=useParams();
   
    return (
        <div className='text-center'>
            <h1>This is service detail:{inventoryId}</h1>
            <div>
                <Link to={`/checkout`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetail;