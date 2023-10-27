import { createGlobalStyle } from 'styled-components';

import receot from '../../assets/fonts/RecklessNeue-Light.eot';
import recsvg from '../../assets/fonts/RecklessNeue-Light.svg';
import recttf from '../../assets/fonts/RecklessNeue-Light.ttf';
import recwoff from '../../assets/fonts/RecklessNeue-Light.woff';
import recwoff2 from '../../assets/fonts/RecklessNeue-Light.woff2';

import suiregeot from '../../assets/fonts/SuisseBPIntl-Regular.eot';
import suiregsvg from '../../assets/fonts/SuisseBPIntl-Regular.svg';
import suiregttf from '../../assets/fonts/SuisseBPIntl-Regular.ttf';
import suiregwoff from '../../assets/fonts/SuisseBPIntl-Regular.woff';
import suiregwoff2 from '../../assets/fonts/SuisseBPIntl-Regular.woff2';



export const Typography = createGlobalStyle`
@font-face {
    font-family: 'RecklessNeue Light';
    src: url('${receot}');
    src: url('${recwoff2}') format('woff2'),
        url('${recwoff}') format('woff'),
        url('${recttf}') format('truetype'),
        url('${recsvg}#PPPangramSans-Semibold') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SuisseBP Regular';
    src: url('${suiregeot}');
    src: url('${suiregwoff2}') format('woff2'),
        url('${suiregwoff}') format('woff'),
        url('${suiregttf}') format('truetype'),
        url('${suiregsvg}#PPPangramSans-Semibold') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

:root {
    --light: 'RecklessNeue Light', sans-serif;
    --regular: 'SuisseBP Regular', sans-serif;
    --black: #463436;
    --white: #F1F2EB;
    --brown: #463436;
    overflow-wrap: break-word;
}
html {
      scroll-behavior: smooth;
      font-size: 18px !important;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
    }
    body {
        background-color: var(--white);
        color: var(--brown);
        font-size: 16px;
        font-family: var(--regular);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100vw;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
        
    }
    ::-webkit-scrollbar {
        display: none;
    }
    i, em {
        font-family: var(--light);
        font-style: normal;
    }
    h1, h2, h3 {
        i, em {
            font-family: var(--light);
            font-style: normal;
        }
    }
    h2 {
        font-size: 4vw;
        text-transform: uppercase;
    }

    h3 {
        font-size: 2.5rem;
        text-transform: uppercase;
        line-height: 1;
        @media (max-width: 1200px) {
            font-size: 4vw;
        }
    }
    
`