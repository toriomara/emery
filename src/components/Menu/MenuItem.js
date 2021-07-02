import styled from 'styled-components'

const StyledItem = styled.div`
  border-bottom: 1px solid #d0d1d2;
  text-align: left;
  cursor: pointer;
`

const StyledHeaders = styled.h4`
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding-bottom: 1rem;
    font-size: 1rem;
    padding-left: 0.7rem;
    cursor: pointer;
`

const MenuItem = ({title}) => {
    return (
        <StyledItem>
            <StyledHeaders>{title}</StyledHeaders>
        </StyledItem>
    )
}

export default MenuItem
