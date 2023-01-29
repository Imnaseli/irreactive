import React from 'react'
import '../style/style.scss'

const AuthHeader = ({signUp}) => {
  return (
    <div className="auth-heading-container">
    <h1 className="auth-heading">
      {!signUp ? "Welcome Back!" : "Welcome!"}
    </h1>
  </div>
  )
}

export default AuthHeader