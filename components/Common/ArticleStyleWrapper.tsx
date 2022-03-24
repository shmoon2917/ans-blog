import { Typos } from 'components/Typo';
import { STYLES } from 'services/constants';
import styled from 'styled-components';
import { SpaceY } from 'styles/theme';

const AritlceStyleWrapper = styled.div`
  font-size: 1rem;
  line-height: 1.75;
  max-width: 65ch;

  ${({ theme }) => theme.responsive.lg} {
    font-size: 1.125rem;
    line-height: 1.78;
  }

  *:first-child {
    margin-top: 0px;
  }

  p,
  li,
  a,
  blockquote {
    margin-top: 2rem;
    ${Typos.Body1Style};

    word-break: keep-all;
    color: ${STYLES.color.greyscale950};

    ${({ theme }) => theme.responsive.lg} {
      letter-spacing: -0.003em;
      line-height: 30px;
      font-size: 18px;
    }
  }

  h1 {
    margin-top: 2.5em;
    margin-bottom: -0.37em;
    color: ${STYLES.color.greyscale950};

    font-weight: 600;

    ${({ theme }) => theme.responsive.lg} {
      margin-top: 2.6em;
      letter-spacing: 0px;
      line-height: 30px;
      font-size: 26px;
    }
  }

  h2 {
    letter-spacing: -0.022em;
    line-height: 1.18;
    margin-bottom: -0.31em;

    font-weight: 600;

    ${({ theme }) => theme.responsive.lg} {
      margin-top: 1.9em;
      letter-spacing: 0px;
      line-height: 26px;
      font-size: 22px;
    }
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
      margin-top: 0.86em;
    }

    + pre {
      margin-top: 2em;
    }
  }

  p {
    margin-top: 2em;
    margin-bottom: -0.46em;

    ${({ theme }) => theme.responsive.lg} {
      letter-spacing: -0.003em;
      line-height: 30px;
      font-size: 18px;
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
    text-decoration: underline;
  }

  blockquote {
    margin-left: -20px;
    padding-left: 20px;
    box-shadow: inset 3px 0 0 0 rgb(41 41 41);
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
    background: #e9ecef;
    padding: 0.2rem 0.3rem;
    margin-right: 0.2rem;
    border-radius: 3px;

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
`;

export default AritlceStyleWrapper;
