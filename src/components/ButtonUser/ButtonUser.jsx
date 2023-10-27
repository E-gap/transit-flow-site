import css from "./ButtonUser.module.css";

const ButtonUser = ({ text, view }) => {
  const style = css[view];

  return <button className={`${style} ${css.buttonUser}`}>{text}</button>;
};

export default ButtonUser;
