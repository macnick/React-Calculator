import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
/* eslint-disable no-unused-vars */
import calculate from '../logic/calculate';
import '../styles/main.css';

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    let { total, next, operation } = this.state;
    this.setState({ calculate({ total, next, operation }, btnName) })
  }

  render() {
    return (< div className="app" >
      <Display total={this.state.total} />
      <ButtonPanel onClick={this.handleClick} />
    </div >
    );

  }
}

export default App;