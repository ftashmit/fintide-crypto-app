import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { CoinContext } from '../../context/coinContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)


  const currencyHandler = (event)=>{
    switch(event.target.value){
        case "usd": {
            setCurrency({name: "usd", symbol: "$"})
            break;
        }
        
        case "eur": {
            setCurrency({name: "eur", symbol: "€"})
            break;
        }
        
        case "inr": {
            setCurrency({name: "inr", symbol: "₹"})
            break;
        }
        default :{
            setCurrency({name: "usd", symbol: "$"})
            break;
        }
        

    }
  }

  return (
    <div className='navbar'>
        <Link to={`/`}>
        <img src={logo} alt="" className='logo
        '/>
        </Link>
        <ul>
            <Link to={`/`}><li>Home</li></Link>
            <Link to={`/`}><li>Features</li></Link><Link to={`/`}><li>Pricing</li></Link><Link to={`/`}><li>Blog</li></Link>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign Up <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                {/* <img src={arrow} alt="" className='signup-arrow' /> */}
            </button>
        </div>
    </div>
  )
}

export default Navbar