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
import { SpaceX, SpaceY } from 'styles/theme';
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
        <li key={`${category}__${slug}`}>
          <Link href={`/articles/${category}/${slug}`} passHref>
            <a title={title} style={{ display: 'block' }}>
              <ArticleCard title={title} category={category} date={date} isNew={isNew} description={description} />
            </a>
          </Link>
        </li>
      );
    });
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Label type="large">TOPICS</Label>
        <CategorySlider categories={categories} selected={category as string} onChange={handleChipClick} />
      </HeaderWrapper>
      <CardList>{renderArticles()}</CardList>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  ${SpaceY(16)}
  margin: 0 auto;
  max-width: 1140px;
  box-sizing: border-box;
`;

const Label = styled(Typos.Label)`
  display: none;
  font-size: 1rem;

  ${({ theme }) => theme.responsive.md} {
    display: inline-block;
    width: 60px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  padding: 0 1rem;

  ${({ theme }) => theme.responsive.md} {
    ${SpaceX(20)}
    justify-content: flex-start;
    margin: 2rem 0;
  }
`;

const CardList = styled.ul`
  & > li:nth-child(even) {
    background-color: ${STYLES.color.greyscale25};
  }

  ${({ theme }) => theme.responsive.md} {
    & > li:nth-child(even) {
      background-color: transparent;
    }
  }

  ${({ theme }) => theme.responsive.lg} {
    ${SpaceY(24)};
  }

  ${({ theme }) => theme.responsive.xl} {
    ${SpaceY(36)};
  }
`;
