import { CountAction, CHANGE_COUNT } from "./types"

export function setCount(count: string) {
  const action: CountAction = {
    type: CHANGE_COUNT,
    count,
  }

  return action
}
