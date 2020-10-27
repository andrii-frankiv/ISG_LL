import React from 'react';
//import { render } from "@testing-library/react";
import './App.css';
//import CarInfo from './components/CarInfo';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      counter: Number('0'),
    };
  }

  plus1 = () =>{
    this.setState({
      counter: this.state.counter+=1,
    })
  }
  plus3 = () =>{
    this.setState({
      counter: this.state.counter+=3,
    })
  }
  plus7 = () =>{
    this.setState({
      counter: this.state.counter+=7,
    })
  }

  render() {
    return (
      <div className='container'>
        {/* <CarInfo /> */}
        <div className='content'>
        <h1 className="counter">Counter: {this.state.counter}</h1>
          <div className='row-item'>
            <button className='item-btn' onClick={this.plus1}>Plus 1</button>
            <button className='item-btn' onClick={this.plus3}>Plus 3</button>
            <button className='item-btn' onClick={this.plus7}>Plus 7</button>
          </div>
        </div>
      </div>
    )
  }
}
 
export default App;