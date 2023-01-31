import React from 'react'
import Header from '../components/Header'
import Redline from '../components/RedLine'

const AddEditblog = ({user ,  handleLogout}) => {
  return (
    <div className='create-page'>
      <Header user={user} handleLogout = {handleLogout}/>
      <Redline name="NFRedline"/>
      <div className='create-main'>
        <h3>Write something you lil shit nigger</h3>
      </div>

      <Redline name="NFRedline"/>
    </div>
  )
}

export default AddEditblog