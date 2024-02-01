import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RestInfo: {

            },
        };
    }
    async componentDidMount(){
        //console.log("inside mount of child1");
        const data = await fetch("https://api.github.com/users/akshaymarch7") 
        const list = await data.json();
        console.log(list);
        this.setState({
            RestInfo: list,
        });
        
    }
    
    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <h1>Class Based Component</h1>
                <button onClick={()=>{
                    console.log("button clciked")
                    //this is a way to update state variable in class based componenetw, never ever update state vars directly
                    //here react rerenders the component and update only this portion 
                    //& reconcilation takes place (diffing algorithm)
                    console.log(this.state.RestInfo);
                }}>ADD CART</button>
            </>

        )
    }
}

export default UserClass;