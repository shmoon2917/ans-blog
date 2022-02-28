import LatestArticle from 'components/Article/LatestArticle';
import { Typos } from 'components/Typo';
import { STYLES } from 'services/constants';
import styled from 'styled-components';
import { SpaceY } from 'styles/theme';

export default function LatestArticles() {
  return (
    <LatestArticlesContainer>
      <Typos.Label type="large" style={{ color: STYLES.colors.dark2 }}>
        최신 아티클
      </Typos.Label>
      <LatestArticle title="블로그 만들자" category="개발" createdAt="2022. 02. 28" />
    </LatestArticlesContainer>
  );
}

const LatestArticlesContainer = styled.section`
  ${SpaceY(12)}
  padding: 12px ${STYLES.paddings.default}px;
  margin: 0 auto;
  max-width: 1140px;
  box-sizing: border-box;

  ${STYLES.media.mobile} {
    padding: 12px ${STYLES.paddings.mobile}px;
  }
`;
