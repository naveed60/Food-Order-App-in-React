import React from 'react'
import Logoimg from '../assets/logo.jpg';

function Header() {

  return  <header id='main-header'>
  
     <div id='title'>
      <img src={Logoimg} alt='A resturent App'/>
      <h1>React Food</h1>
    </div>
    <nav>
      <button>Cart(0)</button>
    </nav>
      
    </header>
}

export default Header
