import css from "./LittleText.module.css";

const LittleText = ({ text, view }) => {
  const style = css[view];

  return (
    <div className={css.divText}>
      <span className={css.beforeText}></span>
      <p className={`${css.text} ${style}`}>{text}</p>
    </div>
  );
};

export default LittleText;
