import React from 'react'
import styled from "styled-components"
import MenuItem from "./MenuItem"

const StyledMenu = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 70px 20px 20px 20px;
  background-color: white;
  z-index: 1;
  flex-direction: column;
  gap: 25px;
  min-width: 280px;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Menu = () => {
    return (
        <StyledMenu>
            <MenuItem title='Корунд Зима'/>
            <MenuItem title='used inventory'/>
            <MenuItem title='trade-in'/>
            <MenuItem title='cybertruck'/>
            <MenuItem title='roadster'/>
            <MenuItem title='semi'/>
            <MenuItem title='charging'/>
            <MenuItem title='powerWall'/>
            <MenuItem title='commercial solar'/>
            <MenuItem title='test drive'/>
            <MenuItem title='find us'/>
            <MenuItem title='support'/>
            <MenuItem title='united states'/>
            <MenuItem title='roadster'/>
            <MenuItem title='semi'/>
            <MenuItem title='charging'/>
            <MenuItem title='commercial solar'/>
            <MenuItem title='test drive'/>
            <MenuItem title='find us'/>
            <MenuItem title='support'/>
            <MenuItem title='united states'/>
        </StyledMenu>
    )
}