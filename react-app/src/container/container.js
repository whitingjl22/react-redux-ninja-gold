import React from "react"
import GoldCount from "../components/GoldCount/GoldCount"
import Action from "../components/Action/Action"
import Results from "../components/Results/Results"

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <GoldCount />
        <Action />
        <Results />
      </div>
    )
  }
}

export default Container
