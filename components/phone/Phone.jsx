import { useState, useEffect } from "react";
import css from "./styles.scss";

const Phone = ({ children }) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const handle = setInterval(() => {
      const date = new Date();
      const minutes = `0${date.getMinutes()}`.slice(-2);
      const time = [date.getHours(), minutes].join(":");

      setTime(time);
    }, 1);

    return () => clearInterval(handle);
  }, []);

  return (
    <div className={css.phone}>
      <div className={css.status_bar}>
        <span className={css.item}>{time}</span>
      </div>

      <div className={css.viewport}>
        {children}
      </div>

      <div className={css.buttons}>
        <div className={css.back} />
        <div className={css.home} />
        <div className={css.apps} />
      </div>
    </div>
  );
};

export default Phone;
