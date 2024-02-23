import { useContext, useEffect, useState } from "react";
import { Router,Route } from "react-router-dom";

const About = () => {
    return <div>Aboout</div>
}
const contact = () => {
    return <div>Contact</div>
}
function App() {
    return (
        <Router>
            <ul>
                <li>
                    <link to="/about">About</link>
                </li>
                <li>
                    <link to="/contact">Contact</link>
                </li>
            </ul>
            <Route path="/about" Component={About}/>
            <Route path="/contact" Component={contact}/>
        </Router>
        
    )
}
export default App;