import css from "./styles.scss";

const QuestionText = ({ children }) => (
  <p className={css.question_text}>
    {children}
  </p>
);

export default QuestionText;
