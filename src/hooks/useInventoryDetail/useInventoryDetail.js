import { useEffect, useState } from "react";

const useInventoryDetail = inventoryId => {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url=`https://mighty-peak-83408.herokuapp.com/service/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [inventoryId])
    return [inventory];
};

export default useInventoryDetail;