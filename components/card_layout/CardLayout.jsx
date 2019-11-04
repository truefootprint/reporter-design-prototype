import { useEffect, useRef } from "react";
import css from "./styles.scss";

const CardLayout = ({ children, className, scroll }) => {
  const ref = useRef();

  useEffect(() => ref.current.scrollTo(0, scroll), [children]);

  return (
    <div ref={ref} className={`${css.card_layout} ${className}`}>
      <div className={css.content}>
        {children}
      </div>
    </div>
  );
}

export default CardLayout;
