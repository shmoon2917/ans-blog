import LatestArticle from 'components/Article/LatestArticle';
import Chip from 'components/Chip/Chip';
import { ChipSetProps } from 'components/Chip/types';
import { Typos } from 'components/Typo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { STYLES } from 'services/constants';
import { Article } from 'services/types';
import styled from 'styled-components';
import { SpaceY } from 'styles/theme';

interface LatestArticlsProps {
  articles: Article[];
  categories: string[];
}

export default function LatestArticles({ articles, categories }: LatestArticlsProps) {
  const router = useRouter();
  const filteredCategory = (router.query?.category as string) ?? null;

  const handleChipClick: ChipSetProps<string>['onChange'] = ({ value }) => {
    if (value === null) {
      router.push(router.basePath);
    } else {
      router.push(`${router.basePath}?category=${value}`);
    }
  };

  return (
    <LatestArticlesContainer>
      <HeaderWrapper>
        <Label type="large">최신 아티클</Label>
        <Chip.Set value={filteredCategory} onChange={handleChipClick}>
          <Chip value={null}>전체</Chip>
          {categories.map((category) => (
            <Chip value={category} key={category}>
              {category}
            </Chip>
          ))}
        </Chip.Set>
      </HeaderWrapper>

      <div>
        {articles.map(({ slug, category, ...restProps }) => (
          <Link href={`/articles/${category}/${slug}`} key={slug} passHref>
            <a>
              <LatestArticle category={category} {...restProps} />
            </a>
          </Link>
        ))}
      </div>
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

const Label = styled(Typos.Label)`
  color: ${STYLES.color.dark2};
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
