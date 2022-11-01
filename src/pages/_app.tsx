import "@/styles/base.css";
import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";
import { AppPropsAndLayout } from "@/types/app.type";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsAndLayout) => {
  const getLayout =
    Component.getLayout ?? ((page) => <Layout content={page} />);

  return (
    <QueryClientProvider client={queryClient}>
      {getLayout(<Component {...pageProps} />)}
      <div>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
};

export default App;
