import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Redline from '../components/RedLine'
import AuthRedirectText from "../components/AuthRedirectText";
import AuthHeader from "../components/AuthHeader";
import AuthButton from "../components/AuthButton";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import '../style/style.scss'

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = ({setUser}) => {

  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);
  const { email, password, firstName, lastName, confirmPassword } = state;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();

    console.log("button works")
    console.log(signUp)
    console.log(email)
    console.log(password)

    if (!signUp) { //sign in
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(user);
        navigate('/')
      }else {
        return toast.error("All fields are mandatory to fill");
      }
    }else {//sign up
      if (password !== confirmPassword) {
        return toast.error("Password don't match");
      }
      if (firstName && lastName && email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: `${firstName} ${lastName}` });
        // setActive("home");
      } else {
        return toast.error("All fields are mandatory to fill");
      }
    }
    navigate("/");
  };

  return (
    <main className="auth-outer-container" >
    <Redline/>
      <div className="auth-main">
          <div className="auth-container">
            <AuthHeader signUp={signUp} />
            <div className="auth-body">
                <form className="auth-form" onSubmit={handleAuth}>
                  {signUp && (
                    <>
                        <div className="input-div">
                            <input
                                type="text"
                                className="form-control input-text-box"
                                placeholder="First Name"
                                name="firstName"
                                value={firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-div">
                            <input
                                type="text"
                                className="form-control input-text-box"
                                placeholder="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </>
                  )}
                  <div className="input-div">
                      <input
                          type="email"
                          className="form-control input-text-box"
                          placeholder="Email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                      />
                  </div>
                  <div className="input-div">
                      <input
                          type="password"
                          className="form-control input-text-box"
                          placeholder="Password"
                          name="password"
                          value={password}
                          onChange={handleChange}
                      />
                  </div>
                  {signUp && (
                      <div className="input-div">
                          <input
                          type="password"
                          className="form-control input-text-box"
                          placeholder="Confirm Password"
                          name="confirmPassword"
                          value={confirmPassword}
                          onChange={handleChange}
                          />
                      </div>
                  )}
                  <AuthButton signUp={signUp}/>
                </form>
                <AuthRedirectText setSignUp={setSignUp} signUp = {signUp}/>
            </div>
          </div>
      </div>
    <Redline/>
    </main>
  )
}

export default Auth