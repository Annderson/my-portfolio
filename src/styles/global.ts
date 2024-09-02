import { createGlobalStyle } from 'styled-components';

import LXGWWenKaiTCBold from '@/assets/font/LXGWWenKaiTC-Bold.ttf';
import LXGWWenKaiTCLight from '@/assets/font/LXGWWenKaiTC-Light.ttf';
import LXGWWenKaiTCRegular from '@/assets/font/LXGWWenKaiTC-Regular.ttf';

import MeriendaBlack from '@/assets/font/Merienda-Black.ttf';
import MeriendaBold from '@/assets/font/Merienda-Bold.ttf';
import MeriendaExtraBold from '@/assets/font/Merienda-ExtraBold.ttf';
import MeriendaLight from '@/assets/font/Merienda-Light.ttf';
import MeriendaMedium from '@/assets/font/Merienda-Medium.ttf';
import MeriendaRegular from '@/assets/font/Merienda-Regular.ttf';
import MeriendaSemiBold from '@/assets/font/Merienda-SemiBold.ttf';
import colors from './colors';

export default createGlobalStyle`
    @font-face {
        font-family: 'LXGWWenKaiTC-Bold';
        src: url(${LXGWWenKaiTCBold});
    }
    @font-face {
        font-family: 'LXGWWenKaiTC-Light';
        src: url(${LXGWWenKaiTCLight});
    }
    @font-face {
        font-family: 'LXGWWenKaiTC-Regular';
        src: url(${LXGWWenKaiTCRegular});
    }
    @font-face {
        font-family: 'Merienda-Black';
        src: url(${MeriendaBlack});
    }
    @font-face {
        font-family: 'Merienda-Bold';
        src: url(${MeriendaBold});
    }
    @font-face {
        font-family: 'Merienda-ExtraBold';
        src: url(${MeriendaExtraBold});
    }
    @font-face {
        font-family: 'Merienda-Light';
        src: url(${MeriendaLight});
    }
    @font-face {
        font-family: 'Merienda-Medium';
        src: url(${MeriendaMedium});
    }
    @font-face {
        font-family: 'Merienda-Regular';
        src: url(${MeriendaRegular});
    }
    @font-face {
        font-family: 'Merienda-SemiBold';
        src: url(${MeriendaSemiBold});
    }

    :root {
        color-scheme: light dark;
        color: #f4effa;
        background-color: #11001c;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        &::-webkit-scrollbar {
            background-color: ${colors.purple}55;
            width: 3px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: ${colors.purple};
            border-radius: 5px;
        }
    }
    
    body {
        font-family: 'Merienda-Regular';
        overflow-x: hidden;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    @media (prefers-color-scheme: light) {
        :root {
            color: #213547;
            background-color: #ffffff;
        }
    }

`;
