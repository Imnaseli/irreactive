import Home from './pages/Home'
import Detail from './pages/Detail'
import About from './pages/About'
import NotFound from './pages/NotFound'
//import Auth from './pages/Auth'
import 'react-toastify/dist/ReactToastify.css'
import AddEditblog from './pages/AddEditblog'
import {Routes , Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import './style/style.scss';

function App() {
  return (
    <div className="App">
        <ToastContainer/>
        <Routes>
         <Route path='/' element = {<Home />}/>
         <Route path='/detail/:id' element = {<Detail />}/>
         <Route path='/about' element = {<About />}/>
         {/* <Route path='/authentication' element = {<Auth />}/> */}
         <Route path='/edit/:id' element = {<AddEditblog />}/>
         <Route path='/create' element = {<AddEditblog />}/>
         <Route path='*' element = {<NotFound />}/>
        </Routes>
      
    </div>
  );
}

export default App;
