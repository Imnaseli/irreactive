import React , {useEffect , useState} from 'react'
import Header from '../components/Header'
import { onSnapshot,collection } from 'firebase/firestore'
import Redline from '../components/RedLine'
import '../style/style.scss'
import BlogSection from '../components/BlogSection'
import { database } from '../firebase'

//the user and handleLogout is here for the header
const Home = ({user ,  handleLogout}) => {
  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
      const unsub = onSnapshot(
        collection(database, "blogs"),
        (snapshot) => {
          let list = []
          snapshot.docs.forEach((doc) => {
            list.push({id:doc.id , ...doc.data()})
          })
          setBlogs(list)
        },(error) => {
          console.log(error)
        }
        )
    return () => {
      unsub()      
    }
  } , [])

  return (
    <>
      <Header user={user} handleLogout = {handleLogout}/>
      <Redline name={"Redline"}/>

      <main className="home-container">
          <div className="home-main">
            <BlogSection blogs={blogs} user={user}/>
          </div>
      </main>
    </>
  )
}

export default Home
