import LatestArticle from 'components/Article/LatestArticle';
import { Typos } from 'components/Typo';
import { STYLES } from 'services/constants';
import styled from 'styled-components';
import { SpaceY } from 'styles/mixin';

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
  padding: 12px 0 ${STYLES.paddings.default}px ${STYLES.paddings.default}px;

  ${STYLES.media.mobile} {
    padding: 12px 0 ${STYLES.paddings.mobile}px ${STYLES.paddings.mobile}px;
  }
`;
