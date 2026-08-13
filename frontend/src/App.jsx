import { useState } from 'react'
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import './App.css'
import LandingPage from './pages/Landing.jsx';
// import Authentication from './pages/Authentication.jsx';
// import { AuthProvider } from './contexts/authContext.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <h1>Hello</h1> */}
      <Router>
          <Routes>
            <Route path="/" element={<LandingPage></LandingPage>}> </Route>
            {/* <Route path="/" element={<Landing></Landing>}> </Route>
            <Route path="/auth" element={<Authentication></Authentication>}> </Route>
            <Route path="/:url" element={<VideoMeetComponent></VideoMeetComponent>}> </Route> */}
          </Routes>
      </Router>
    </>
  )
}

export default App
