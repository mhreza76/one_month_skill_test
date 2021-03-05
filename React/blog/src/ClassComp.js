import React from "react"
class class_component_exe extends React.Component {
    
    /*
    constructor() {
        super()
    }
    componentDidMount() {
        console.warn("life cycle")
    }
    */
    render() {
        return ( 
            <div>
                <h3>Class Component Called</h3>
                <h4>{this.props.text}</h4>
                <h4>{this.props.data.name}</h4>
            </div>
        )
    }
}
export default class_component_exe;