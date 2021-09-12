import React, {useState} from 'react'
import styled from 'styled-components'
import NewsLetterPopUp from './NewsLetterPopUp'
import {PrimaryButton} from '../../Buttons/MainButton'


const NewsletterContainer = styled.div`
  display: grid;
  align-items: center;
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

const NewsLetter = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const handleClick = () => {setModalOpen(!modalOpen)}

    return (
        <NewsletterContainer>
            <NewsletterTitle>Что нового?</NewsletterTitle>
            <TextMuted>
                Подпишитесь на наши новости и получайте свежие предложения!
            </TextMuted>
            <PrimaryButton
                onClick={handleClick}
                type="button"
                name='Подписаться'

            />
            {
                modalOpen && <NewsLetterPopUp setOpenModal={setModalOpen}/>
            }
        </NewsletterContainer>
    )
}

export default NewsLetter
