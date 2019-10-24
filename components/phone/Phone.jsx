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

    window.onback = window.onback || (() => {});

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
        <div className={css.button} onClick={() => window.onback()}>
          <div className={css.back} />
        </div>

        <div className={css.button} onClick={() => alert("This button is disabled.")}>
          <div className={css.home} />
        </div>

        <div className={css.button} onClick={() => alert("This button is disabled.")}>
          <div className={css.apps} />
        </div>
      </div>
    </div>
  );
};

export default Phone;
