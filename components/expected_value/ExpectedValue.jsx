import css from "./styles.scss";

const ExpectedValue = ({ children }) => (
  <p className={css.expected_value}>
    {children}
  </p>
);

export default ExpectedValue;
