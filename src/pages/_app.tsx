import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { NextPage } from "next";
import Head from "next/head";
import { NextIntlProvider } from "next-intl";

//import { Layout } from '@src/components/common';
import { GlobalStyle, theme } from "@src/styles";
//import { store } from '@src/services/store';
import ruLocalization from "@src/translations/ru.json";
//import { ToastProvider } from '@src/components/common/Toast';
import Card from "@src/components/Card";

import type { AppProps } from "next/app";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  hideLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

//TEST
function onOrderChanged(order: number) {
  console.log("New order : " + order);
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const component = useMemo(() => {
    //const { hideLayout } = Component;

    return <Component {...pageProps} />;
    /*return hideLayout ? (
      <Component {...pageProps} />
    ) : (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );*/
  }, [Component, pageProps]);

  return (
    <>
      <Head>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title key="title">Angel</title>
      </Head>
      <GlobalStyle />
      <NextIntlProvider locale="ru" messages={ruLocalization}>
        <ThemeProvider theme={theme}>
          <Card order={0} onOrderChanged={onOrderChanged} />
        </ThemeProvider>
      </NextIntlProvider>
    </>
  );
};

/*
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <ToastProvider>{component}</ToastProvider>
          </ThemeProvider>
        </Provider>
*/

export default App;
