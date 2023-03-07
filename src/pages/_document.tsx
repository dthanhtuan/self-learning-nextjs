import { Html, Head, Main, NextScript } from "next/document";

// https://github.com/dthanhtuan/learn-nextjs/blob/main/pages/_document.tsx
// Pages in Next.js skip the definition of the surrounding document's markup.
// For example, you never include <html>, <body>, etc.
// To override that default behavior, you must create a file at ./pages/_document.js, where you can extend the Document class.
export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
