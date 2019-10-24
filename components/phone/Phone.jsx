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
        <div className={css.back} onClick={() => window.onback()} />
        <div className={css.home} onClick={() => alert("This button is disabled.")} />
        <div className={css.apps} onClick={() => alert("This button is disabled.")} />
      </div>
    </div>
  );
};

export default Phone;
