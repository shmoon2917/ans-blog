import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from 'components/Layout/Layout';
import { GlobalStyle } from 'styles/globalStyles';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider attribute="class">
        <Head>
          <title>ANS blog</title>
          <meta name="description" content={`frontend developer ans's blog`} />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
