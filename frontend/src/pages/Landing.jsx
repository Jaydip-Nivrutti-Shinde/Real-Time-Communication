import React from 'react'

export default function Landing() {
  return (
    <div className='landingPageContainer'>
      <nav>
        <div className='navHeader'><h2>Video Call</h2></div>
        <div className='navList'>
          <p>join as guest</p>
          <p>register</p>
          <div role='button'>
            <p>Login</p>
          </div>
        </div>
      </nav>
      <div className="landingMainContainer">
        <div>
          <h1><span style={{color:"orange"}}>Connect</span> With you loved ones</h1>
          <p>Cover a disctnace by apna video call</p>
          <div role='button'>
            <Link to="/home">Get Started</Link>
          </div>
        </div>
        <div>
          <img src="" alt="Video Call" />
        </div>
      </div>
    </div>
  )
}
