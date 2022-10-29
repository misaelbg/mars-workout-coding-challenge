import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export type NextPageAndLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsAndLayout = AppProps & {
  Component: NextPageAndLayout;
};

const queryClient = new QueryClient();

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsAndLayout) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
};
