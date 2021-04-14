import React from 'react'
import {GoLocation} from "react-icons/go"
import {AiOutlineMail} from "react-icons/ai"
import {FiPhone} from "react-icons/fi"
import {IoIosPhonePortrait} from "react-icons/io"
import {
    FaFacebook,
    FaInstagramSquare,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'

import {
    FooterContainer,
    SocialIcons,
    SocialIconLink,
    FooterWrapper,
    Title,
    Logo,
    BlockTitle,
    BlockItem,
    ContactItem,
    Social,
    SocialWrapper,
    Desc,
    TitleContent,
    LogoB,
    BlocksContent,
    CompanyB,
    InfoB,
    ConnectB,
    ContactB,
    Blocks,
    Copyright,
    ButtonFooter, SocialContent
} from './Footer.elements'
import {TopLogo} from "../Preheader/Preheader"
import {NavLink} from "react-router-dom"

function Footer() {
    return (
        <FooterWrapper>
            <FooterContainer>
                <Title>
                    <TitleContent>
                        Производство сверхтонких теплоизоляционных материалов нового поколения
                    </TitleContent>
                </Title>
                <Blocks>
                    <BlocksContent>
                        <LogoB>
                            <Logo to='/'>
                                <TopLogo/>
                            </Logo>
                            <Desc>
                                Производство сверхтонких теплоизоляционных материалов нового поколения
                                <span>НПО "Фулерен"</span>
                            </Desc>
                        </LogoB>
                        <CompanyB>
                            <BlockTitle>
                                Компания
                            </BlockTitle>
                            <BlockItem>
                                <NavLink to='/'>
                                    О нас
                                </NavLink>
                            </BlockItem>
                            <BlockItem>
                                <NavLink to='/'>
                                    Для прессы
                                </NavLink>
                            </BlockItem>
                            <BlockItem>
                                <NavLink to='/'>
                                    Новости
                                </NavLink>
                            </BlockItem>
                            <BlockItem>
                                <NavLink to='/'>
                                    Дилерам
                                </NavLink>
                            </BlockItem>
                            <BlockItem>
                                <NavLink to='/'>
                                    Дистрибьюция
                                </NavLink>
                            </BlockItem>
                        </CompanyB>
                        <InfoB>
                            <BlockTitle>
                                Информация
                            </BlockTitle>
                            <BlockItem>
                                <NavLink to='/'>
                                    Документация
                                </NavLink>
                            </BlockItem>
                            <BlockItem>
                                <NavLink to='/'>
                                    Поддержка
                                </NavLink>
                            </BlockItem>
                            <BlockItem>
                                <NavLink to='/'>
                                    Доставка
                                </NavLink>
                            </BlockItem>
                            <BlockItem>
                                <NavLink to='/'>
                                    Условия
                                </NavLink>
                            </BlockItem>
                            <BlockItem>
                                <NavLink to='/'>
                                    Технология
                                </NavLink>
                            </BlockItem>
                        </InfoB>
                        <ContactB>
                            <BlockTitle>
                                Контакты
                            </BlockTitle>
                            <ContactItem>
                                <GoLocation/>
                                <span>400019, Россия, г. Волгоград, ул. Слесарная, 103</span>
                            </ContactItem>
                            <ContactItem>
                                <AiOutlineMail/>
                                <span>korund@korund.ru</span>
                            </ContactItem>
                            <ContactItem>
                                <IoIosPhonePortrait/>
                                <span>+7 988 988-51-11</span>
                            </ContactItem>
                            <ContactItem>
                                <FiPhone/>
                                <span>+7 (8442) 46-95-86</span>
                            </ContactItem>
                            <ContactItem>
                                <span>+7 (8442) 50-40-76</span>
                            </ContactItem>
                            <ContactItem>
                                <span>+7 (8442) 41-23-45</span>
                            </ContactItem>
                        </ContactB>
                        <ConnectB>
                            <BlockTitle>
                                Обратная связь
                            </BlockTitle>
                            <Desc>
                                Ответим на все ваши вопросы
                            </Desc>
                            <ButtonFooter name='Задать вопрос'>
                                Задать вопрос
                            </ButtonFooter>
                        </ConnectB>
                    </BlocksContent>
                </Blocks>
                <Social>
                    <SocialContent>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagramSquare/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                        <Copyright>
                            © НПО "Фулерен", 2021
                        </Copyright>
                    </SocialContent>
                </Social>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer
