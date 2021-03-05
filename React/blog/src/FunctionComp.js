import React from "react"

export default function func_comp(prop){

    const red=()=>{
        alert("red function called")

    }
    
    return   <div>
            <h1 onClick={red}>Function component called</h1>
            <h1 onClick={red}>{prop.text}</h1>
        </div>
} 