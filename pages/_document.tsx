import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    /** 스타일 구성 요소의 ServerStyleSheet 클래스를 인스턴스화 */
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      /**
       * renderPage: 이 메서드에 연결하여 초기 페이지 로드 시 서버 측 자식 구성 요소의 스타일 분석
       * renderPage를 커스텀 하는 이유는 서버 측 렌더링에서 제대로 작동하기 위해 애플리케이션을 래핑해야 하는 css-in-js 라이브러리와 함께 사용하기 위한 것
       */
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#0a0a0a" />
          <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
          <meta name="theme-color" content="#0a0a0a" />

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <meta name="google-site-verification" content="oIgwJ_U1iDOs4jg7Laab5PH6hmYMNyibNXrEwJsRrFw" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
