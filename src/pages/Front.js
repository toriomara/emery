import React, {useState, useEffect} from 'react'
import Main from '../layouts/Main'
import {NavLink} from 'react-router-dom'
//import {Menu} from '../components/Template/Header/Hamburger.elements'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, decrement, increment, removeLastTodo} from '../features/toolkitSlice'
import Cats from './Cats'
import {selectRoutes} from '../features/routeSlice'

const Front = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])


    const count = useSelector(state => state.toolkit.count)
    const todos = useSelector(state => state.toolkit.todos)
    const dispatch = useDispatch()

    const Countdown = ({count, tick, reset}) => {
        if (count) {
            setTimeout(() => tick(), 1000)
        }
        return (count) ?
            <h1>{count(5)}</h1> :
            <div onClick={() => reset(10)}>
                <span>CELEBRATE!!!</span>
                <span>(click to start over)</span>
            </div>
    }

    const addAsyncTodo = () => {
        return async dispatch => {
            setTimeout(() => {
                dispatch(addTodo('ASYNC TODO'))
            }, 2000)
        }
    }

    const routesNavi = useSelector(selectRoutes)

    return (
        <Main>
            {routesNavi.filter((l) => !l.index).map((l) => (
                <li key={l.label}>
                    <NavLink to={l.path}>{l.label}</NavLink>
                </li>
            ))}
            <div>
                <h1>Счётчик {count}</h1>
                <button onClick={() => dispatch(increment())}>Инкремент</button>
                <button onClick={() => dispatch(decrement())}>Декремент</button>
                <button onClick={() => dispatch(removeLastTodo())}>Удалить</button>
                <button onClick={() => dispatch(addTodo(prompt()))}>Создать</button>
                <button onClick={() => dispatch(addAsyncTodo())}>Async todo</button>
                <ul>
                    {todos.map(todo =>
                        <li key={todo}>{todo}</li>)}
                </ul>
            </div>
            <div>
                <Countdown/>
            </div>
            <div>
                <Cats/>
            </div>
        </Main>
    )
}

export default Front
