import React from "react";
import  { Component } from 'react';
import './checkout.css';
class Checkout extends Component{
    state={
        counter:0
      }
      add=()=>{
          this.props.addFun();
          if(this.state.counter=="Empty"){
             return(
              this.setState({counter:1}))}
            else {return(
         this.setState({counter:this.state.counter+1}))}}

         sub=()=>{
             if(this.state.counter>0 && this.state.counter!="Empty"){
                 return(
                this.props.subFun(),
                this.setState({counter:this.state.counter-1}))}
              if(this.state.counter<=1)
             {return (
            this.setState({counter:"Empty"}))}
            else if(this.state.counter!="Empty"){
                return(
                    this.setState({counter:this.state.counter-1}))
            }
           }
    render(){
    return(
    <div id='fullContainer'>
        <div className='productName'>{this.props.product}</div>
      <div className='container'> 
       <span className='price'>{this.props.price}</span>
        <span className='count'>
          <div onClick={this.sub}><img className='minusIcon' src="https://img.icons8.com/material-outlined/48/fa314a/minus.png"/></div>
          {this.state.counter}
        <div onClick={this.add}><img className='plusIcon' src="https://img.icons8.com/android/48/fa314a/plus.png"/></div> 
        </span>
        <img className='img' src={this.props.source}/>
    </div>
    </div>
    )}
}
export default Checkout;