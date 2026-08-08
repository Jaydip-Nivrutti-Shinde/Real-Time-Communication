import { useState } from 'react'
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/home" element={}> </Route> */}
          <Route path="/" element={<Landing></Landing>}> </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
