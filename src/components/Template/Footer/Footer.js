import React, {useState} from 'react'
import styled from 'styled-components'
import ContactIcons from '../../Contacts/ContactIcons'
import Logo from '../../Logo'
import {Link} from 'react-router-dom'
import {selectCompany, selectContacts, selectInfo} from '../../../features/footerSlice'
import {useSelector} from 'react-redux'
import NewsLetter from './NewsLetter'
import Answer from './Answer'
import {OutlinedButton, PrimaryButton} from '../../Buttons/MainButton'
//import {DataProvider} from './DataContext'

const FooterWrapper = styled.div`
  margin-top: auto;
  display: grid;
  gap: 10px;
`

const MiddleFooter = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  color: var(--dark);
  padding-bottom: 30px;
`

const DownFooter = styled.div`
  margin: 10px 0 10px;
  display: flex;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
`

export const Desc = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #393c41;
  margin-right: 20px;

  & span {
    margin-top: 20px;
    display: flex;
  }
`

export const Item = styled.div`
  padding-left: 20px;
  color: var(--dark);
`

export const ItemTitle = styled.h2`
  padding-bottom: 5px;
  & a {
      color: var(--dark);
  }
`

export const ItemContent = styled.ul`
  display: grid;
  
  & Link {
    line-height: 1.4;
    text-decoration: none;
    color: var(--dark);
  }
`

const Footer = () => {

    const company = useSelector(selectCompany)
    const info = useSelector(selectInfo)
    const contacts = useSelector(selectContacts)

    const [modalOpen, setModalOpen] = useState(false)
    const handleClick = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <FooterWrapper>
            <NewsLetter/>
            <MiddleFooter>
                <Item>
                    <Logo/>
                    <Desc>
                        Производство сверхтонких теплоизоляционных материалов нового поколения
                        <span>© НПО "Фулерен", 2021</span>
                    </Desc>
                </Item>
                <Item>
                    <ItemTitle>
                        Компания
                    </ItemTitle>
                    <ItemContent>
                        <Link to='/about'>О нас</Link>
                        <Link to='/about'>Для прессы</Link>
                        <Link to='/about'>Новости</Link>
                        <Link to='/about'>Дилерам</Link>
                        <Link to='/about'>Дистрибьюция</Link>
                    </ItemContent>
                </Item>
                <Item>
                    <ItemTitle>
                        {info.filter((l) => l.index).map((l) => (
                            <Link key={l.label} to={l.path}>{l.label}</Link>
                        ))}
                    </ItemTitle>
                    <ItemContent>
                        {info.filter((l) => !l.index).map((l) => (
                            <li key={l.label}>
                                <Link to={l.path}>{l.label}</Link>
                            </li>
                        ))}
                    </ItemContent>
                </Item>
                <Item>
                    <ItemTitle>
                        {contacts.filter((l) => l.index).map((l) => (
                            <Link key={l.label} to={l.path}>{l.label}</Link>
                        ))}
                    </ItemTitle>
                    <ItemContent>
                        {contacts.filter((l) => !l.index).map((l) => (
                            <li key={l.label}>
                                <Link to={l.path}>{l.label}</Link>
                            </li>
                        ))}
                    </ItemContent>
                </Item>
                <Item>
                    <ItemTitle>
                        Обратная связь
                    </ItemTitle>
                    <Desc>
                        Ответим на все ваши вопросы
                    </Desc>
                    <OutlinedButton
                        name='ВОПРОС'
                        onClick={handleClick}
                        />

                    {
                        modalOpen &&
                        /*<DataProvider>*/
                        <Answer setOpenModal={setModalOpen}/>
                        /*</DataProvider>*/
                    }

                </Item>
            </MiddleFooter>
            <DownFooter>
                <ContactIcons/>
            </DownFooter>
        </FooterWrapper>
    )
}

export default Footer
