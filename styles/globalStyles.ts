import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        scroll-behavior: unset;
        box-sizing: border-box;

        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }

    html, body {
        padding: 0;
        margin: 0;

        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        -webkit-tap-highlight-color: transparent;

        position: relative;
        max-width: 100%;
        min-height: 100vh;
    };

    main, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section, ul, li {
        display: block;
    };

    blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
        margin: 0;
    }

    a,
    a:active,
    a:link,
    a:visited {
        color: unset;
        -webkit-tap-highlight-color: transparent;
        text-decoration: none;
    }

    button {
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        &:hover {
            cursor: pointer;
        };  
        &:focus, &:active {
            box-shadow: none;
            outline: none;
        };
    };

    body {
        line-height: 1;
    };

    ol, ul {
        list-style: none;
        margin: 0;
        padding: 0;
    };

    li {
        display: list-item;
        text-align: -webkit-match-parent;
    }

    blockquote, q {
        quotes: none;
    };

    blockquote:before, blockquote:after, q:before, q:after {
        content: '';
    };

    table {
        border-collapse: collapse;
        border-spacing: 0;
    };
`;
