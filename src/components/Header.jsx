import React from 'react'
import Logoimg from '../assets/logo.jpg';
import Button from './UI/Button';

function Header() {

  return  <header id='main-header'>
  
     <div id='title'>
      <img src={Logoimg} alt='A resturent App'/>
      <h1>React Food Order App</h1>
    </div>
    <nav>
      <Button>Cart(0)</Button>
    </nav>
      
    </header>
}

export default Header
