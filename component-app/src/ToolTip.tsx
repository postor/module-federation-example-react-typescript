import React from 'lib-app/dist/react';
import  "./tool-tip.css";

export default class ToolTip extends React.Component<any>{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="tool-tip" data-content={this.props.message}>{this.props.content}</div>
    }
}