import { NextSeoProps } from 'next-seo';

const SEO: NextSeoProps = {
  openGraph: {
    type: 'website',
    site_name: 'moonerd.dev',
    url: 'https://moonerd.dev',
    locale: 'ko_KR',
    title: 'moonerd.dev🎧',
    description: '디제잉하는 프론트엔드 개발자 moonerd입니다. 겪고 배운 다양한 개발 경험을 전합니다.',
  },
  titleTemplate: '%s | moonerd.dev🎧',
  defaultTitle: 'moonerd.dev🎧',
  description: '디제잉하는 프론트엔드 개발자 moonerd입니다. 겪고 배운 다양한 개발 경험을 전합니다.',
};

export default SEO;
