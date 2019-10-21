import css from "./styles.scss";

const Card = ({ children }) => (
  <div className={css.card}>
    <div className={css.colored_bar} />

    {children}
  </div>
);

export default Card;
