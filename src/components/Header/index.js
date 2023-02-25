import {Link} from "react-router-dom"
import './index.css'

const Header =()=>(
    <div className='header-container'>
       <div className='header'>
        <div className="logo-blog">
            <img  className="logo" src='https://assets.ccbp.in/frontend/react-js/wave-logo-img.png' alt='logo-img'/>
            <h1>WAVE</h1>
        </div>
        <div>
            <ul className="menu-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
               
            </ul>
        </div>
       </div>
    </div>
)
export default Header