import styled from 'styled-components'
import {ContentContainer} from "../globalStyles"

export const FooterWrapper = styled.div`
  background-color: #E8E8E8;
`

export const FooterContainer = styled.div`
  display: grid;
`

export const Title = styled.div`
  grid-column: 1/6;
  background-color: #606672;
`

export const TitleContent = styled(ContentContainer)`
  color: #E8E8E8;
  justify-content: center;
  align-items: center;
  padding: 25px 50px 25px 50px;
  font-size: 20px;
  ${ContentContainer}
`

export const Blocks = styled.div`
  grid-column: 1/6;
  background-color: #E8E8E8;
  margin: 0 auto;
`

export const BlocksContent = styled(ContentContainer)`
  display: grid;
  //grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
  grid-template-areas: 'logob companyb infob contactb connectb';
  background-color: #E8E8E8;
  padding-top: 24px;
  padding-bottom: 24px;
  gap: 10px;
  ${ContentContainer}
`

const BlockWrapper = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  font-size: 15px;
  color: #393c41;
`

export const LogoB = styled(BlockWrapper)`
  grid-area: logob;
  color: #393c41;
  ${BlockWrapper}
`

export const Logo = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
`

export const Desc = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #393c41;

  & span {
    margin-top: 20px;
    display: flex;
  }
`

export const CompanyB = styled(BlockWrapper)`
  grid-area: companyb;
  ${BlockWrapper}
`

export const InfoB = styled(BlockWrapper)`
  grid-area: infob;
  ${BlockWrapper}
`

export const ContactB = styled(BlockWrapper)`
  grid-area: contactb;
  ${BlockWrapper}
`

export const ConnectB = styled(BlockWrapper)`
  grid-area: connectb;
  ${BlockWrapper}
`

export const BlockTitle = styled.h2`
  margin-bottom: 16px;
`

export const BlockItem = styled.div`
  line-height: 1.8;

  & a {
    text-decoration: none;
    color: #393c41;
  }
`

export const ContactItem = styled.div`
  line-height: 1.7;

  span {
    padding-left: 10px;
  }
`

export const Social = styled.div`
  grid-column: 1/6;
  background-color: #606672;
`

export const SocialContent = styled(ContentContainer)`
  display: grid;
  gap: 10px;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 15px 50px 15px 50px;
  ${ContentContainer}
`

export const SocialIcons = styled.div`
  display: flex;
  color: white;
  gap: 40px;
`

export const SocialIconLink = styled.a`
  font-size: 24px;
  align-items: center;
  color: white;

  &:hover {
    color: red;
    transition: 0.3s ease-out;
  }
`

export const Copyright = styled.span`
  display: flex;
  color: white;
  justify-content: flex-end;
`

export const ButtonFooter = styled.button`
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