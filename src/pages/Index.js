import React, { useEffect } from 'react'
import Main from '../layouts/Main'
import styled from 'styled-components'
import Clock from '../components/currentTime'
import { useTranslation } from 'react-i18next'
import cookies from 'jscookie'
import { languages } from '../i18n'

const TemporaryBlock = styled.div`
  position: relative;
  justify-content: center;
	margin: 50px 0;
`

const Header = styled.h1`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 35px;
`

const Text = styled.p`
  position: relative;
  display: flex;
  margin: 15px 0 0 0;
  justify-content: center;
  font-size: 20px;
`

const StyledClock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 25px;
`

const Colors = styled.section`
  margin: 50px 0 50px;
  position: relative;
  display: grid;
  width: 100%;
  height: 50vh;
  grid-template-columns: repeat(5, 1fr);
`

const Blue = styled.div`
  display: grid;
  background-color: var(--blue)
`

const Light = styled.div`
  display: grid;
  background-color: var(--light)
`

const Grey = styled.div`
  display: grid;
  background-color: var(--grey)
`

const Dark = styled.div`
  display: grid;
  background-color: var(--dark)
`

const Red = styled.div`
  display: grid;
  background-color: var(--red)
`

const Index = () => {
	const currentLanguageCode = cookies.get('i18next') || 'ru'
	const currentLanguage = languages.find(l => l.code === currentLanguageCode)
	const { t } = useTranslation()

	const releaseDate = new Date('2021-09-30')
	const timeDifference = new Date() - releaseDate
	const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

	useEffect(() => {
		document.body.dir = currentLanguage.dir || 'ltr'
		document.title = t('exp.app_title')
	}, [currentLanguage, t])

	return (
		<Main>
			<TemporaryBlock>
				<Header>
					{t('exp.welcome_message')}
				</Header>
				<Text>
					{t('exp.days_since_release', { number_of_days })}
				</Text>

				<StyledClock>
					<Clock/>
				</StyledClock>

				<Colors>
					<Blue/>
					<Light/>
					<Red/>
					<Grey/>
					<Dark/>
				</Colors>
			</TemporaryBlock>

		</Main>
	)
}

export default Index
