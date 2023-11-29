import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


function Navbar() {
   

    return (
        <>
        <NavbarContainer>
          <div className='brand'>
            Flame Kaiser
          </div>
                <ul Type='none'>    
                    <li><Link to={'/About'}>About</Link></li>
                    <li><Link to={'/ProducT'}>Services</Link></li>
                    <li><Link to={'/Contact'}>Contact</Link></li>
                    <li><Link to={'/'}>Home</Link></li>
                </ul>
        </NavbarContainer>
        </>
    );
}

const NavbarContainer = styled.div`
 display:flex;
 .brand{
     display:flex;
    width:25%;
    background-color:red;
    justify-content:center;
 }
 ul{
    flex:1;
    flex-direction:row-reverse;
    display:flex;
    margin:0%;
    background-color:green;

 }
 li{
    background-color:blue;
    padding:1vw;
    padding-right:2vw;
    padding-left:2vw;
    border:2px solid red;
 }
 li:hover{
    background-color:red;
 }
`;

export default Navbar;