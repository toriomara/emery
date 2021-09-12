import React from 'react'
import styled, {css} from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {Input} from './Input'

//https://github.com/weibenfalk/react-controlled-form/blob/master/src/App.js

const SharedStyles = css`
  background-color: #ffffff;
  padding: 8px;
  border-radius: 5px;
  display: block;
  width: 100%;
  height: 100%;
  margin: 4px 0 4px 0;
  border: 1px solid #a9aaad;
  font-size: 1rem;
  color: #656880;
  transition: 0.3s;
  
    &:focus {
      border: 1px #222222 solid;
      box-shadow: 0 10px 36px rgba(0,0,0,.15);
    }
`

const PopupWindow = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: rgba( 0, 0, 0, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const PopupContent = styled.div`
  display: grid;
  grid-template-areas: 'title title'
                       'img contentText';
  grid-template-rows: 1fr 5fr;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  width: 700px;
  height: 750px;
  position: relative;
  place-items: center;
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

const ContentText = styled.div`
    display: grid;
    grid-area: contentText;
    margin: 10px;
    justify-content: center;
`

const Title = styled.h2`
    display: grid;
    grid-area: title;
    font-size: 1.5rem;
    color: #1A2250;
`

const Text = styled.h2`
    display: grid;
    text-align: center;
    font-size: 18px;
    color: #3B4169;
    margin: 5px 0;
`

const StyledForm = styled.form`
  justify-content: center;
  align-items: center;
  position: relative;
`

const FormGroup = styled.div`
  margin: 20px 0 20px;
`

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${SharedStyles}
`

const StyledLabel = styled.label`
  margin: 20px 0 0 0;
`

const StyledSpan = styled.span`
  display: flex;
  font-size: 13px;
  margin-bottom: 20px;
  color: red;
`

const AnswerButton = styled.button`
      display: grid;
      width: 100%;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      padding: 7px 12px;
      border-radius: 3px;
      box-shadow: 0 5px 20px #89caff94;
      transition: box-shadow .3s ease-in-out;
      background-image: linear-gradient(to right, #FFCECD, #B65353);

    &:hover, 
    &:focus {
      box-shadow: none;
    }
`

const Answer = ({setOpenModal}) => {

    /*const {setValues, data} = useData()*/

    const schema = yup.object().shape({
        textMessage: yup
            .string()
            .required(),
        name: yup
            .string()
            .matches(/^([^0-9]*)$/, "Имя не должно содержать цифр")
            .required(),
        email: yup
            .string()
            .required()
            .email(),
        phone: yup
            .string()
            .matches(/^([^0-9]*)$/, "Номер телефона не должен содержать букв")
            .required("Поле НОМЕР ТЕЛЕФОНА должно быть заполнено"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        /*defaultValues: {textMessage: data.textMessage, name: data.name, email: data.email, phone: data.phone},*/
        mode: 'onTouched',
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <PopupWindow>
            <PopupContent>
                <Icon>
                    <FaTimes
                        name='Close'
                        onClick={() => {
                            setOpenModal(!setOpenModal)
                        }}
                    />
                </Icon>
                <Title>Остались вопросы?</Title>
                <ContentText>
                    <Text>Напишите ваш вопрос и мы на него ответим</Text>
                    <StyledForm onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <StyledLabel htmlFor="textMessage">Текст сообщения</StyledLabel>
                            <StyledTextArea
                                placeholder="Введите текст сообщения"
                                {...register('textMessage')}
                                type="text"
                                name="textMessage"
                            />
                            {errors.textMessage &&
                            <StyledSpan>Поле СООБЩЕНИЕ должно быть заполнено</StyledSpan>}
                        </FormGroup>

                        <FormGroup>
                            <StyledLabel htmlFor='user'>Имя</StyledLabel>
                            <Input
                                placeholder="Иван"
                                {...register('name')}
                                type="text"
                                name="name"
                            />
                            {errors.name &&
                            <StyledSpan>Поле ИМЯ должно быть заполнено</StyledSpan>}
                        </FormGroup>

                        <FormGroup>
                            <StyledLabel htmlFor='email'>Email</StyledLabel>
                            <Input
                                placeholder="ivan@email.com"
                                {...register('email')}
                                type="email"
                                name="email"
                            />
                            {errors.email?.type === 'required' &&
                            <StyledSpan>Поле EMAIL должно быть заполнено</StyledSpan>}
                            {errors.email?.type === 'email' &&
                            <StyledSpan>Введите правильный email</StyledSpan>}
                        </FormGroup>

                        <FormGroup>
                            <StyledLabel htmlFor='email'>Телефон</StyledLabel>
                            <Input
                                placeholder="+7 900 9876 54 32"
                                {...register('phone')}
                                type="tel"
                                name="phone"
                            />
                            {errors.phone?.type === 'required' &&
                            <StyledSpan>Поле ТЕЛЕФОН должно быть заполнено</StyledSpan>}

                        </FormGroup>
                        <AnswerButton type="submit">Отправить</AnswerButton>
                    </StyledForm>
                </ContentText>
            </PopupContent>
        </PopupWindow>
    )
}

export default Answer