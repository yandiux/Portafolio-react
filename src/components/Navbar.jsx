import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
      
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">Acerca de mi</a>
          <a onClick={handleClick} href="#h">Portafolio</a>
          <a onClick={handleClick} href="#h">Contacto</a>
          <a onClick={handleClick} href="#h">Contacto</a>
          
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`


  
  @media (max-width: 767px) { 
   
  background:rgba(0,0,0,0.0);
 
 }

  padding: 1.5%;
  padding-right: 3rem;
  margin-top: 2%;
  width: 42%;
  border-top-right-radius: 42px;
  background-color: #01C3B1;
  display: flex;
  
  // justify-content: space-between;
  
 
  

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    margin-top:0.5rem;
    
    
    

  }
  .links{
    
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    
    
    
    
    a{
      color: white;
      font-size: 2rem;
      display: block;
      
    }

    @media (min-width: 576px) { 
      width: 100%;
      a {
        
        margin:0.2rem;
        
        font-size: 0.3rem;
      }

    }



    
    @media(min-width: 768px){
      width: 100%;
      
      position: initial;
      margin: 0;
      padding:0;
      a{
        font-size: 0.7rem;  <------
        color: white;
        display: inline;

        
      }
      display: block;
    }

    @media (min-width: 1400px) {
      width: 100%; 
      a {
        
        font-size: 1rem;
      }


      
    }
  }
  .links.active{
    width: 100%;
    display: flex;
    flex-direction:column;
   
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 5%;
    left: 5%;
    right: 0;
    text-align: center;
    a {
      
      font-size: 2rem;
     
      color: #fff;

  

    }

    
    
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
      
      
    }

    
  }
`

const BgDiv = styled.div`
  
  position: absolute;
  
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 30% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

