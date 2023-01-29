import React from 'react'
import '../style/style.scss'

const AuthButton = ({signUp}) => {
  return (
    <div className="auth-button">
        <button
            className={`btn ${!signUp ? "btn-sign-in" : "btn-sign-up"}`}
            type="submit">

            {!signUp ? "Sign-in" : "Sign-up"}
        </button>
    </div>
  )
}

export default AuthButton