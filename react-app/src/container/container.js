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

  randomlyGenerateGold = (type) => {
    // const goldGenerated = Math.floor(Math.random() * (max - min + 1)) + min
    // let cumulativeGoldCount =
    let goldGenerated = null

    if (type === "Farm") {
      goldGenerated = Math.floor(Math.random() * (5 - 2 + 1)) + 2
    } else if (type === "Cave") {
      goldGenerated = Math.floor(Math.random() * (10 - 5 + 1)) + 5
    } else if (type === "Casino") {
      goldGenerated = Math.floor(Math.random() * (100 - -100 + 1)) + -100
    } else if (type === "House") {
      goldGenerated = Math.floor(Math.random() * (15 - 7 + 1)) + 7
    }

    // cumulativeGoldCount += goldGenerated

    // console.log("cumulativeGoldCount", cumulativeGoldCount)
    console.log("goldGenerated", goldGenerated)

    // axios.put("http://localhost:4000/api/results", {})
    // .then((serverResultsPutResponse) => {
    //   console.log("TEST_serverResultsPutResponse", serverResultsPutResponse.data)

    //   // this.props.updateCumulativeGoldCountState(serverGoldGetResponse.data)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
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
  cumulativeGoldCount: state.cumulativeGoldCount
  // resultsList: state.resultsList
})

const mapDispatchToProps = (dispatch) => ({
  getResultsState: (data) => dispatch(getResultsStateAction(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
