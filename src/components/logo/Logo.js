import React from 'react';
import Tilt from 'react-tilt';
import logo from './search.png';
import './logo.css'

function Logo() {
	return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 150, width: 150 }} >
        <img className="Tilt-inner pa3" alt='logo' src={logo} height = '125px' width='125px'></img>
      </Tilt>
    </div>
	)
}

export default Logo;