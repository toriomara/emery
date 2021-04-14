import React from 'react'
import styled from 'styled-components'
import Navbar from "../Navbar/Navbar"
import {ContentContainer} from "../globalStyles";

const Screen = styled(ContentContainer)`
  display: grid;
  place-items: center;
  
  ${ContentContainer}
`

const Info = styled.div`
  position: relative;
  top: 40px;
  display: flex;
  flex-direction: column;
  height: 700px;
`

const Text = styled.div`
  text-align: center;
  flex: 10;

  & h1 {
    color: #393c41;
    font-weight: 500;
    font-size: 2.6rem;
  }

  & h4 {
    color: #5c5e62;
    font-weight: 400;
    font-size: 1rem;

    & span {
      /*padding-top: 1rem;*/
      padding-bottom: 0.15rem;
      //border-bottom: 1px solid black;
      color: #393c41;
      cursor: pointer;

      &:hover {
        border-bottom-width: 2px;
        color: black;
        transition: .3s ease linear;
      }
    }
  }
`

const Actions = styled.div`
  display: flex;
  margin-top: 330px;
  gap: 1.2rem;
`

export const Button = styled.button`
  cursor: pointer;
  border: none;
  width: 260px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 3rem;
  text-transform: uppercase;
  font-weight: 600;
  outline: none;
`

export const BtnPrimary = styled(Button)`
  background-color: #393c41;
  color: white;
  opacity: 0.9;
`

const BtnSecondary = styled(Button)`
  background-color: white;
  color: black;
  opacity: 0.8;
`

const HeaderBlock = () => {
    return (
        <>
            <Navbar/>
            <Screen>
                <Info>
                    <Text>
                        <h1>Фабрика "Корунд"</h1>
                        <h4>
                            Order Online for <span>Touchless Delivery</span>
                        </h4>
                    </Text>
                    <Actions>
                        {/*<BtnPrimary>Custom Order</BtnPrimary>
                        <BtnSecondary>Existing Inventory</BtnSecondary>*/}
                    </Actions>
                </Info>
            </Screen>
        </>
    )
}

export default HeaderBlock