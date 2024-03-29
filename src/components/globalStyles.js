import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
          
    --light: #f5f4f4;
    --grey: #504e4f;
    --red: #af1515;
    --blue: #033369;
    --dark: #0a0a0a;
  }
    
  html, body {
    font-family: "Gotham", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    
    color: var(--dark);
    //background: #f9f9f9;  
   //background: -webkit-linear-gradient(left, #f2f2f2,#eeeeee,#f2f2f2);/* Chrome 10-25, Safari 5.1-6 */                          background: linear-gradient(to right, #f2f2f2,#eeeeee,#f2f2f2);/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */                                               
  }

  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    cursor: pointer;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    width: 10px;
    background: #eee;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #323232;
    box-shadow: 0 -100vh 0 100vh #b1b1b1/*, 0 0 15px 5px black*/;
    border-radius: 8px;
  }
`

export const AppWrapper = styled.div`
  max-width: calc(1700px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`

export const ContentContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`

export default GlobalStyle