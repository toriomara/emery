import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import ContactIcons from '../../Contacts/ContactIcons'
import Logo from '../../Logo'
import { Link } from 'react-router-dom'
import NewsLetter from './NewsLetter'
import Answer from './Answer'
import { OutlinedButton } from '../../Buttons/MainButton'
import { useClickOutside } from '../../../utils/useClickOutside'
//import {DataProvider} from './DataContext'

import {AiOutlineMail} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {IoIosPhonePortrait} from 'react-icons/io'
import {FiPhone} from 'react-icons/fi'

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
    //line-height: 1.4;
  }
`

const Footer = () => {

	const [modalOpen, setModalOpen] = useState(false)
	const handleClick = () => {
		setModalOpen(!modalOpen)
	}

	const domNode = useClickOutside(() => {
		setModalOpen(false)
	})

/*	let childRef = useRef(null)

	useEffect(() => {
		console.log(childRef.current, 'footer.js')
	}, [])*/

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
						<Link to='/'>О нас</Link>
						<Link to='/about'>Для прессы</Link>
						<Link to='/about'>Новости</Link>
						<Link to='/about'>Дилерам</Link>
						<Link to='/about'>Дистрибьюция</Link>
					</ItemContent>
				</Item>
				<Item>
					<ItemTitle>
						Информация
					</ItemTitle>
					<ItemContent>
						<Link to='/about'>Документация</Link>
						<Link to='/about'>Поддержка</Link>
						<Link to='/about'>Условия</Link>
						<Link to='/about'>Технология</Link>
						<Link to='/about'>Доставка</Link>
					</ItemContent>
				</Item>
				<Item>
					<ItemTitle>
						Контакты
					</ItemTitle>
					<ItemContent>
						<Link to='/about'><GoLocation/>400019, Россия, г. Волгоград, ул. Слесарная, 103</Link>
						<Link to='/about'><AiOutlineMail/>korund@korund.ru</Link>
						<Link to='/about'><IoIosPhonePortrait/>+7 988 988-51-11</Link>
						<Link to='/about'><FiPhone/>+7 (8442) 46-95-86</Link>
						<Link to='/about'>+7 (8442) 50-40-76</Link>
						<Link to='/about'>+7 (8442) 41-23-45</Link>
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
						modalOpen && (
						/*<DataProvider>*/
						<Answer setOpenModal={setModalOpen} forwardRef={domNode}
						/>
						/*</DataProvider>*/
						)
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
