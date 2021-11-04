import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import img from '../../../img/email.web'
import { Input } from './Input'
import { PrimaryButton } from '../../Buttons/MainButton'
import { useClickOutside } from '../../../utils/useClickOutside'

const SharedStyles = css`
  background-color: #fff;
  padding: 8px;
  border-radius: 5px;
`

const PopupWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100vw;
  background: rgba( 0, 0, 0, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  transition: 1s;
  z-index: 1;
`

const PopupContent = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: 'title title'
                       'img contentText';
  grid-template-rows: 1fr 5fr;
  grid-template-columns: 2fr 3fr;
  background-color: white;
  width: 600px;
  height: 600px;
  padding: 32px;
  line-height: 1.5;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.185);
  border-radius: 12px;
`

const Icon = styled.div`
    position: absolute;
    top: -15px;
    right: -15px;
    background-color: white;
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    font-size: 1.7rem;
    color: #2E4052;
    border-radius: 50%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.164);
    cursor: pointer;
`

const Img = styled.div`
  display: grid;
  justify-content:center;
  //top: 100px;
  grid-area: img;
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 130px;
`

const ContentText = styled.div`
  display: grid;
  grid-area: contentText;
  margin: 10px;
  justify-content: center;
  align-items: center;
  color: #1A2250;
`

const Title = styled.h2`
  color: #1A2250;
  text-align: center;
  grid-area: title;
  font-size: 1.5rem;
`

const Text = styled.h3`
  text-align: center;
  font-size: 18px;
`

const Bullet = styled.ul`
  font-size: 14px;
  margin: 20px 0 20px;
`

const BulletItem = styled.li`
  margin: 5px 0;
  line-height: 1.1;
  font-size: 14px;
`

const StyledForm = styled.form`
  display: grid;
  justify-content: center;
  align-items: center;
`

const FormGroup = styled.div`
  position: relative;
  margin-bottom: 16px;
`

const StyledLabel = styled.label`
  padding: 0 0 30px 0;
  transition: .3s;
  margin: 0 0 20px 0;
`

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  border: 2px solid #DADDEC;
  font-size: 1rem;
  color: #656880;
  align-self: center;
  transition: 0.3s;
  
  &:focus {
    border: 2px #222222 solid;
    box-shadow: 0 10px 36px rgba(0, 0, 0, .15);
  }
  
  ${SharedStyles}
`

const TextDown = styled.span`
  display: block;
  text-align: center;
  margin: 20px 0 0;
  color: #abaebb;
  font-size: 13px;
`

const StyledError = styled.div`
  display: flex;
  color: red;
  font-weight: 500;
  margin: 0 0 40px 0;
`

const initialState = {
	name: '',
	email: '',
}

const NewsLetterPopUp = React.forwardRef(( props, ref ) => {

	const { setIsOpen, isOpen } = props

	const [state, setState] = useState(initialState)
	const [error, setError] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		//console.log('submitted!');
		//console.log(state);

		for (let key in state) {
			if (state[key] === '') {
				setError(`Пожалуйста, заполните поле ${key}`)
				return
			}
		}
		setError('')
		// const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		// const test = regex.test(state.email);
		// console.log(test);
		console.log('Succeeded!!!')
	}

	const handleInput = e => {
		const inputName = e.currentTarget.name
		const value = e.currentTarget.value
		setState(prev => ({ ...prev, [inputName]: value }))
	}

	return (
		<PopupWindow ref={ref}>
			<PopupContent>
				<Icon>
					<FaTimes
						name='Close'
						onClick={() => {
							setIsOpen(!setIsOpen)
						}}/>
				</Icon>
				<Title>Хотите получать новости?</Title>
				<Img/>
				<ContentText>
					<Text>Подпишитесь на еженедельную новостную рассылку</Text>
					<Bullet>
						<BulletItem>
							Присылаем только одно письмо в неделю
						</BulletItem>
						<BulletItem>
							Не передаём ваши данные третьим лицам
						</BulletItem>
					</Bullet>
					<StyledForm onSubmit={handleSubmit}>
						<FormGroup>
							<StyledLabel htmlFor="Имя">Имя</StyledLabel>
							<Input
								type="text"
								name="Имя"
								value={state.name}
								onChange={handleInput}/>
						</FormGroup>
						<FormGroup>
							<StyledLabel htmlFor="email">Email</StyledLabel>
							<Input
								type="email"
								name="email"
								value={state.email}
								onChange={handleInput}/>
						</FormGroup>
						{error && (
							<StyledError>
								<p>{error}</p>
							</StyledError>
						)}
						<PrimaryButton margin='0' type="submit" name='Подписаться'>Подписаться</PrimaryButton>
					</StyledForm>
					<TextDown>Мы не рассылаем спам</TextDown>
				</ContentText>
			</PopupContent>
		</PopupWindow>
	)
})

export default NewsLetterPopUp
