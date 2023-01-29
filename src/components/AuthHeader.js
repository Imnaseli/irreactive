import React from 'react'

const AuthHeader = ({signUp}) => {
  return (
    <div className="auth-heading-container">
    <h1 className="auth-heading">
      {!signUp ? "Sign-In" : "Sign-Up"}
    </h1>
  </div>
  )
}

export default AuthHeader