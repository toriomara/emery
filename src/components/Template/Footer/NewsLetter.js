import React, {useState} from 'react'
import styled from 'styled-components'
import NewsLetterPopUp from './NewsLetterPopUp'

const NewsletterContainer = styled.div`
  display: grid;
  align-items: center;
  background: #f6f7fb;
  padding: 40px 20px;
  justify-content: center
`

const TextMuted = styled.div`
  text-align: justify;
  justify-self: center;

`

const NewsletterTitle = styled.h5`
  font-size: 2rem;
  justify-self: center;
`

export const NewsLetterButton = styled.button`
  color: ${props => props.color || 'white'};
  padding: 12px 12px;
  margin: 30px 0 0 0;
  background-color: #e20001;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: all 0.4s;
  letter-spacing: 1px;
  
    &:hover {
    background-color: #171a20;
    color: white;
  }
`

const NewsLetter = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const handleClick = () => {setModalOpen(!modalOpen)}

    return (
        <NewsletterContainer>
            <NewsletterTitle>Что нового?</NewsletterTitle>
            <TextMuted>
                Подпишитесь на наши новости и получайте свежие предложения!
            </TextMuted>
            <NewsLetterButton
                onClick={handleClick}
                type="button"
            >
                Подписаться
            </NewsLetterButton>
            {
                modalOpen && <NewsLetterPopUp setOpenModal={setModalOpen}/>
            }
        </NewsletterContainer>
    )
}

export default NewsLetter
