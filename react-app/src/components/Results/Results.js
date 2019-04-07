import React from "react"
import "./Results.css"
import { connect } from "react-redux"

class Results extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log("RESULTS PAGE PROPS:", this.props)
    return (
      <div className="flex-container">
        <div>
          <div className="results-container">
            <h4>Component 2</h4>
            <hr />
            <ul>
              {this.props.resultsList.map((result, index) => {
                if (result.type === "Casino") {
                  return (
                    <li key={index}>
                      You've lost {result.goldGenerated} gold at the {result.type}
                    </li>
                  )
                } else
                  return (
                    <li key={index}>
                      You've earned {result.goldGenerated} gold at the {result.type}
                    </li>
                  )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cumulativeGoldCount: state.cumulativeGoldCount,
  resultsList: state.resultsList
})

const mapDispatchToProps = (dispatch) => ({
  // Not Needed For This Component
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)
