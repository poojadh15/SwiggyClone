import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log(err)
    return(
        <>
        <h1>OOPS!!!</h1>
        <h2>Something Went Wrong!!!!</h2>
        </>
    );
}

export default Error;