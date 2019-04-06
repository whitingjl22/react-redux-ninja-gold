import React from "react"
import "./Action.css"

class Action extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="flex-container">
        <div>
          <div className="action-container">
            <h4>Component 1</h4>
            <hr />
            <li>Farm</li>
            <p>Earns 2 - 5 Gold</p>
            <button>Farm!</button>
            <li>Cave</li>
            <p>Earns 5 - 10 Gold</p>
            <button>Cave!</button>
            <li>Casino</li>
            <p>Earns up to or Lose up to 100 Gold</p>
            <button>Casino!</button>
            <li>House</li>
            <p>Earns 7 - 15 Gold</p>
            <button>Hotel!</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Action
