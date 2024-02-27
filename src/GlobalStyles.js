import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    
      :root {
        --color-purple-100: #F8F0FF;
        --color-purple-200: #ECD9FF;
        --color-purple-300: #DCB9FF;
        --color-purple-400: #C894FD;
        --color-purple-500: #AB57FF;
        --color-purple-600: #9935FF;
        --color-purple-700: #861DEE;
        --color-purple-800: #6E0AD1;
        --color-purple-900: #5603A7;

        --color-orange-100: #FFF0D6;
        --color-orange-200: #FFE2AD;
        --color-orange-300: #FFC583;
        --color-orange-400: #FFAE65;
        --color-orange-500: #FF8832;

        --color-blue-100: #E2F5FF;
        --color-blue-200: #B1E4FF;
        --color-blue-300: #7CD2FF;
        --color-blue-400: #34B9FF;
        --color-blue-500: #00A2FE;

        --color-green-100: #E4FBDC;
        --color-green-200: #D0F5C3;
        --color-green-300: #9BE282;
        --color-green-400: #60CF37;
        --color-green-500: #2BA600;

        --color-grayscale-100: #F6F6F6;
        --color-grayscale-200: #EEE;
        --color-grayscale-300: #CCC;
        --color-grayscale-400: #999;
        --color-grayscale-500: #555;
        --color-grayscale-600: #4A4A4A;
        --color-grayscale-700: #3A3A3A;
        --color-grayscale-800: #2B2B2B;
        --color-grayscale-900: #181818;

        --color-white: #FFF;
        --color-black: #000;
        --color-error: #DC3A3A;
        --color-surface: #F6F8FF;
    }

    *, 
    *::after, 
    *::before {
        margin : 0;
        padding: 0;
        box-sizing: border-box;
    }

    html { 
        font-size: 62.5%;
        font-family: Pretendard 
         }
    
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;
