import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from 'components/Layout/Layout';
import { GlobalStyle } from 'styles/globalStyles';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
