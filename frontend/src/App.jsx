import { useState } from 'react'
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import './App.css'
import Landing from './pages/Landing.jsx';
import Authentication from './pages/Authentication.jsx';
import { AuthProvider } from './contexts/authContext.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1>Hello</h1>
      <Router>
        <AuthProvider>
          <Routes>
            {/* <Route path="/home" element={}> </Route> */}
            <Route path="/" element={<Landing></Landing>}> </Route>
            <Route path="/auth" element={<Authentication></Authentication>}> </Route>
            <Route path="/:url" element={<VideoMeetComponent></VideoMeetComponent>}> </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
