import Document, { Head, Main, NextScript, Html } from "next/document";

import { getSiteMetaData } from "utils/helpers";

export default class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetaData();

    return (
      <Html lang={siteMetadata.language}>
        <Head>
        <script
            dangerouslySetInnerHTML={{
              __html: `  window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '[${process.env.GA}]');`
            }}
          />
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
