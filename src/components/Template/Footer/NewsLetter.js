import React, { useState } from 'react'
import styled from 'styled-components'
import NewsLetterPopUp from './NewsLetterPopUp'
import { PrimaryButton } from '../../Buttons/MainButton'
import { useTranslation } from 'react-i18next'
import { useClickOutside } from '../../../utils/useClickOutside'

const NewsletterContainer = styled.div`
  display: grid;
  align-items: center;
  margin: 100px 0;
  justify-content: center;
  gap: 15px;
`

const TextMuted = styled.div`
  text-align: justify;
  justify-self: center;
`

const NewsletterTitle = styled.h5`
  font-size: 30px;
  justify-self: center;
`

const NewsLetter = React.forwardRef(( props, ref ) => {
	const { t } = useTranslation()

	const [isOpen, setIsOpen] = useState(false)
	const handleClick = () => {setIsOpen(!isOpen)}

	const news = useClickOutside(() => {
		setIsOpen(false)
	})

	return (
		<NewsletterContainer>
			<NewsletterTitle>{t('footer.footer_news_title')}</NewsletterTitle>
			<TextMuted>
				{t('footer.footer_news_subtitle')}
			</TextMuted>
			<PrimaryButton
				onClick={handleClick}
				type="button"
				name={t('footer.footer_news_button')}
			/>
			{
				isOpen && <NewsLetterPopUp forwarderRef={news} setIsOpen={setIsOpen}/>
			}
		</NewsletterContainer>
	)
})

export default NewsLetter
