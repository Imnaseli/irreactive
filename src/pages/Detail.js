import { getDoc , doc} from 'firebase/firestore'
import React,{useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Redline from '../components/RedLine'
import {database} from '../firebase'
import '../style/style.scss'

const Detail = () => {
    const [blog , setBlog] = useState()
    const {id} = useParams()

  useEffect(() => {
    id && getblogdetail()
  }, [id ])// eslint-disable-line react-hooks/exhaustive-deps 

  const getblogdetail = async () => {
    const docref = doc(database, "blogs", id )
    const blogdetail = await getDoc(docref) 
    setBlog(blogdetail.data())
    }

  return (
    <div className='blogdetailcontainer'>
        <Redline name="Redline"/>
          <div className='blogdetailmain'>
            <div className='blogdetailimg'><img className="blogdetailpicture" alt=" " src={blog?.imgUrl} /></div> 
            <div className='blogdetaildate'><p>{blog?.timestamp.toDate().toDateString()}</p></div>
            <div className='blogdetailtitle'><h1>{blog?.title}</h1></div>
            <div className='blogdetaildescription'><p>{blog?.description}</p></div>
            <div className='blogdetailauthor'><p>- {blog?.author}</p></div>
          </div>
    </div>
  )
}

export default Detail
