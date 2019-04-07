import React from "react"
import GoldCount from "../components/GoldCount/GoldCount"
import Action from "../components/Action/Action"
import Results from "../components/Results/Results"
import { connect } from "react-redux"
import axios from "axios"
import { updateResultsListStateAction } from "../redux"

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.getResults()
  }

  getResults = () => {
    axios
      .get("http://localhost:4000/api/results")
      .then((serverResultsGetResponse) => {
        console.log("serverResultsGetResponse", serverResultsGetResponse.data)

        this.props.updateResultsListState(serverResultsGetResponse.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  randomlyGenerateGold = (min, max) => {
    const goldGenerated = Math.floor(Math.random() * (max - min + 1)) + min

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
  cumulativeGoldCount: state.cumulativeGoldCount,
  resultsList: state.resultsList
})

const mapDispatchToProps = (dispatch) => ({
  updateResultsListState: (data) => dispatch(updateResultsListStateAction(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
