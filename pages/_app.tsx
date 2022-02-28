import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import Layout from 'components/Layout/Layout';
import { GlobalStyle } from 'styles/globalStyles';

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
      <ThemeProvider attribute="class">
        <Head>
          <title>ANS blog</title>
          <meta name="description" content={`frontend developer ans's blog`} />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}
