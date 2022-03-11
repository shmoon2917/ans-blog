import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';

import { GlobalStyle } from 'styles/globalStyles';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <GlobalStyle />
      <DefaultSeo {...SEO} />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
