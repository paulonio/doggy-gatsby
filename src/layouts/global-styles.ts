import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
        font-family: 'Cormorant';
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        color: #4C4C4B;
    }

    h1 {
        font-size: 63px;
        line-height: 76px;
        font-weight: 700;

        @media screen and (max-width: 570px) {
            font-size: 42px;
            line-height: 51px;
        }
    }

    h2 {
        font-size: 66px;
        line-height: 80px;
        font-weight: 700;

        @media screen and (max-width: 1250px) {
            font-size: 42px;
            line-height: 51px;
        }
    }

    h3 {
        font-size: 36px;
        line-height: 44px;
        font-weight: 700;
    }

    h4 {
        font-size: 32px;
        line-height: 39px;
        font-weight: 700;

        @media screen and (max-width: 570px) {
            font-size: 24px;
            line-height: 29px;
        }
    }
`;
