import React from 'react'

const AuthRedirectText = ({signUp , setSignUp}) => {
  return (
    <div>
        {!signUp ? (
        <>
            <div className="text-center justify-content-center mt-2 pt-2">
                <p className="small fw-bold mt-2 pt-1 mb-0">
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
                <div className="text-center justify-content-center mt-2 pt-2">
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                        Already have an account ?&nbsp;
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