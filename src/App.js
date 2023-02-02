import Home from './pages/Home'
import { useState, useEffect } from "react";
import Detail from './pages/Detail'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Auth from './pages/Auth'
import { auth } from "./firebase";
import 'react-toastify/dist/ReactToastify.css'
import { signOut } from "firebase/auth";
import AddEditblog from './pages/AddEditblog'
import {Routes , Route , useNavigate} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import './style/style.scss';

function App() {

  const [user, setUser] = useState("me");
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //soon to change ------------------------------- Remove this var dec, it makes it logged in after every reload
      // authUser = 1

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      //console.log('handlelog')
      navigate("/authentication");
    });
  };


  return (
    <div className="App">
        <ToastContainer/>
        <Routes>
         <Route path='/' element = {<Home user = {user} handleLogout = {handleLogout}/>}/>
         <Route path='/detail/:id' element = {<Detail />}/>
         <Route path='/about' element = {<About user = {user} handleLogout = {handleLogout}/>}/>
         <Route path='/authentication' element = {<Auth setUser={setUser} />}/>
         <Route path='/edit/:id' element = {<AddEditblog />}/>
         <Route path='/create' element = {<AddEditblog  user = {user} handleLogout = {handleLogout} />}/>
         <Route path='*' element = {<NotFound />}/>
        </Routes>
      
    </div>
  );
}

export default App;
