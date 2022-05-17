import React from 'react';
import { Link, useParams } from 'react-router-dom';


const InventoryDetail = () => {
    return (
        <div className='text-center'>
            
            <div>
                <Link to={`/inventories`}>
                    <button className='btn btn-primary'>Manage Item</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetail;