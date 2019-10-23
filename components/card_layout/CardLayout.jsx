import css from "./styles.scss";

const CardLayout = ({ children }) => (
  <div className={css.card_layout}>
    <div className={css.content}>
      {children}
    </div>
  </div>
);

export default CardLayout;
