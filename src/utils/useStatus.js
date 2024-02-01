import { useEffect, useState } from "react";

const useStatus = () => {
    const [value,setvalue] = useState(true);
    useEffect(() => {
                //check if user online 
                window.addEventListener('online', ()=> {
                    setvalue(true);
                    console.log("Online");
                })
                window.addEventListener('offline', ()=> {
                    setvalue(false);
                    console.log("Offline");
                })
    }, [])
        
        return value;
}
export default useStatus;