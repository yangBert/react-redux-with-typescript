import * as actionTypes from "./types"
import { Count, CountAction } from "./types"
const initialState: Count = {
  count: '',
}

const reducer = (
  state: Count = initialState,
  action: CountAction
): Count => {
  switch (action.type) {
    case actionTypes.CHANGE_COUNT:
      const newCount: Count = {
        count: action.count
      }
      return newCount
    default:
      return state
  }
}

export default reducer