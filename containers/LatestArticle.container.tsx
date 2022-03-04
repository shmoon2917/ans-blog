import LatestArticle from 'components/Article/LatestArticle';
import { Typos } from 'components/Typo';
import Link from 'next/link';
import { STYLES } from 'services/constants';
import { Article } from 'services/types';
import styled from 'styled-components';
import { SpaceY } from 'styles/theme';

interface LatestArticlsProps {
  articles: Article[];
}

export default function LatestArticles({ articles }: LatestArticlsProps) {
  return (
    <LatestArticlesContainer>
      <Typos.Label type="large" style={{ color: STYLES.color.dark2 }}>
        최신 아티클
      </Typos.Label>
      {articles?.map(({ slug, date, title, category }) => (
        <Link href={`/posts/${slug}`} key={slug}>
          <a>
            <LatestArticle title={title} category={category} createdAt={date} />
          </a>
        </Link>
      ))}
    </LatestArticlesContainer>
  );
}

const LatestArticlesContainer = styled.section`
  ${SpaceY(12)}
  padding: 12px ${STYLES.padding.default}px;
  margin: 0 auto;
  max-width: 1140px;
  box-sizing: border-box;

  ${STYLES.media.mobile} {
    padding: 12px ${STYLES.padding.mobile}px;
  }
`;
