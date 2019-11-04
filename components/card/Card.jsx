import css from "./styles.scss";

const Card = ({ children, className, onClick }) => (
  <div className={`${css.card} ${className} card`} onClick={onClick}>
    <div className={css.colored_bar} />

    <div className={css.content}>
      {children}
    </div>
  </div>
);

export default Card;
