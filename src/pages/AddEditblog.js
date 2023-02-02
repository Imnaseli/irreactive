import React from 'react'
import {useState , useEffect} from 'react'
import Header from '../components/Header'
import Redline from '../components/RedLine'
//import ReactTagInput from '@pathofdev/react-tag-input'
import { TagsInput } from "react-tag-input-component"
import {storage , database} from '../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { addDoc,collection, serverTimestamp } from 'firebase/firestore'

const initialState = {
  title : "",
  tags : [],
  description:"",
  //imgUrl will be added when a file is added
}


const AddEditblog = ({user ,  handleLogout}) => {

  const [form, setForm] = useState(initialState)
  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(null)
  const {title  , tags ,  description} = form

  useEffect(()=>{
      const uploadfile = () => {
        const storageref = ref (storage , file.name)
        const uploadTask  = uploadBytesResumable(storageref , file)

        uploadTask.on('state_changed', (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgress(progress)
          switch(snapshot.state){
            case 'paused':
              console.log('paused')
              break
            case 'running':
              console.log('running')
              break
            default:
              break
          }
        },(error) => {
          console.log(error)
        },() => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadurl) => {
            setForm((prev) => ({...prev, imgUrl:downloadurl}))
          })})}
      file && uploadfile()
      // console.log(form)
  } ,[file])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handletags = (tags) => {
    setForm({...form, tags})
    // console.log(tags)
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
      if(title && tags && description){
        try {
            await addDoc(collection(database, "blogs"),{
              ...form,
              timestamp:serverTimestamp(),
              author:user.displayName,
              userId:user.uid,
            }
            )
        } catch (error) {
          console.log(error)
        }
      }
  }


  return (
    <div className='create-page'>
      <Header user={user} handleLogout = {handleLogout}/>
      <Redline name="NFRedline"/>
        <div className='create-main'>
          <div className='createheader'>
            <h2>Welcome {`${user?.displayName}`}, we are interested in what you have to say.</h2>
          </div>
          
          <div className='createformcontainer'>
              <div className='createform'>
                  <form onSubmit={handleSubmit}>

                    <div className="create-input-div">
                        <input
                            type="text"
                            className="form-control input-text-box"
                            placeholder="Title"
                            name="title"
                            value={title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="create-input-div">
                      {/* <ReactTagInput 
                      tags={tags} 
                      placeholder="Tags" 
                      onChange={handletags} /> */}

                      <TagsInput
                      value={tags}
                      onChange={handletags}
                      placeHolder="Tags"
                      />
                    </div>

                    <div className="create-input-div">
                        <textarea
                            type="text"
                            className="form-control input-text-box"
                            placeholder="Description"
                            name="description"
                            value={description}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="create-input-div">
                        <input
                            type="file"
                            className="form-control input-text-box"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>

                    <div className='create-button-div'>
                      <button className='create-button' type='submit' disabled = {progress !== null && progress < 100}>
                        Submit
                      </button>
                    </div>

                  </form>
              </div>
          </div>
        </div>
    </div>
  )
}

export default AddEditblog