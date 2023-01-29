import React from 'react'
import '../style/style.scss'

const AuthRedirectText = ({signUp , setSignUp}) => {
  return (
    <div className='auth-redirect-container'>
        {!signUp ? (
        <>
            <div className="auth-redirect-div">
                <p className="auth-redirect-p">
                    Don't have an account ?&nbsp;
                        <span
                        className="auth-redirect-text-donthaveanacc"
                        onClick={() => setSignUp(true)}
                        >
                        Sign Up
                        </span>
                </p>
            </div>
        </>
        ) : (
            <>
                <div className="auth-redirect-div">
                    <p className="auth-redirect-p">
                        Already have an account?&nbsp;
                            <span 
                            className="auth-redirect-text-alreadyhaveanacc"
                            onClick={() => setSignUp(false)}>
                            Sign In
                            </span>
                    </p>
                </div>
            </>
        )}
    </div>
  )
}

export default AuthRedirectText