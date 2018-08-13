// @flow
import React, { Component } from "react"

class Liquid extends Component {
  constructor(props) {
    super(props)
    this.state = { temperature: 21 }
  }

  setTemperature = ev => {
    this.setState({ temperature: ev.target.value })
  }
  calculateStateOfMatter(input: Number, boiling: Number, freezing: Number) {
    if (input > freezing && input < boiling) {
      return "liquid"
    } else if (input <= freezing) {
      return "solid"
    } else if (input >= boiling && input <= 9000) {
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
        <h2>{this.props.config.name} Calculator</h2>
        Temp:{" "}
        <input
          type="text"
          onChange={this.setTemperature}
          value={this.state.temperature}
        />
        at {this.state.temperature} degrees centigrade, {this.props.config.name}{" "}
        is considered{" "}
        {this.calculateStateOfMatter(
          this.state.temperature,
          this.props.config.boiling,
          this.props.config.freezing
        )}
      </div>
    )
  }
}

export default Liquid
