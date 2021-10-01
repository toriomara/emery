import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const StyledPhone = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;
  font-family: inherit;
  font-size: 18px;
  
  a {
    text-decoration: none;
    color: var(--red);
    line-height: 1.5;
    
    :hover {
      transform: scale(1.05);
      transition: .3s ease;  
    }
  }
  
   @media screen and (max-width: 1550px) {
     font-size: 16px; 
   }

   @media screen and (max-width: 1501px) {
     font-size: 17px;
   }
         
   @media screen and (max-width: 1300px) {
      gap: 25px;
      font-size: 16px;
   }
   
`

const Phone = () => {
    return (
        <StyledPhone>
            <a href='tel:+78002347878'>8 800 234-78-78</a>
        </StyledPhone>
    )
}

export default Phone
