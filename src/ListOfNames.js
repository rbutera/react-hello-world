import React, { Component } from "react"

class ListOfNames extends Component {
  render() {
    var input = ["Post Malone", "Drake"]
    var namesList = input.map((item, index) => <li key={index}>{item}</li>)
    return (
      <div>
        <h1>List of Artists producing fire rn:</h1>
        <ul>{namesList}</ul>
      </div>
    )
  }
}
export default ListOfNames
