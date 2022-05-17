import { useEffect, useState } from "react"

const useFirebase = () => {
    const [user, setuser] = useState([]);

    useEffect(() => {

    }, [])
    return [user, setuser];
}
export default useFirebase;