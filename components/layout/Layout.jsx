import Head from "next/head";
import css from "./styles.scss";

import "./reset.scss";

const Layout = ({ children }) => <>
  <Head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap" rel="stylesheet" />

    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />

    <script src="/scripts/inobounce.js"></script>
    <script src="/scripts/hammer.min.js"></script>
  </Head>

  <div className={css.layout}>
    {children}
  </div>
</>;

export default Layout;
