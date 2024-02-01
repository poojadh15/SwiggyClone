import UserClass from "./UserClasss";
import UserClass2 from "./UserClass2";
import {useEffect} from "react";

const About = () => {
    useEffect(()=>{
        setInterval(()=>{
            //setcount(count++);
            console.log("OP");
        }, 1000)
        return ()=>{
            console.log("returned");
        }
    })
    return (
        <>
            <h1>This is About Us Comp</h1>

            <UserClass name="PD" surname="DH" />
            <UserClass2 />
        </>
    );
}

export default About;