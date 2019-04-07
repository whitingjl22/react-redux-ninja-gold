const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const PORT = 4000
const cors = require("cors")
const axios = require("axios")
const path = require("path")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + "./../react-app/build/"))

// GET Results
app.get("/api/results", (request, response) => {
  axios
    .get("http://5c992ab94236560014393239.mockapi.io/results")
    .then((mockResultsGetResponse) => {
      return response.json(mockResultsGetResponse.data)
    })
    .catch((error) => {
      console.log(error)
    })
})

// GET Gold
app.get("/api/gold", (request, response) => {
  axios
    .get("http://5c992ab94236560014393239.mockapi.io/gold")
    .then((mockGoldGetResponse) => {
      return response.json(mockGoldGetResponse.data)
    })
    .catch((error) => {
      console.log(error)
    })
})

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname + "./../react-app/build/index.html"))
})

app.listen(PORT, function() {
  console.log("Server is running on Port:", PORT)
})
