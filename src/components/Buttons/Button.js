import styled from "styled-components";

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

export const BtnSecondary = styled(Button)`
  background-color: white;
  color: black;
  opacity: 0.8;
`