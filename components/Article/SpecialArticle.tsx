import React, { ReactNode } from 'react';
import * as Styles from './SpecialArticle.styles';
import SpecialArticleImage from './SpecialArticleImage';

const SpecialArticle: React.FC = ({ children }) => {
  return (
    <a>
      <Styles.SpecialArticleWrapper>{children}</Styles.SpecialArticleWrapper>
    </a>
  );
};

export default SpecialArticle;
