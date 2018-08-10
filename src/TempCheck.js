import React, { Component } from "react"

class TempCheck extends Component {
  constructor(props) {
    super(props)
    this.state = { temperature: 50 }
  }

  setTemperature = ev => {
    this.setState({ temperature: ev.target.value })
  }
  calculateStateOfMatter(input) {
    if (input > 0 && input < 100) {
      return "liquid"
    } else if (input <= 0) {
      return "solid"
    } else if (input >= 100 && input <= 9000) {
      return "gas"
    } else if (input > 9000) {
      return "OVER NINE THOUSAND!!!!!!!1111!!!!SHIFTONE!!!!"
    } else {
      return "INVALID TEMPERATURE"
    }
  }

  render() {
    return (
      <div>
        <h2>Water Calculator</h2>
        Temp:{" "}
        <input
          type="text"
          onChange={this.setTemperature}
          value={this.state.temperature}
        />
        at {this.state.temperature} degrees centigrade, water is considered{" "}
        {this.calculateStateOfMatter(this.state.temperature)}
      </div>
    )
  }
}

export default TempCheck
