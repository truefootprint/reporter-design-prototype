import css from "./styles.scss";

const Summary = ({ children, className }) => (
  <div className={`${css.summary} ${className}`}>
    {children}
  </div>
);

export default Summary;
