import LatestArticle from 'components/Article/LatestArticle';
import { Typos } from 'components/Typo';
import Link from 'next/link';
import { STYLES } from 'services/constants';
import { Post } from 'services/types';
import styled from 'styled-components';
import { SpaceY } from 'styles/theme';

interface LatestArticlsProps {
  posts: Post[];
}

export default function LatestArticles({ posts }: LatestArticlsProps) {
  return (
    <LatestArticlesContainer>
      <Typos.Label type="large" style={{ color: STYLES.colors.dark2 }}>
        최신 아티클
      </Typos.Label>
      {posts?.map(({ slug, date, title, category }) => (
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
  padding: 12px ${STYLES.paddings.default}px;
  margin: 0 auto;
  max-width: 1140px;
  box-sizing: border-box;

  ${STYLES.media.mobile} {
    padding: 12px ${STYLES.paddings.mobile}px;
  }
`;
