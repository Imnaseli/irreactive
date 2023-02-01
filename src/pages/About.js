import React from 'react'
import Header from '../components/Header'
import Redline from '../components/RedLine'

const About = ({user ,  handleLogout}) => {
  return (
    <>
      <Header user={user} handleLogout = {handleLogout}/>
      <Redline name={"Redline"}/>
      <div>About</div>
    </>
  )
}

export default About