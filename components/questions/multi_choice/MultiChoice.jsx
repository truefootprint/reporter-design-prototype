import { useState } from "react";
import css from "./styles.scss";

const MultiChoice = ({ choices }) => {
  const [selected, setSelected] = useState(null);

  return (
    <ul className={css.multi_choice}>
      {choices.map((choice, i) => (
        <li key={i} onClick={() => setSelected(i)} className={selected === i ? css.selected : null}>
          <div className={css.radio} />

          {choice}
        </li>
      ))}
    </ul>
  );
};

export default MultiChoice;
