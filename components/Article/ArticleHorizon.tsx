import React from 'react';
import { STYLES } from 'services/constants';
import styled from 'styled-components';

const ArticleHorizon = () => {
  return (
    <Wrapper>
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  );
};

export default ArticleHorizon;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 0 10px;
  margin: 32px 0 14px;

  span {
    margin-right: 20px;
    width: 3px;
    height: 3px;
    background-color: ${STYLES.color.greyscale950};
    border-radius: 50%;
    display: inline-block;
  }
`;
