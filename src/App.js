import React, { Component } from 'react';

import cronometroImg from './assets/cronometro.png';

import './index.css';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      time: 0,
      btnStatus: 'START'
    };
    
    this.timer = null;
    this.timeStart = this.timeStart.bind(this);
    this.timeReset = this.timeReset.bind(this);
  }

  timeStart(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.btnStatus = 'START';
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.time += 0.1;
        this.setState(state);
      },100)
      this.state.btnStatus = 'PAUSE';
    }

    this.setState(state);
  }

  timeReset(){
    
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.time = 0;
    state.btnStatus = 'START'

    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img className="imgCronometro" src={cronometroImg} alt="cronometro"/>
        <a className="timer">{this.state.time.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="btn" onClick={this.timeStart}>{this.state.btnStatus}</a>
          <a className="btn" onClick={this.timeReset}>RESET</a>
        </div>
      </div>
    );
  }
}

export default App;