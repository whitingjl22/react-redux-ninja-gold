import { createStore } from "redux"

//ACTIONS
export const updateResultsListStateAction = (data) => ({
  type: "UPDATE_RESULTS_LIST_STATE",
  payload: data
})
export const updateCumulativeGoldCountStateAction = (data) => ({
  type: "UPDATE_CUMULATIVE_GOLD_COUNT_STATE",
  payload: data
})

///REDUCERS
export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_RESULTS_LIST_STATE":
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- UPDATE_RESULTS_LIST_STATE | state: ", state)
      console.log(" -- REDUCER -- UPDATE_RESULTS_LIST_STATE | action", action)
      return {
        ...state,
        resultsList: action.payload
      }
    case "UPDATE_CUMULATIVE_GOLD_COUNT_STATE":
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- UPDATE_CUMULATIVE_GOLD_COUNT_STATE | state: ", state)
      console.log(" -- REDUCER -- UPDATE_CUMULATIVE_GOLD_COUNT_STATE | action", action)
      return {
        ...state,
        cumulativeGoldCount: action.payload[0].cumulativeGoldCount
      }

    default:
      return state
  }
}

// Initial State
// Minimal representation of the data in the app
const initialState = {
  cumulativeGoldCount: 0,
  resultsList: []
}

// STORE -- store.js
export function configureStore(initialState = initialState) {
  // initialState = initialState | {}
  const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  console.log(store)
  return store
}

export const store = configureStore()
