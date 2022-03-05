import LatestArticle from 'components/Article/LatestArticle';
import Chip from 'components/Chip/Chip';
import { ChipSetProps } from 'components/Chip/types';
import { Typos } from 'components/Typo';
import { differenceInCalendarDays, format, parse } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { STYLES } from 'services/constants';
import { ARTICLE_NEW_DAYS } from 'services/constants/date';
import { Article } from 'services/types';
import styled from 'styled-components';
import { SpaceY } from 'styles/theme';
import CategorySlider from './CategorySlider';

interface LatestArticlsProps {
  articles: Article[];
  categories: string[];
}

export default function LatestArticles({ articles, categories }: LatestArticlsProps) {
  const router = useRouter();
  const { category } = router?.query;

  const handleChipClick: ChipSetProps<string>['onChange'] = ({ value }) => {
    if (value === null) {
      router.push(router.basePath);
    } else {
      router.push(`${router.basePath}?category=${value}`);
    }
  };

  const renderArticles = () => {
    return articles.map(({ slug, date, title, category }) => {
      const parsedDate = parse(date, 'yyyy-MM-dd HH:mm:ss', new Date());
      const isNew = differenceInCalendarDays(new Date(), parsedDate) <= ARTICLE_NEW_DAYS;

      return (
        <Link href={`/articles/${category}/${slug}`} key={`${category}__${slug}`} passHref>
          <a title={title}>
            <LatestArticle title={title} category={category} date={date} isNew={isNew} />
          </a>
        </Link>
      );
    });
  };

  return (
    <LatestArticlesContainer>
      <HeaderWrapper>
        <Label type="large">최신 아티클</Label>
        <CategorySlider categories={categories} selected={category as string} onChange={handleChipClick} />
      </HeaderWrapper>
      <div>{renderArticles()}</div>
    </LatestArticlesContainer>
  );
}

const LatestArticlesContainer = styled.section`
  ${SpaceY(12)}
  padding: 12px ${STYLES.padding.default}px 36px;
  margin: 0 auto;
  max-width: 1140px;
  box-sizing: border-box;

  ${STYLES.media.mobile} {
    padding: 12px ${STYLES.padding.mobile}px 36px;
  }
`;

const Label = styled(Typos.Label)`
  color: ${STYLES.color.dark2};
  display: revert;

  ${STYLES.media.mobile} {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
