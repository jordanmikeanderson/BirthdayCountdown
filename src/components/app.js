import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './changeDate';
import LargeText from './LargeText';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

renderItems = function() {
    if(this.state.active) {
      return [
        <Clock/>,
        ChangeDate('Change Date', () => this.setState({ active: false })),
        LargeText('04/03'),
        <label className='grid__remaining'>Remianing until your 22nd birthday</label>
      ]
    } else {
      return [
          <Picker/>,
          Button('Generate Countdown', () => this.setState({ active: true }))
      ]
    }
  }.bind(this)

  render() {
    return (
      <div className='grid'>
          <h1 className='grid__title'>Birthday Countdown</h1>

          <div className='grid__skew-dark-two'></div>
          <div className='grid__skew-dark-three'></div>

          <div className='grid__skew-light-one'></div>
          <div className='grid__skew-light-two'></div>
          <div className='grid__skew-light-three-box'></div>


          { this.renderItems() }
      </div>
    );
  }
}
