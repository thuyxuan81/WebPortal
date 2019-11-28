import React from 'react'

const Landing = () => {
    return (
      <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Welcome!</h1>
          <p className="lead">
            Please Log In
          </p>
          <div className="buttons">

            <a href="login.html" className="btn btn-light">Login</a>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Landing

