import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/components/lib/AluraKutCommons';

const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{ 
    font-family: sans-serif;
    background: no-repeat linear-gradient(45deg, #000, #22ccff);
  } 
  #__next{
    display: flex;
    min-height: 10vh;
    flex-direction: column;
  } 
  img{
    max-width: 100%;
    height: auto;
    display: block;
  }
  ${AlurakutStyles}
`


const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
