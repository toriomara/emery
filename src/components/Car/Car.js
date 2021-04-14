import React from 'react'
import styled from 'styled-components'
import {ButtonPrimary} from '../Buttons/ButtonPrimary'
import {ButtonSecondary} from '../Buttons/ButtonSecondary'

const StyledCar = styled.div`
  display: grid;
  place-items: center;
  gap: 30px;
  padding: 40px 140px 40px;
  border-top: 1px solid #d0d1d2;

  & h2 {
    font-weight: 500;
    font-size: xx-large;
    margin-top: -180px;
    text-transform: capitalize;
  }
`

const Image = styled.div`
  & img {
    object-fit: contain;
    width: 1000px;
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: -40px;

  & button {
    width: 230px;
    margin-bottom: 30px;
  }
`

const Info = styled.div`
  max-width: 450px;
  text-align: center;
  font-size: medium;
  line-height: 1.5;
  font-weight: 500;
  color: #393c41;

  & span {
    color: #3e6be2;
    cursor: pointer;
  }
`

const Car = ({imgSrc, model, testDrive}) => {
    return (
        <StyledCar>
            <Image>
                <img src={imgSrc} alt="model"/>
            </Image>
            <h2>{model}</h2>
            <Actions>
                <ButtonPrimary name='order'/>
                {testDrive && <ButtonSecondary name='test drive'/>}
            </Actions>
            <Info>
                <span>Request a Call</span> to speak with a product specialist, value
                your trade-in or apply for leasing
            </Info>
        </StyledCar>
    );
};

export default Car;