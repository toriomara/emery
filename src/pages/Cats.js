import React from 'react'
import Main from '../layouts/Main'
import {routesNavi} from "../data/routes";
import {NavLink} from "react-router-dom";
//import {Menu} from "../components/Template/Header/Hamburger.elements";

import {useDispatch, useSelector} from "react-redux";
import {addTodo, decrement, increment, removeLastTodo} from "../features/toolkitSlice";

const Front = (props) => {
    const count = useSelector(state => state.toolkit.count)
    const todos = useSelector(state => state.toolkit.todos)
    const dispatch = useDispatch()

    const addAsyncTodo = () => {
        return async dispatch => {
            setTimeout(() => {
                dispatch(addTodo('ASYNC TODO'))
            }, 2000)
        }
    }

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
                <Cats/>
            </div>
        </Main>
    )
}

export default Front
