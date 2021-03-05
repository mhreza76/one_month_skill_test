import React from "react"

export default class StateComp extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "Hasan",
            email: "rezabaiust@gmail.com",
            count: 0
        }
    }
    updateState()
    {
        this.setState({
            name: "Reza",
            count: this.state.count+1
        })
    }

    render(){
        return(
            <div>
                <h4>State Component Called</h4>
                <h4>Name: {this.state.name}</h4>
                <h4>Email: {this.state.email}</h4>
                <h4>Count: {this.state.count}</h4>
                <button onClick={()=>{this.updateState()}}>Click to change</button>
            </div>
        )
    }
}