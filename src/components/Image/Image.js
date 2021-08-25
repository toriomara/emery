import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img.attrs({
    src: props => props.image,
    alt: props => props.name,
    width: props => props.width
})

const Image = ({src, alt}) => {
    return (
        <div>
            <StyledImage/>
        </div>
    )
}

Image.propsTypes = {

}

Image.defprops = {

}

export default Image
