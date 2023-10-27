import css from "./HomeWhyChoose.module.css";
// import Container from "react-bootstrap/Container";
import LittleText from "../LittleText/LittleText";
import plane from "../../images/homeWhyChoose/plane.jpg";

const HomeWhyChoose = () => {
  return (
    <section className={css.homeWhyChoose}>
      <div>
        <div className={css.planeDiv}>
          <img src={plane} alt="plane" />
          <span className={css.span}></span>
        </div>
      </div>
      <div className={css.textDiv}>
        <div>
          <LittleText text="Why Choose" view="light" />
          <h2>
            We create opportunity to <br />
            reach potential
          </h2>
          <p className={css.textDiv_text}>
            Leverage agile frameworks to provide a robust synopsis for <br />
            strategy foster collaborative thinking to further the overall value{" "}
            <br />
            proposition.
          </p>
          <ul className={css.advantagesList}>
            <li className={css.advantagesItem}>Safe Package</li>
            <li className={css.advantagesItem}>Ship Everyware</li>
            <li className={css.advantagesItem}>Global Tracking</li>
            <li className={css.advantagesItem}>24/7 Support</li>
            <li className={css.advantagesItem}>In Time Delivery</li>
            <li className={css.advantagesItem}>Transparant Pricing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChoose;
