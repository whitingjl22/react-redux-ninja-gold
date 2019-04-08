import React from "react"
import GoldCount from "../components/GoldCount/GoldCount"
import Action from "../components/Action/Action"
import Results from "../components/Results/Results"
import { connect } from "react-redux"
import axios from "axios"
import { getResultsStateAction } from "../redux"

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.getResults()
  }

  // GET Results List
  getResults = () => {
    axios
      .get("http://localhost:4000/api/results")
      .then((serverResultsGetResponse) => {
        console.log("serverResultsGetResponse", serverResultsGetResponse.data)

        this.props.getResultsState(serverResultsGetResponse.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  randomlyGenerateGold = (min, max, type) => {
    const goldGenerated = Math.floor(Math.random() * (max - min + 1)) + min
    const actionType = type

    console.log("actionType", actionType)

    axios
      .put("http://localhost:4000/api/results", {
        goldEarned: goldGenerated,
        actionType: actionType
      })
      .then((serverResultsPutResponse) => {
        console.log("TEST_serverResultsPutResponse", serverResultsPutResponse.data)

        // logic to send to Redux
      })
      .catch((error) => {
        console.log(error)
      })

    console.log("goldGenerated", goldGenerated)
  }

  render() {
    return (
      <div>
        <GoldCount />
        <Action randomlyGenerateGoldFunc={this.randomlyGenerateGold} />
        <Results />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  // cumulativeGoldCount: state.cumulativeGoldCount,
  // resultsList: state.resultsList
})

const mapDispatchToProps = (dispatch) => ({
  getResultsState: (data) => dispatch(getResultsStateAction(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
