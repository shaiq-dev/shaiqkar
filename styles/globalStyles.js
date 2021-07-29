import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        --black: #2f2a25;
        --bg: #FAF6F1;
        --maroon: #ac3b61;
        --width-menu: 8rem;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }



    a {
        color: inherit;
        text-decoration: none;
    }

    html {
        font-size: 62.5%;
    }

    body {
        overflow-x: hidden !important;
        width: 100vw;
        overscroll-behavior: none; 
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var(--bg);

        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    
`;
export default GlobalStyle;
