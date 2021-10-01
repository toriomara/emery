import React, { useState, useEffect } from 'react'
import Main from '../layouts/Main'
import DocList from "../components/DocList/DocList"

const Documentation = () => {

  const [count, setCount] = useState(0);

  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = `Вы нажали ${count} раз`;
  });

    return (
        <Main>
            <h1>Documentation</h1>
         {/* <p>Вы нажали {count} раз</p>
          <button onClick={() => setCount(count + 1)}>
            Нажми на меня
          </button>*/}

            {/*<DocList/>*/}
        </Main>
    )
}

export default Documentation
