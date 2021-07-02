import React from 'react'
import styled, { keyframes } from 'styled-components'

const motion = (props) => keyframes`
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
`

const PreloaderSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: ${p => `${p.size}${p.sizeUnit}`};
  height: ${p => `${p.size}${p.sizeUnit}`};
  div {
    position: absolute;
    border: 4px solid ${p => p.color};
    opacity: 1;
    border-radius: 50%;
    animation: ${p => motion(p)} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
`

const Preloader = ({ color, size, sizeUnit }) => (
    <PreloaderSpinner color={color} size={size} sizeUnit={sizeUnit}>
        <div />
        <div />
    </PreloaderSpinner>
)

Preloader.defaultProps = {
    size: 64,
    color: '#e20001',
    sizeUnit: 'px'
}

export default Preloader
