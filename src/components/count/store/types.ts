export const CHANGE_COUNT = "CHANGE_COUNT"

export type Count = {
  count: string
}

export type CountAction = {
  type: typeof CHANGE_COUNT
  count: string
}

export type DispatchType = (args: CountAction) => CountAction