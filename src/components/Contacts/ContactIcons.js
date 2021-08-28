import React from 'react'
import {ContactsIconsWrapper} from './ContactsIcons.element'
//import {FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import styled from 'styled-components'

import {FaFacebookF} from 'react-icons/fa'


const Wrapper = styled.div`
  display: inline-flex;
  margin: 50px 0 50px;
`

const IconItem = styled.div`
  position: relative;
  display: flex;
  background-color: #ffffff;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  //flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
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
      content: "";
      height: 8px;
      width: 8px;
      background-color: #ffffff;
      bottom: -3px;
      left: 50%;
      transform: translate(-50%) rotate(45deg);
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
        
  ${IconItem}:hover & {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
    background-color: #3b5999;
    color: #ffffff;
  }
`

export const Icon = styled.span`
  display: inline-flex;
  font-size: 20px;
    
    ${IconItem}:hover & {
      color: #ffffff;
      transition: 0.3s ease-out;
       
        &{IconItem} {
          background-color: #3b5999;
        }
    }
`


const ContactIcons = () => {
    return (

        <Wrapper>
            <IconItem>
                <Tooltip>Facebook</Tooltip>
                <Icon>
                    <FaFacebookF className='facebook'/>
                </Icon>
            </IconItem>


            <IconItem>
                <div className="tooltip">Twitter</div>
                <span><i className="fab fa-twitter"></i></span>
            </IconItem>
            <IconItem>
                <div className="tooltip">Instagram</div>
                <span><i className="fab fa-instagram"></i></span>
            </IconItem>
            <IconItem>
                <div className="tooltip">Github</div>
                <span><i className="fab fa-github"></i></span>
            </IconItem>
            <IconItem>
                <div className="tooltip">Youtube</div>
                <span><i className="fab fa-youtube"></i></span>
            </IconItem>
        </Wrapper>

        //Wrapper = Wrapper
        //Icon = IconItem
        //tooltip = Tooltip
        //span = Icon

        /*<div className="icon youtube">
            <div className="tooltip">Youtube</div>
            <span><i className="fab fa-youtube"></i></span>
        </div>*/

        /*<div>
            <ContactsIconsWrapper>
                <a href='https://www.facebook.com/'>
                    <Icon>
                        <FaFacebook/>
                    </Icon>
                </a>
            </ContactsIconsWrapper>

            <ContactsIconsWrapper>
                <a href='https://www.instagram.com/'>
                    <Icon>
                        <AiFillInstagram/>
                    </Icon>
                </a>
            </ContactsIconsWrapper>

            <ContactsIconsWrapper>
                <a href='https://www.youtube.com/'>
                    <Icon>
                        <FaYoutube/>
                    </Icon>
                </a>
            </ContactsIconsWrapper>

            <ContactsIconsWrapper>
                <a href='https://twitter.com/home?lang=ru'>
                    <Icon>
                        <FaTwitter/>
                    </Icon>
                </a>
            </ContactsIconsWrapper>
        </div>*/
    )
}

export default ContactIcons
