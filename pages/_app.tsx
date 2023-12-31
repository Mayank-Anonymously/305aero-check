import React, { Fragment, useEffect } from "react";
import Router from "next/router";
import { wrapper } from "../store";
// Import the CSS file

// types
import type { AppProps } from "next/app";

// global styles
import "swiper/swiper.scss";
import "rc-slider/assets/index.css";
import "react-rater/lib/react-rater.css";
import "../assets/css/styles.scss";
import { saveState } from "../utils/localstorage";

// import * as gtag from './../utils/gtag';

const isProduction = process.env.NODE_ENV === "production";

// only events on production
// if(isProduction) {
//   // Notice how we track pageview when route is changed
//   Router.events.on('routeChangeComplete', (url: string) => gtag.pageview(url));
// }

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  </>
);

export default wrapper.withRedux(MyApp);
