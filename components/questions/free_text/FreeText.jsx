import { useRef, useState, useEffect } from "react";
import css from "./styles.scss";

const FreeText = ({ text, placeholder, expected, unit }) => {
  const ref = useRef();
  const [rows, setRows] = useState(1);
  const [updating, setUpdating] = useState(false);

  const resetRows = () => {
    setRows(1);
    updateRows();
  };

  const updateRows = () => {
    const textarea = ref.current;

    if (textarea.scrollHeight > textarea.clientHeight) {
      setRows(rows + 1);
    }
  }

  useEffect(updateRows, [rows]);

  return (
    <div className={css.free_text}>
      <div className={css.field}>
        <span className={css.unit}>{unit}</span>

        <textarea ref={ref} rows={rows} placeholder={placeholder} onChange={resetRows} />
        <span className={css.outer_placeholder}>{placeholder}</span>
      </div>
    </div>
  );
};

export default FreeText;
