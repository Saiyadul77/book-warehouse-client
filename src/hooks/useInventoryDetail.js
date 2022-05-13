import { useEffect, useState } from "react";

const useInventoryDetail=inventoryId=>{
    const [items, setItems]= useState({});

    useEffect(()=>{
        const url= `inventory.json${inventoryId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[inventoryId])
    return [items];
}
export default useInventoryDetail;