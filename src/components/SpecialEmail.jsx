import React from 'react'
import './specialEmail.css'

function SpecialEmail() {
  return (
    <div className="SpecialEmail">
        <div>
            <h2>S P E C I A L S &nbsp;S I G N&nbsp; U P</h2>
        </div>
        <div>
            <input type="email" placeholder='Email' />
        </div>
        <div>
            <button className="submitBtn">Sign Up</button>
        </div>
    </div>
  )
}

export default SpecialEmail