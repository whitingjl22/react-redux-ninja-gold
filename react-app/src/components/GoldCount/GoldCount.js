import React from "react"
import "./GoldCount.css"
import { connect } from "react-redux"

class GoldCount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log("GOLD COUNT PAGE PROPS:", this.props)
    return (
      <div className="flex-container">
        <div>
          <div className="count-container">
            <h4>Component 0</h4>
            <hr />
            <h3>Gold Count: {this.props.cumulativeGoldCount}</h3>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cumulativeGoldCount: state.cumulativeGoldCount
})

const mapDispatchToProps = (dispatch) => ({
  // Not Needed For This Component
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoldCount)
