import css from "./HomeWeDo.module.css";
import Container from "react-bootstrap/Container";
import LittleText from "../LittleText/LittleText";
import shipIcon from "../../images/homeWeDo/ship-icon.svg";
import houseIcon from "../../images/homeWeDo/house-icon.svg";
import planeIcon from "../../images/homeWeDo/plane-icon.svg";
import carIcon from "../../images/homeWeDo/car-icon.svg";

const HomeWeDo = () => {
  return (
    <section className={css.homeWeDo}>
      <Container>
        <div className={css.allPartSection}>
          <div className={css.divText}>
            <LittleText text="What We Do" view="light" />
            <h1>
              Safe & Reliable <br /> Cargo Solutions
            </h1>
          </div>
          <ul className={css.servicesList}>
            <li className={css.servicesItem}>
              <img src={shipIcon} alt="ship icon" className={css.icon} />
              <div className={css.servicesItemText}>
                <div className={css.flex_column}>
                  <h2>Sea Transport Services</h2>
                  <p>
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </p>
                </div>
              </div>
            </li>
            <li className={css.servicesItem}>
              <img src={houseIcon} alt="house icon" className={css.icon} />
              <div className={css.servicesItemText}>
                <div className={css.flex_column}>
                  <h2>Warehousing Services</h2>
                  <p>
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </p>
                </div>
              </div>
            </li>
            <li className={css.servicesItem}>
              <img src={planeIcon} alt="plane icon" className={css.icon} />
              <div className={css.servicesItemText}>
                <div className={css.flex_column}>
                  <h2>Air Fright Services</h2>
                  <p>
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </p>
                </div>
              </div>
            </li>
            <li className={css.servicesItem}>
              <img src={carIcon} alt="car icon" className={css.icon} />
              <div className={css.servicesItemText}>
                <div className={css.flex_column}>
                  <h2>Local Shipping Services</h2>
                  <p>
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default HomeWeDo;
