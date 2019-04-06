import React from "react"
import "./Results.css"

class Results extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="flex-container">
        <div>
          <div className="results-container">
            <h4>Component 2</h4>
            <hr />
            <ul>
              <li>You've earned 5 gold at the Farm</li>
              <li>You've lost 25 gold at the Caino</li>
              <li>You've earned 7 gold at the Cave</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Results
