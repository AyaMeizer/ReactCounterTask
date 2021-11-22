import React from "react";
import { Component } from 'react';
import './checkout.css';
class Head extends Component{
render(){
    return(
     <div className='headCont'>
        <div className="priceTagCont"><img className="priceTag" src="https://img.icons8.com/ios/20/fa314a/price-tag--v1.png"/>
        <p className='offers'>
          Get 25% off on all orders</p><br/>
          <p className="coupon">Coupon added to basket</p>
          <hr/>
       </div>
       </div>
    )}
}
export default Head;