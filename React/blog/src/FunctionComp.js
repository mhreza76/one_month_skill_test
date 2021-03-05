import React from "react"

export default function func_comp(){

    const red=()=>{
        alert("red function called")

    }
    
    return   <div>
            <h1 onClick={red}>Function component called</h1>
        </div>
} 