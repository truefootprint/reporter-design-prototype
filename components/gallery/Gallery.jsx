import css from "./styles.scss";

const Gallery = ({ children }) => (
  <div className={css.gallery}>
    <div className={css.previous_card}>
      {children[0]}
    </div>

    <div className={css.current_card}>
      {children[1]}
    </div>

    <div className={css.next_card}>
      {children[2]}
    </div>
  </div>
);

export default Gallery;
