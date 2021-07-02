import React from 'react'
import styled from 'styled-components'
import {MdLanguage} from 'react-icons/md'

const StyledLanguage = styled.div`
  display: flex;
  padding: 0 10px;
  cursor: pointer;
  color: #393c41;
`

const Language = () => {
    return (
        <StyledLanguage>
            <MdLanguage/>
            <select>
                <option defaultValue="RU">RU</option>
                <option value="EN">EN</option>
                <option value="DE">DE</option>
                <option value="ZN">ZN</option>
            </select>
        </StyledLanguage>
    )
}

export default Language
