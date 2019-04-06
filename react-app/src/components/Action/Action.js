import React from "react"
import "./Action.css"

class Action extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="action-container">
        <h4>Component 1</h4>
        <hr />
        <div className="flex-container">
          <div className="farm">
            <h3>Farm</h3>
            <p>Earns 2 - 5 Gold</p>
            <br />
            <button>
              <h4>Farm!</h4>
            </button>
          </div>
          <div className="cave">
            <h3>Cave</h3>
            <p>Earns 5 - 10 Gold</p>
            <br />
            <button>
              <h4>Cave!</h4>
            </button>
          </div>
          <div className="casino">
            <h3>Casino</h3>
            <p>
              Earns up to or Lose up to 100 <br /> Gold
            </p>
            <button>
              <h4>Casino!</h4>
            </button>
          </div>
          <div className="house">
            <h3>House</h3>
            <p>Earns 7 - 15 Gold</p>
            <br />
            <button>
              <h4>Hotel!</h4>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Action
