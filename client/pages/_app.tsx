import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

import "./index.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

// [TODO] 전체 Project SSR 옵션 제거
export default dynamic(() => Promise.resolve(App), { ssr: false });
