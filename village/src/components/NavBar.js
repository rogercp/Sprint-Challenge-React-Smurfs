import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'



const Navigation=styled.div`
  display:flex;
  justify-content:space-around;

`
const NavRight=styled.div`
  display:flex;
  justify-content:space-between;

  h3{
    margin-right:10px;

    .activeNavButton{
      color:red;
    }
  }

`




const NavBar = props => {
    return (
      <Navigation>
      <h2>Smurfs</h2>
      <NavRight >
      <h3>
            <NavLink style={{ textDecoration: 'none' }} exact to="/"activeClassName="activeNavButton">
                Home
            </NavLink>
      </h3>

      <h3>
            <NavLink style={{ textDecoration: 'none' }} to="/smurf-form" activeClassName="activeNavButton">
              Add Smurf
            </NavLink>
      </h3>
      
      
      </NavRight>
      </Navigation>
    );
  };
  
  
  
  export default NavBar;
  
  