import { Typos } from 'components/Typo';
import { STYLES } from 'services/constants';
import styled from 'styled-components';

const AritlceStyleWrapper = styled.div`
  grid-column: span 3 / span 3;
  margin-right: 55px;

  *:first-child {
    margin-top: 0px;
  }

  p,
  li,
  a,
  blockquote {
    margin-top: 2rem;
    ${Typos.Body1Style};
    word-break: break-word;
    color: ${STYLES.color.greyscale900};
  }

  h1 {
    margin-top: 2.64em;
    margin-bottom: -0.37em;
    ${Typos.Heading1Style};
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }

  h2 {
    margin-top: 1.87em;
    margin-bottom: -0.31em;
    ${Typos.Heading2Style};
    line-height: 24px;
    font-size: 20px;
  }

  h3 {
    ${Typos.Heading3Style}
  }

  h4 {
    ${Typos.Heading4Style}
  }

  h1,
  h2,
  h3,
  h4 {
    + p {
      margin-top: 1.16em;
    }
  }

  p,
  li {
    margin-bottom: -0.46em;
    letter-spacing: -0.003em;

    + pre {
      margin-top: 36px;
    }
  }

  p:first-child {
    margin-top: 0;
  }

  li {
    margin-top: 1.14em;
    margin-left: 30px;
    margin-bottom: -0.46em;
    padding-left: 0px;

    &:first-child {
      margin-top: 2.14em;
    }

    pre {
      margin-top: 1.14em;
    }
  }

  menu,
  ol,
  ul {
    padding: 0;
    list-style: none;
    list-style-image: none;

    ol {
      & > li {
        list-style-type: lower-alpha;
        margin-top: 0.94em;

        &:first-child {
          margin-top: 0.54em;
        }
      }
    }

    ul {
      & > li {
        list-style-type: circle;
        margin-top: 0.94em;

        &:first-child {
          margin-top: 0.54em;
        }
      }
    }
  }

  ol {
    & > li {
      list-style-type: decimal;
    }
  }

  ul {
    & > li {
      list-style-type: disc;
    }
  }

  a,
  a:link,
  a:active,
  a:visited {
    color: ${STYLES.color.blue1};
    text-decoration: underline;
  }

  blockquote {
    margin-left: -20px;
    padding-left: 20px;
    box-shadow: inset 3px 0 0 0 rgb(41 41 41);

    > p {
      ${Typos.BlockQuoteStyle};
      letter-spacing: -0.003em;
      margin-bottom: 0px;
      color: ${STYLES.color.greyscale900};
    }
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
    overflow: scroll;
  }

  code {
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-size: 12px;
    line-height: 1.18;
    letter-spacing: -0.022em;
    font-size: 14px;
  }

  pre {
    margin-top: 56px;

    > div {
      padding: 20px;
      overflow-x: auto;
    }
  }

  img {
    width: 100%;

    &[alt='thumbnail'] {
      margin-top: 0;
    }
  }

  &:not(pre, div) > code {
    background-color: ${STYLES.color.light1};
    color: ${STYLES.color.dark1};
    border-radius: 4px;
    padding: 2px 4px;
    margin-right: 2px;
  }
`;

export default AritlceStyleWrapper;
