import css from "./ButtonUser.module.css";

const ButtonUser = ({ text, view, tel }) => {
  const style = css[view];

  return (
    <button className={`${style} ${css.buttonUser}`}>
      {tel ? (
        <a className={css.buttonLink} href={`tel:${tel}`}>
          {text}
        </a>
      ) : (
        text
      )}
    </button>
  );
};

export default ButtonUser;
