import { React, useState } from 'react'
// import HeroSection from './components/HeroSection'
import './App.css'
import { Link } from 'react-router-dom'
// import background from './img/background-image.jpg'
const Home = () => {


  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return <>
    <nav className='navbar'>

      <div className='container'>

        <div className='logo'>

          <span><h1>TSS</h1></span>
          

        </div>

        <div className='menu-icon' onClick={handleShowNavbar} >

          <ion-icon name="menu-outline"></ion-icon>

        </div>

        <div className={`nav-element ${showNavbar && 'active'} `} >
          <ul >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/create-employee'>Employee</Link>
            </li> 
            <li>
              <Link to='/'>Services</Link>
            </li>
            <li>
              <Link to='/'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    

     {/* ---------------------------
       hero section 
       ------------------------------ */}

<div className="hero-section">
      <div className="container">
        <div className="row ml-3">
          {/* content column */}
          <div className="col m-auto col-md-6">
            <h3>"Culture is what motivates and retains talented employees."</h3>~Betty Thompson
            
            
          </div>
          {/* image column */}
          <div className="col m-auto">
            <img 
            alt=""
             height={500}
             
             />

          </div>
        </div>
      </div>
    </div>





    {/*----------------------------
    footer section
    ------------------------------   */}

    <div className="footer-section">
      <div className="footer-container m-auto">
        <div className="row ml-5">
          <div className="col mb-3">
              <h3 className='pt-4'>Solution</h3>            
              <h6 className='ml-4 pt-3'>Policies & Procedures Management </h6>
              <br />
              <h6 className='ml-4'>Health & Safety Training </h6>
              <br />
              <h6 className='ml-4'>ISO 27001, COBIT & ITIL Compliance with SharePoint</h6>
       
          </div>

          <div className="col mb-3">
              <h3 className='pt-4'>Support</h3>            
              <h6 className='ml-4 pt-3'>Knowledgebase </h6>
              <br />
              <h6 className='ml-4'>Documentation center </h6>
              <br />
              <h6 className='ml-4'>Support plans</h6>

          </div>

          <div className="col mb-3">
              <h3 className='pt-4'>Contact</h3>            
              <h6 className='ml-4 pt-3'>Gmail 📧</h6>
              <br />
              <h6 className='ml-4'>Phone 📲</h6>
              <br />
              <h6 className='ml-4'>Twitter </h6>
              <br />           
          </div>
        </div>
      </div>

    </div>
  </>


}

export default Home