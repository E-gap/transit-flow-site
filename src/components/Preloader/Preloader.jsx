import loader from "../../images/Spinner-0.9s-200px.gif";
import css from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={css.preloader}>
      <img src={loader} alt="qwerty" className={css.imagePreloader} />
    </div>
  );
};

export default Preloader;
