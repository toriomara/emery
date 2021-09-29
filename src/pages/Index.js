import React, { useEffect } from 'react'
import Main from '../layouts/Main'
import styled from 'styled-components'
import Clock from '../components/currentTime'
import { useTranslation } from 'react-i18next'
import cookies from 'jscookie'
import { languages} from '../i18n'

const Header = styled.h1`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 25px;
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
  grid-template-columns: repeat(6, 1fr);
`

const Light = styled.div`
  display: grid;
  background-color: var(--light)
`

const Grey = styled.div`
  display: grid;
  background-color: var(--grey)
`

const DarkGrey = styled.div`
  display: grid;
  background-color: var(--darkgrey)
`
const Red = styled.div`
  display: grid;
  background-color: var(--red)
`

const DeepRed = styled.div`
  display: grid;
  background-color: var(--deepred)
`

const Dark = styled.div`
  display: grid;
  background-color: var(--dark)
`

const Index = () => {
  const currentLanguageCode = cookies.get('i18next') || 'ru'
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)
  const { t } = useTranslation()

  const releaseDate = new Date('2021-09-14')
  const timeDifference = new Date() - releaseDate
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

    return (
        <Main>
            <Header>
              ГЛАВНАЯ СТРАНИЦА!
            </Header>
          <StyledClock>
            <Clock/>
          </StyledClock>

          <h1>
            {t('welcome_message')}
          </h1>
          <p>
            {t('days_since_release', { number_of_days })}
          </p>

            <Colors>
                <Light/>
                <Grey/>
                <DarkGrey/>
                <Red/>
                <DeepRed/>
                <Dark/>
            </Colors>
        </Main>
    )
}

export default Index
