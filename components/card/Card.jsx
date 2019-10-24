import css from "./styles.scss";

const Card = ({ children, className }) => (
  <div className={`${css.card} ${className}`}>
    <div className={css.colored_bar} />

    <div className={css.content}>
      {children}
    </div>
  </div>
);

export default Card;
