import React from "react"
class class_component_exe extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        console.warn("life cycle")
    }
    render() {
        return ( 
            <div>
                <h1>Class Component Called</h1>
            </div>
        )
    }
}
export default class_component_exe;