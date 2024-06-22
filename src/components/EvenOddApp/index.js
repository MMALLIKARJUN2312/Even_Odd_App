// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {

  state = {number: 0}

  onIncrement = () => {
    this.setState(previousState => ({
      number: previousState.number + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {number} = this.state
    const paragraphText = (number % 2 === 0) ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <h1 className="heading">Count {number}</h1>
        <p className="description">Count is {paragraphText}</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="warning">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
