import React, { useState } from 'react'
import styled from 'styled-components'
import { FaTimes, FaSearch } from 'react-icons/fa'
import { Input } from '../Template/Footer/Input'

const SearchContainer = styled.div`
	position: relative;
	display: flex;
	width: fit-content;
  height: fit-content;
`

const SearchInput = styled(Input)`
	position: relative;
	display: inline-flex;
  align-items: center;
  padding: 8px;
  margin: 0 5px 0 0;
	width: 200px;
	height: 30px;
	margin: 0;
	border-radius: 5px 0 0 5px;
  background-color: transparent;
  transition: all .5s ease-in-out;
  ${Input}
  
  :focus {
  	box-shadow: none;
  	border: 1px solid var(--blue);
  }
  
  ::placeholder{
	  color: var(--grey);
	  font-size: 16px;
	  font-weight: 400;
`

const IconButton = styled.button`
	position: relative;
	display: inline-flex;
  align-items: center;
	padding: 5px 10px;
	height: 30px;
  font-size: 18px;
  color: var(--red);
  background-color: transparent;
  border-radius: 4px;
  border-radius: 0 4px 4px 0;
  outline: none;
  cursor: pointer;
  
  :hover {
    transform: scale(1.2);
	  border: none;
	  transition: all .3s ease;
  }
`

const Search = () => {
	const [isActive, setIsActive] = useState(false)

	const toggleSearch = () => {
		setIsActive(!isActive)
	}

	return (
		<SearchContainer isSearching={isActive}>
			{{ toggleSearch } && (isActive) ? <SearchInput placeholder='Type to Search...'/> : null}
			<IconButton onClick={toggleSearch}>
				{isActive ? (
					<FaTimes/>
				) : (
					<FaSearch/>
				)}
			</IconButton>
		</SearchContainer>
	)
}

export default Search

