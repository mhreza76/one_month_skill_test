import React from "react"

export default function func_comp(props){

    const red=()=>{
        alert("red function called")

    }
    
    return(
        <div>
            <h4 onClick={red}>Function component called</h4>
            <h4>{props.text}</h4>
            <h4>{props.data.name}</h4>
        </div>
    )
} 