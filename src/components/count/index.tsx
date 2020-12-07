import * as React from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "store"
import { setCount } from "./store/actions"

const Counter: React.FC = () => {
  const dispatch = useDispatch()
  const listState = useSelector((state: RootStore) => state.list);
  const setNumber = (number: string) => {
    dispatch(setCount(number))
  }
  return (
    <div>
      <h3>列表长度：{listState.articles.length}</h3>
      <input type="number" onChange={e => setNumber(e.target.value)} />
    </div>
  )
}

export default Counter