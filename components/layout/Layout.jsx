import css from "./styles.scss";

import "./reset.scss";

const Layout = ({ children }) => <>
  <div className={css.layout}>
    {children}
  </div>
</>;

export default Layout;
