import React from "react";
import './Home.css'
import { useNavigate } from "react-router-dom";
import { Animate } from 'react-simple-animate'



const Home = () => {

   const navigate = useNavigate();


   const handleNavigateToHirePage = () => {
      navigate('/contact')
   }




   return (
      <section id="home" className="home">
         <div className="home__text-wrapper">
            <h1>
               Hello i am Bekhruz
               <br />
               Front End Developer
            </h1>
         </div>
         <Animate
         play
         duration={1}
         delay={0.2}
         start={{
            transform : 'translateY(550px)'
         }}
         end={{
            transform : 'translateX(0px)'
         }}
         
         >
            <div className="home__hire-me">
               <button onClick={handleNavigateToHirePage}>Hire Me</button>
            </div>
         </Animate>


      </section>
   )
}

export default Home;