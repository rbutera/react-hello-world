import React, { Component } from "react"
import "./App.css"
import Hello from "./Hello"
import ListOfNames from "./ListOfNames"
import Liquid from "./Liquid"

var water = {
  boiling: 100,
  freezing: 0,
  name: "Water"
}

var ethanol = { boiling: 78.37, freezing: -114.1, name: "Ethanol" }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
        <ListOfNames />
        <Liquid config={ethanol} />
        <Liquid config={water} />
      </div>
    )
  }
}

export default App
