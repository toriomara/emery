import styled from 'styled-components'

export const Scrollbar = styled.div`
  width: 100%;
  height: 500px;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 20px;
    border: 1px solid black;
  }

`