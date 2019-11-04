import { useEffect, useRef } from "react";
import css from "./styles.scss";

const CardLayout = ({ children, className }) => {
  const ref = useRef();

  useEffect(() => ref.current.scrollTo(0, 0), [children]);

  return (
    <div ref={ref} className={`${css.card_layout} ${className}`}>
      <div className={css.content}>
        {children}
      </div>
    </div>
  );
}

export default CardLayout;
