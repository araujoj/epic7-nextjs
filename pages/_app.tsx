import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "../src/utils/theme";
import createEmotionCache from "../src/utils/createEmotionCache";
import Appbar from "../src/components/Appbar";
import Copyright from "../src/components/Copyright";

const queryClient = new QueryClient();
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Appbar />
          <Component {...pageProps} />
          <Copyright />
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
