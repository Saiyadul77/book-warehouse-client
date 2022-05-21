import { useEffect, useState } from "react";

const useServices=()=>{
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://mighty-peak-83408.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services, setServices]
}
export default useServices;