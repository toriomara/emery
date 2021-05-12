import styled from 'styled-components'

export const ContactsIconsWrapper = styled.ul`
  display: flex;
`

export const Icon = styled.p`
  flex: 1 1 150px; /*  Stretching: */
  //flex: 0 1 150px; /*  No stretching: */
  margin: 10px 25px;
  font-size: 25px;
  color: #e20001;

  &:hover {
    color: #6b6b6b;
    transition: 0.3s ease-out;
  }
`

