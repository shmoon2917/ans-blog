import { Divider } from 'components/Common/Divider';
import { Typos } from 'components/Typo';
import React from 'react';
import { STYLES } from 'services/constants';
import { Article } from 'services/types';
import styled from 'styled-components';

type ArticleHeaderProps = Omit<Article, 'slug'>;

const ArticleHeader = ({ title, category, date }: ArticleHeaderProps): JSX.Element => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <DescriptionWrapper>
        <DescriptionText>{category}</DescriptionText>
        <Divider />
        <DescriptionText>{date}</DescriptionText>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default ArticleHeader;

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const Title = styled(Typos.Heading1)`
  text-align: center;
  font-size: 40px;
  line-height: 54px;

  ${STYLES.media.mobile} {
    font-size: 28px;
    line-height: 38px;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;

  > * + * {
    margin-left: 10px;
  }
`;

const DescriptionText = styled.span`
  color: ${STYLES.color.dark3};
  ${Typos.LabelLargeStyle};
`;
