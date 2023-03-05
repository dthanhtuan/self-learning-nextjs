import "@/scss/global.scss";
import { AppPropsWithLayout } from "@/models";
// https://github.com/dthanhtuan/learn-nextjs/blob/main/pages/_app.tsx
// https://jools.dev/nextjs-_appjs-example
// Override the default App component
// Next.js uses the App component to initialize pages.
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return <Component {...pageProps} />;
}
