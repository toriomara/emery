import React from 'react'
import styled from 'styled-components'
import ContactIcons from '../../Contacts/ContactIcons'
import Logo from '../../Logo'
import {Link} from 'react-router-dom'
import {Icon} from '../../Contacts/ContactsIcons.element'
import {selectCompany, selectContacts, selectInfo} from '../../../features/footerSlice'
import {useSelector} from 'react-redux'

const FooterWrapper = styled.div`
  margin-top: auto;
  display: grid;
  gap: 10px;
`

const Item = styled.div`
  padding-left: 20px;
`

const MiddleFooter = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  color: #393c41;
  padding-bottom: 30px;
  border-bottom: 1px solid #afb0b1;
`

const DownFooter = styled.div`
  margin: 10px 0 10px;
  display: flex;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
`

const IconFooter = styled(Icon)`
  display: inline-block;
  font-size: 14px;
  margin: 5px 10px 5px 0;
  color: black;

  ${Icon}
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

const ButtonFooter = styled.button`
  background-color: transparent;
  border: 3px solid #171a20;
  width: 160px;
  margin-top: 20px;
  padding: 7px 12px;
  border-radius: 3rem;
  text-transform: uppercase;
  color: #171a20;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s ease-in-out;
  outline: none;

  &:hover {
    background-color: #171a20;
    color: white;
  }
`

export const ItemTitle = styled.h2`
  padding-bottom: 5px;

  & a {
    color: #393c41;
  }
`

export const ItemContent = styled.ul`

  & a {
    line-height: 1.4;
    text-decoration: none;
    color: #393c41;
  }
`

const Footer = () => {

    const company = useSelector(selectCompany)
    const info = useSelector(selectInfo)
    const contacts = useSelector(selectContacts)

    return (
        <FooterWrapper>
            <MiddleFooter>
                <Item>
                    <Logo/>
                    <Desc>
                        Производство сверхтонких теплоизоляционных материалов нового поколения
                        <span>НПО "Фулерен", 2021</span>
                    </Desc>
                </Item>
                <Item>
                    <ItemTitle>
                        {company.filter((l) => l.index).map((l) => (
                            <Link key={l.label} to={l.path}>{l.label}</Link>
                        ))}
                    </ItemTitle>
                    <ItemContent>
                        {company.filter((l) => !l.index).map((l) => (
                            <li key={l.label}>
                                <Link to={l.path}>{l.label}</Link>
                            </li>
                        ))}
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
                                <IconFooter>{l.icon}</IconFooter>
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
                    <ButtonFooter name='Задать вопрос'>
                        Задать вопрос
                    </ButtonFooter>
                </Item>
            </MiddleFooter>
            <DownFooter>
                <ContactIcons/>
            </DownFooter>
        </FooterWrapper>
    );
};

export default Footer;
