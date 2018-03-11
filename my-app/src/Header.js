import React from 'react';
import './Header.css';

const Header = () => {
    return (
    	<div>
    	<h1>Roomie</h1>
    	<h2>
          <button class="btn home">home</button>
          <button class="btn schedule">schedule</button>
          <button class="btn tasks">tasks</button>
          <button class="btn finances">finances</button>
          <button class="btn profile">profile</button>
        </h2>
        </div>);
  }


export default Header;