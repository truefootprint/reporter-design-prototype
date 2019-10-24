import css from "./styles.scss";

const CardLayout = ({ children, className }) => (
  <div className={`${css.card_layout} ${className}`}>
    <div className={css.content}>
      {children}
    </div>
  </div>
);

export default CardLayout;
