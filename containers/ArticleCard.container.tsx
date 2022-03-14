import ArticleCard from 'components/Article/ArticleCard';
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
    return articles.map(({ slug, date, title, category, description }) => {
      const parsedDate = parse(date, 'yyyy-MM-dd HH:mm:ss', new Date());
      const isNew = differenceInCalendarDays(new Date(), parsedDate) <= ARTICLE_NEW_DAYS;

      return (
        <Link href={`/articles/${category}/${slug}`} key={`${category}__${slug}`} passHref>
          <a title={title}>
            <ArticleCard title={title} category={category} date={date} isNew={isNew} description={description} />
          </a>
        </Link>
      );
    });
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Label type="large">TOPICS</Label>
        <CategorySlider categories={categories} selected={category as string} onChange={handleChipClick} />
      </HeaderWrapper>
      <div>{renderArticles()}</div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  ${SpaceY(12)}
  margin: 0 auto;
  max-width: 1140px;
  box-sizing: border-box;
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
  padding: 0 40px;
`;
