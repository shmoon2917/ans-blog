import { Typos } from 'components/Typo';
import React from 'react';
import * as Styles from './SpecialArticle.styles';

const SpecialArticleTitle: React.FC = ({ children }) => {
  return (
    <Styles.SpecialArticleTitleWrapper>
      <Typos.Heading5 style={{ color: 'white', textShadow: '0px 0px 2px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.32)', whiteSpace: 'pre-wrap' }}>
        {children}
      </Typos.Heading5>
    </Styles.SpecialArticleTitleWrapper>
  );
};

export default SpecialArticleTitle;
