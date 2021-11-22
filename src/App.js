// import logo from './logo.svg';
import { Component } from 'react';
import Checkout from'./Checkout'
import Head from'./Head'
import Total from './Total'
// import './App.css';

class App extends Component {
  state={
    product:"Spicy Salmon",
    price: 5.00,
    source:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    counter1:0
  }
  addFun=()=>{
    return(
     this.setState({counter1:this.state.counter1+1})
    )}
   subFun=()=>{
    this.setState({counter1:this.state.counter1-1})
   }
  //  this.state.map((item,product)
  //  <Checkout/>
  //  )
  render(){
  return (
    
    <div className="App">
      <Head />
      <Checkout
      addFun={this.addFun}
      subFun={this.subFun}
      // product=
      price="JOD 5.00"
      // count={this.state.counter1}
      source="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
      />
       <Checkout 
      addFun={this.addFun}
      subFun={this.subFun}
      product="Caesar Salad"
      price="JOD 9.00"
      // count={this.state.counter1 }
      source="https://www.jessicagavin.com/wp-content/uploads/2019/07/caesar-salad-10-1200.jpg"
      /> 
      <Checkout 
      addFun={this.addFun}
      subFun={this.subFun}
      product="Fried Chicken "
      price="JOD 12.00"
      // count={this.state.counter1 }
      source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*"
      />
      <Total total={this.state.counter1}/>
    </div>
  );
}}

export default App;
 //kill port command on git bash 
 //npx kill-port 3000 8080 4200
