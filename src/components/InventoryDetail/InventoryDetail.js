import React from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetail from '../../hooks/useInventoryDetail';

const InventoryDetail = () => {
    const {inventoryId}=useParams();
    const [items]=useInventoryDetail(inventoryId)
    return (
        <div className='text-center'>
            <h1>This is service detail:{items.name}</h1>
            {/* <div>
                <Link to={`/checkout/${inventoryId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div> */}
        </div>
    );
};

export default InventoryDetail;