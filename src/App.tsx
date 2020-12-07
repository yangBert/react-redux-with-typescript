import * as React from "react"
import List from "@/components/list";
import Counter from "@/components/count"

const App: React.FC = () => {

  return (
    <main>
      <h1>react redux with typescript</h1>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
        <List />
        <Counter />
      </div>
    </main>
  )
}

export default App