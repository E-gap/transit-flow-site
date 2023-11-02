import css from "./ButtonUser.module.css";

const ButtonUser = ({ text, view, tel, path, handleButton }) => {
  const style = css[view];

  return (
    <button className={`${style} ${css.buttonUser}`} onClick={handleButton}>
      {!tel && !path && text}
      {tel && (
        <a className={css.buttonLink} href={`tel:${tel}`}>
          {text}
        </a>
      )}
      {path && (
        <a className={css.buttonLink} href={path}>
          {text}
        </a>
      )}
    </button>
  );
};

export default ButtonUser;
