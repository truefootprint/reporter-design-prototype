import Head from "next/head";
import css from "./styles.scss";

import "./reset.scss";

const Layout = ({ children }) => <>
  <Head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap" rel="stylesheet" />
  </Head>

  <div className={css.layout}>
    {children}
  </div>
</>;

export default Layout;
