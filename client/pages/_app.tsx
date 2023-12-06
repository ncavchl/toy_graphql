import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

import "./index.scss";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useRef } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const clientRef = useRef(null);

  const getClient = () => {
    if (!clientRef.current)
      clientRef.current = new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      });
    return clientRef.current;
  };

  return (
    <QueryClientProvider client={getClient()}>
      <Hydrate state={pageProps.dehydrateState}>
        {" "}
        {/** 서버사이드에서 미리 호출한 데이터 클라이언트 캐시로 부어주기 */}
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};

// [TODO] 전체 Project SSR 옵션 제거
export default dynamic(() => Promise.resolve(App), { ssr: false });
