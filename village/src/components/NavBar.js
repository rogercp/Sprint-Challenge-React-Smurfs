import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'



const Navigation=




const NavBar = props => {
    return (
      <div>
      <h2>SmurfCity</h2>
      <div >
      <h3>
            <NavLink to="/">
                Home
            </NavLink>
      </h3>

      <h3>
            <NavLink to="/smurf-form">
              Add Smurf
            </NavLink>
      </h3>
      
      
      </div>
      </div>
    );
  };
  
  
  
  export default NavBar;
  
  