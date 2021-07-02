import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CatList from './CatList'
import { fetchCats } from '../features/catsReducer'

function Cats() {
    const catPics = useSelector((state) => state.cats.entities)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCats())
    }, [dispatch])

    return (
        <div>
            <h1>CatBook</h1>
            <CatList catPics={catPics} />
        </div>
    )
}

export default Cats
