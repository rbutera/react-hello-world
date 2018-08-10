import React, { Component } from "react"
import "./App.css"
import Hello from "./Hello"
import ListOfNames from "./ListOfNames"
import TempCheck from "./TempCheck"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
        <ListOfNames />
        <TempCheck />
      </div>
    )
  }
}

export default App
