import css from "./styles.scss";

const Summary = ({ children }) => (
  <div className={css.summary}>
    {children}
  </div>
);

export default Summary;
