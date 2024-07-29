import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Skills from './Pages/Skills/Skills'
import Contact from './Pages/Contact/Contact'
import Resume from './Pages/Resume/Resume'
import Navbar from './Components/navbar/Navbar.jsx'
import Particle from './utils.js/particles.jsx'






function App() {


  const location = useLocation();
  console.log(location);


  const renderParticleJsInHomePage = location.pathname === "/";
 


  return (
    <div className='App'>


      {renderParticleJsInHomePage && (
        <Particle/>
      )}
     

   
     
      
     


      <Navbar/>

    <div className="App__main-page-content">
    <Routes>
    <Route index path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/resume' element={<Resume/>}/>
     </Routes>
    </div>


  
    </div>
  )
}

export default App