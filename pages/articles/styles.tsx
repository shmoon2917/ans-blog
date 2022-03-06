import { Typos } from 'components/Typo';
import { STYLES } from 'services/constants';
import styled from 'styled-components';

const AritlceStyleWrapper = styled.div`
  p,
  * {
    ${Typos.Body1};
    color: ${STYLES.color.dark1};
  }

  address,
  article,
  aside,
  blockquote,
  canvas,
  dd,
  div,
  dl,
  dt,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h1,
  h3,
  h4,
  h5,
  h6,
  header,
  hr,
  li,
  main,
  nav,
  noscript,
  ol,
  p,
  pre,
  section,
  table,
  tfoot,
  ul,
  video {
    margin-bottom: 16px;
    color: ${STYLES.color.dark1};
    ${Typos.Body1};
  }

  h1 {
    ${Typos.Heading1Style}
  }

  h2 {
    ${Typos.Heading2Style}
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
  h4,
  h5,
  h6 {
    margin-bottom: 16px;
    margin-top: 24px;
  }

  ol,
  ul {
    padding-left: 1.4em;
    margin-bottom: 16px;
    list-style: revert;
  }

  li {
    margin: 4px 0;
    list-style: outside;
  }

  li > ol,
  li > ul {
    padding-left: 16px;
    margin-bottom: 4px;
  }

  a {
    color: ${STYLES.color.blue1};
    text-decoration: none;

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }

  blockquote {
    border-left: 4px solid;
    border-left-color: ${STYLES.color.dark3};
    margin: 0 0 0 16px;
    > p {
      color: ${STYLES.color.dark3};
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

  tt,
  code {
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-size: 12px;
  }

  pre {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-size: 13px;
    word-wrap: normal;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre,
  details {
    margin-top: 0px;
    margin-bottom: 16px;
  }

  img {
    width: 100%;
  }

  hr {
    height: 1;
    border: none;
    background-color: ${STYLES.color.light1};
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
