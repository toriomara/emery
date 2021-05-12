import React, {useState} from 'react'
import styled from 'styled-components'
import {MdSearch} from 'react-icons/md'

const StyledSearch = styled.div`
  display: flex;
  padding: 0 10px;
  cursor: pointer;
  justify-content: center;
  color: #393c41;
`

const StyledInput = styled.input`
  width: 200px;
  border-radius: 5px;
  margin-right: 10px;
  border: 1px solid black;
`

const Search = () => {

    const [showMode, setShowMode] = useState(false)

    const handleClick = () => {
        setShowMode(!showMode)
    }

    let content = null

    if (showMode) {
        content = (
            <StyledInput/>
        )
    }

    return (
        <StyledSearch>
            {content}
            <MdSearch onClick={handleClick}/>
        </StyledSearch>
    )
}

export default Search