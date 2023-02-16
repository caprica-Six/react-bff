import { useState } from "react";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "../styles/globals.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  // Create a client
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
