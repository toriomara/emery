import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const Wrapper = styled.div`
  display: inline-flex;
  margin: 30px 0 30px;
`

const IconItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 15%;
  padding: 15px;
  margin: 10px;
  width: 50px;
  height: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  //cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  //border: 1px solid rgba(0, 0, 0, .2);
  //align-items: center;
  //flex-direction: column;
  
  :hover {
	  box-shadow: 0 15px 20px rgba(57,56,56,0.4);
  }
  
  &#facebook:hover {
    background-color: #3b5999;
  }  
  
  &#twitter:hover {
    background-color: #46c1f6;
  }  
  
  &#instagram:hover {
    background-color: #e1306c;
  }  
  
  &#youtube:hover {
    background-color: #de463b;
  }
  
  a {
    text-decoration: none;
    color: var(--darkgrey)
  }
`

const Tooltip = styled.div`
  position: absolute;
  top: 0;
  font-size: 14px;
  background-color: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  &:before {
      position: absolute;
      content: '';
      height: 8px;
      width: 8px;
      background-color: #ffffff;
      bottom: -3px;
      left: 50%;
      transform: translate(-50%) rotate(45deg);
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      
      ${IconItem}#facebook:hover & {
        background-color: #3b5999;
      }
      
      ${IconItem}#twitter:hover & {
        background-color: #46c1f6;
      }    
       
      ${IconItem}#instagram:hover & {
        background-color: #e1306c;
      }
      
      ${IconItem}#youtube:hover & {
        background-color: #de463b;
      }
  }
        
  ${IconItem}:hover & {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
    color: #ffffff;   
  }
  
   ${IconItem}#facebook:hover & {
     background-color: #3b5999;
   } 
    
   ${IconItem}#twitter:hover & {
     background-color: #46c1f6;
   }   

   ${IconItem}#instagram:hover & {
     background-color: #e1306c;
   } 
    
   ${IconItem}#youtube:hover & {
     background-color: #de463b;
   }  
`

const Icon = styled.span`
  display: inline-flex;
  font-size: 20px;
    
    ${IconItem}:hover & {
      color: #ffffff;
      transition: 0.3s ease-out;
    }
`

const ContactIcons = () => {
	return (
		<Wrapper>
			<IconItem id='facebook'>
				<Tooltip>Facebook</Tooltip>
				<a href="https://wwww.ya.ru">
					<Icon>
						<FaFacebookF/>
					</Icon>
				</a>
			</IconItem>
			<IconItem id='twitter'>
				<Tooltip>Twitter</Tooltip>
				<a href="https://www.twitter.com">
					<Icon>
						<FaTwitter/>
					</Icon>
				</a>
			</IconItem>
			<IconItem id='instagram'>
				<Tooltip>Instagram</Tooltip>
				<a href="https://www.instagram.com">
					<Icon>
						<AiFillInstagram/>
					</Icon>
				</a>
			</IconItem>
			<IconItem id='youtube'>
				<Tooltip>Youtube</Tooltip>
				<a href="https://www.youtube.com">
					<Icon>
						<FaYoutube/>
					</Icon>
				</a>
			</IconItem>
		</Wrapper>
	)
}

export default ContactIcons
