import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../assets/pizza.jpeg"
import "../styles/Home.css"

const Home = () => {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer'>
            <h1>
              Pizzeria, Resto&Bar 
            </h1>
            <p>Authentic italian Pizza</p>
            <Link to="/menu">
            <button>Order Now</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Home