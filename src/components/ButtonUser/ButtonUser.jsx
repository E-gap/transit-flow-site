import css from "./ButtonUser.module.css";

const ButtonUser = ({ text, view }) => {
  const style = css[view];

  return <button className={style}>{text}</button>;
};

export default ButtonUser;
