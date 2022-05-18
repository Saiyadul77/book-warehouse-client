import { useEffect, useState } from "react";

const useInventoryDetail = inventoryId => {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url=`http://localhost:5000/service/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [inventoryId])
    return [inventory];
};

export default useInventoryDetail;