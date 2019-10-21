import css from "./styles.scss";

const CardLayout = ({ children, title }) => (
  <div className={css.card_layout}>
    <h1>{title}</h1>

    <div className={css.content}>
      {children}
    </div>
  </div>
);

export default CardLayout;
