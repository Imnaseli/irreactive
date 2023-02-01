import React from 'react'
import Header from '../components/Header'
import Redline from '../components/RedLine'
import '../style/style.scss'

const Home = ({user ,  handleLogout}) => {
  return (
    <>
      <Header user={user} handleLogout = {handleLogout}/>
      <Redline name={"Redline"}/>
      {/* <h1>Irreactive</h1> */}
    </>
  )
}

export default Home