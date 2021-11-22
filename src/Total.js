import React from "react";
import { Component } from 'react';
import './checkout.css';
class Total extends Component{
render(){
    return(
        <div className='total'>
            <hr/>
        <h3>
        Totat Amount: {this.props.total}
        </h3>
        </div>
    )
}
}
export default Total;