import css from "./styles.scss";

const Card = ({ children, color }) => (
  <div className={css.card}>
    <div className={css.colored_bar} style={{ background: color }} />

    <div className={css.content}>
      {children}
    </div>
  </div>
);

export default Card;
