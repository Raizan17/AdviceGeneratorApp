import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

export default class App extends Component {

  // state is a global object that contains all of the important things relative to that component for this example it is the App component
  state = { advice: ''};

  // this is a component lifecycle function there are many such as render, componentDidMount, etc, they are all run in correct order when a component is run. LIKE UNITY START AND UPDATE FUNCTIONs
  // fetching API is called :
  componentDidMount(){
    this.fetchAdvice();
  };

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        // destructuring: otherwise it would be console.log(response.data.slip.advice);
        const {advice} = response.data.slip;
        console.log(advice);
        // set the state property of advice to the advice destructured above
        this.setState({advice: advice})
      })
      .catch((error) => {
        console.log(error);
      })
  }



  render() {
    // destructuring advice from state
    const {advice} = this.state;
    return (
      <div className="app">
          <div className="card">
              <h1 className='heading'>{advice}</h1>
              <button className='button' onClick={this.fetchAdvice}>
                  <span>GIVE ME ADVICE!</span>
              </button>
          </div>
      </div>
    )
  }
}


