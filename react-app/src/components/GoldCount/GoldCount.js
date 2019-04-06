import React from "react"
import "./GoldCount.css"

class GoldCount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="flex-container">
        <div>
          <div className="count-container">
            <h4>Component 0</h4>
            <hr />
            <h3>Gold Count:</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default GoldCount
